import React, { Component } from 'react';
import {database} from '../components/firestore';
 class Cart extends Component {

    constructor(props){
        super(props)
        this.state ={
            users:[]
        }
    }

    componentDidMount(){
        database.ref('userinfo').once('value').then((snapshot)=>{
            let users =[]
            console.log(users)
            snapshot.forEach(user =>{
                users.push({...user.val(),id:user.key})
            })
            this.setState({
                users
            })
        })
    }

    render() {
        console.log(this.state.users)

        const userinfo = this.state.users.map((user)=>{
            return (
                <tr>
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
