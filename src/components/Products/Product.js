import React from "react";
import { Link } from 'react-router-dom';

export default function Product(props) {
  // console.log(props.image);
  return <article className='product'>
    <div className='img-container'>
      <img src={props.image} alt={props.title} />
      <Link to={'products/'+props.id} className='btn btn primary product-link' >details</Link>
    </div>
    <div className='product-footer'>
      <p className='product-title'>{props.title} </p>
      <p className='product-price' >${props.price}</p>
    </div>
  </article>;
}
