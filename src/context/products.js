import React from 'react';

export const ProductContext = React.createContext();  //provider, consumer


export default function ProductProvider ( props) {
    const [loading, setLoading]=React.useState(false);
    const [product, setProduce]=React.useState([]);
    const [featured, setFeatured] =React.useState([]);
    return(
        <div>
            <ProductContext.Provider value={{product, loading, featured}} >
                {props.children}
            </ProductContext.Provider>
        </div>
    );
}