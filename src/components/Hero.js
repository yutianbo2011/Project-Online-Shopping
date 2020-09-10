import React from "react";


export default function Hero({children}) {
  return (
    <div className='hero'>
      <div className='banner'>
        <h1>Save, Durable, Low Price</h1>
        <p> Embrace your choices -- we do </p>
        {children}
      </div>
    </div>
  );
}
