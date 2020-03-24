import React, { Component } from 'react'
import { database } from '../components/firestore'

class AddProducts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      productName: '',
      description: '',
      price:'',
      selector:'ltr'

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const { productName, description,price,selector } = this.state
    database.ref('userinfo').push({ productName,description,price,selector })
    console.log(this.state)

    this.setState({
      productName: '',
      description: '',
      price:'',
      
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} name='grocery form'>
        <input
          type='text'
          name='productName'
          value={this.state.productName}
          onChange={this.handleChange}
          placeholder='product name'
        />
        <br />

        <input
          type='text'
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
          placeholder='product description'
        />
        <br />
        <input
          type='number'
          name='price'
          value={this.state.price}
          onChange={this.handleChange}
          placeholder='product price'
        />
        
        <select name="selector"
                   onChange={this.handleChange} 
                     value={this.state.selector}
                 >
                                    <option  value="Kg">Kg</option>
                                    <option  value="ltr">ltr</option>
                                    <option value="PerItem" >Per Item</option>
            </select>
        <br />
        <input type='submit' value='Add Product' />
      </form>
    )
  }
}

export default AddProducts
