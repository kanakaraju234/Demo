import React, { Component } from 'react';
import {Route,Switch, Link} from 'react-router-dom';
import AddProducts from './components/AddProducts';
import Cart from './components/cart';
import './App.css'
class App extends Component {

  componentDidMount(){
    this.props.loadingListOfItems()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          <Link to='/'><h1>Grocery List</h1></Link>
          <Link to='/cart'><h1>cart</h1></Link>
        </div>

        <Switch>
          <Route exact path="/">
              <AddProducts {...this.props} />
          </Route>

          <Route exact path="/cart">
            <Cart data= {this.props.items} />
          </Route>
          
          
        </Switch>

      </div>
    )
  }
}

export default  App