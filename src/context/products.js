import React from 'react';
import axios from 'axios';
import url from '../utils/URL';
import {featuredProducts, flattenProducts} from '../utils/helpers';

export const ProductContext = React.createContext();  //provider, consumer

export default function ProductProvider ( props) {
    const [loading, setLoading]=React.useState(false);
    const [product, setProduct]=React.useState([]);
    const [featured, setFeatured] =React.useState([]);

    React.useEffect(()=>{
        setLoading(true);
        axios.get(`${url}/products`).then(
            response => {
                console.log(response);
                const newFeatured=featuredProducts(flattenProducts(response.data));
                const newProduct= flattenProducts(response.data);
                setFeatured(newFeatured);
                setProduct(newProduct);
                setLoading(false);
                
            }
        );
        return () => {   //the returned function is clean up function.

        }    
    }, []);

    return(
        <div>
            <ProductContext.Provider value={{product, loading, featured}} >
                {props.children}
            </ProductContext.Provider>
        </div>
    );
}