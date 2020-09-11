import React from "react";
import {CartContext} from '../../context/cart';
import {Link} from 'react-router-dom';


export default function CartLink() {
  const {cartItems} = React.useContext(CartContext);
  return <div className='cart-link-container'>
    <Link to='/cart' >Cart</Link>
    <span className='cart-link-total'>{cartItems}</span>
  </div>;
}
