import React from "react";
import {FaAngleUp, FaAngleDown} from 'react-icons/fa'
import {CartContext} from '../../context/cart'




export default function CartItem(props) {
  const {removeItem, increaseAmount, decreaseAmount} = React.useContext(CartContext);
  return  <article className='cart-item'>
    <img src={props.image } alt={props.title} />
    <div>
      <h4>{props.title}</h4>
      <h5>${props.price}</h5>
      <button type='button' 
      className='cart-btn remove-btn '
      onClick={() => {
        removeItem(props.id);
      }} >
        remove
      </button>
    </div>
    <div>
      <button type='button' className='cart-btn amount-btn' onClick={()=>increaseAmount(props.id)}>
        <FaAngleUp />
      </button>
      <p className='item-amount' >{props.amount}</p>
      <button type='button' className='cart-btn amount-btn' onClick={()=>decreaseAmount(props.id, props.amount) }>
        <FaAngleDown />
      </button>
    </div>
  </article>;
}
