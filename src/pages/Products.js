import React from "react";
import {ProductContext} from '../context/products.js';
import Loading from '../components/Loading';
import ProductList from '../components/Products/ProductList';

export default function Products() {
  const {product, loading, }= React.useContext(ProductContext);
  // console.log(product);
  if(loading){
    return <Loading />;
  }
  return (
    <ProductList title='our products' products={product} />
  );
}
