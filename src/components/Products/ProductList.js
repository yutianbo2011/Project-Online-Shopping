import React from "react";
import Product from './Product';

export default function ProductList(props) {
  return (
    <section>
      <h2 className='section-title'>{props.title}</h2>
      <div className='products-center'>
        {props.products.map(item => {
          return <Product key={item.id} {...item} />
        })}
      </div>
    </section>
  );
}
