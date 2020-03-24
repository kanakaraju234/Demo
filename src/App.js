import React, { Component } from 'react';
import {Route,Switch, Link} from 'react-router-dom'
import AddProducts from './components/AddProducts'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/'><h1>Grocery List</h1></Link>
          <Link to='/cart'><h1>cart</h1></Link>
        </div>

        <Switch>
          <Route exact path="/">
              <AddProducts />
          </Route>

          <Route exact path="/cart">
    {/*<Dcart />*/}
          </Route>
          
          
        </Switch>

      </div>
    )
  }
}

export default  App