import React from 'react';
import axios from 'axios';
import url from '../utils/URL';
import {featuredProducts} from '../utils/helpers';

export const ProductContext = React.createContext();  //provider, consumer

export default function ProductProvider ( props) {
    const [loading, setLoading]=React.useState(false);
    const [product, setProduct]=React.useState([]);
    const [featured, setFeatured] =React.useState([]);

    React.useEffect(()=>{
        setLoading(true);
        axios.get(`${url}/products`).then(
            response => {
                const newFeatured=featuredProducts(response.data);
                setFeatured(newFeatured);
                setProduct(response.data);
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