import React from "react";
import {Link} from 'react-router-dom';
import '../../styles/UserCart.css'

const UserCart = ()=>{
    
    return(
        <div className="user-cart">
            <Link className="fa fa-shopping-cart" to='cart'> Carrinho</Link>
        </div>
    )
}

export default UserCart