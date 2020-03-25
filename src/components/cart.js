import React, { Component } from 'react';

 class Cart extends Component {

    constructor(props){
        super(props)
        this.state ={
            users:this.props.data
        }
    }

    componentDidMount(){
       
    }

    render() {
        console.log(this.state.users)

        const userinfo = this.props.data.map((user,index)=>{
            return (
                <tr key={index}>
                    <td>{user.productName}</td>
                    <td>{user.price}</td>
                    <td><button>AddToCart</button> </td>
                
                </tr>
            )
        })
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>ProductName</th>
                        <th>price</th>
                        <th>Add To cart </th>
                        </tr>
                    </thead>

                    <tbody>
                    {userinfo}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default Cart
