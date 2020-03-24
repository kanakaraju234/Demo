import React, {Component} from 'react';

class AddProducts extends Component {
    constructor(props){
        super(props)
        this.state ={
            productName:"",
            description:''

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

        
    }

handleChange(e){
    this.setState({
        
        [e.target.name] : e.target.value
    })

}

handleSubmit(e){
    e.preventDefault();

    console.log(this.state)

    this.setState({
        productName:'',
        description:''

    })
}

    render(){
        return(
            <form onSubmit={this.handleSubmit} name="grocery form">
            <input type="text"
            name="productName"
            value={this.state.productName}
            onChange={this.handleChange}
            placeholder="product name"
            /><br/>

            <input type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="product description"
            /><br/>
            <input type="submit" value="Add Product"/>
            
            </form>
        )
    }
}

export default AddProducts