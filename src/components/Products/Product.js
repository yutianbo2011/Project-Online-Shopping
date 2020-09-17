import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import img from '../../assets/mainBcg.jpeg';

function Product(props) {
  // console.log(props.image);
  return <article className='product'>
    <div className='img-container'>
      <img src={props.image || img} alt={props.title} />
      <Link to={'products/'+props.id} className='btn btn primary product-link' >details</Link>
    </div>
    <div className='product-footer'>
      <p className='product-title'>{props.title} </p>
      <p className='product-price' >${props.price || 0}</p>
    </div>
  </article>;
};

Product.prototype  = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default Product;
