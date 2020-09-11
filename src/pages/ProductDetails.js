import React from "react";
import {useParams} from 'react-router-dom';
import {ProductContext} from '../context/products.js';
import {CartContext} from '../context/cart';
import {useHistory} from 'react-router-dom';
import Loading from '../components/Loading';

export default function ProductDetails() {
  const {id} = useParams();
  const history = useHistory();
  const {product,}= React.useContext(ProductContext);
  const {addToCart} = React.useContext(CartContext);
  console.log(product);
  const curProduct = product.find(item => item.id === parseInt(id) );
  if(typeof curProduct==='undefined' || curProduct===null || Object.keys(curProduct).length ===0){
    return <Loading />
  }
  else{
    const {image, title, price, description}= curProduct;
    return <section className='single-product' >
      <img src={image.url} alt={title} className='single-product-image'/>
      <article>
        <h1>{title}</h1>
        <h2> ${price}</h2>
        <p>{description}</p>
        <button className='btn btn-primary btn-block' onClick={
          () => {
            addToCart(curProduct);
            history.push('/cart');
          }
        } > add to cart </button>
      </article>
    </section>
  }
}
