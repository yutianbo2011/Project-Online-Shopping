import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductContext from './context/products';
import CartProvider from './context/cart';

ReactDOM.render(
    <CartProvider>
        <ProductContext>
            <App />
        </ProductContext>
    </CartProvider>,
     document.getElementById("root"));
