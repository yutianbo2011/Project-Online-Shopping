import React, {useContext} from "react";
import {ProductContext} from '../context/products.js';

export default function Products() {
  const {product, loading, featured}= React.useContext(ProductContext);
  return <h1>hello from products page   </h1>;
}
