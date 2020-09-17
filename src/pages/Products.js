import React from "react";
import {ProductContext} from '../context/products.js';
import Loading from '../components/Loading';
import Filters from '../components/Products/Filters';
import PageProducts from "../components/Products/PageProduct";

export default function Products() {
  const { loading}= React.useContext(ProductContext);
  // console.log(product);
  if(loading){
    return <Loading />;
  }
  return (
    // <ProductList title='our products' products={sorted} />
    <div>
      <Filters />
      <PageProducts />
    </div>
  );
}
