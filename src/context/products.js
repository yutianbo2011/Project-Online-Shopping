import React from 'react';
import axios from 'axios';
import url from '../utils/URL';
import {featuredProducts, flattenProducts, paginate} from '../utils/helpers';

export const ProductContext = React.createContext();  //provider, consumer

export default function ProductProvider ( props) {
    const [loading, setLoading]=React.useState(false);
    const [product, setProduct]=React.useState([]);
    const [featured, setFeatured] =React.useState([]);
    //for the filter of product
    const [sorted, setSorted] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [filter, setFilter] = React.useState({
        search:'',
        category:'all',
        price:'all',
    });

    const changePage = (index) =>{
        setPage(index);
    };

    const updateFilters = (event) =>{
        const type = event.target.type;
        const filterName = event.target.name;
        const value = event.target.value;
        // console.log(type, filter, value);
        let filterValue;
        if(type==='radio'){
            value==='all'? (filterValue=value) : filterValue = parseFloat(value) ;
        }
        else filterValue = value;
        setFilter({...filter, [filterName]:filterValue});
    }

    React.useEffect(()=>{
        setLoading(true);
        axios.get(`${url}/products`).then(
            response => {
                // console.log(response);
                const newFeatured=featuredProducts(flattenProducts(response.data));
                const newProduct= flattenProducts(response.data);
                setFeatured(newFeatured);
                setProduct(newProduct);
                setLoading(false);
                setSorted(paginate(newProduct));
            }
        );
        return () => {   //the returned function is clean up function.
        }    
    }, []);

    React.useEffect(()=>{   //set filter and product to be rendered. 
        let newProduct = [...product].sort( (a,b)=>{return a.price - b.price} );
        const {search, category, price} = filter;
        // console.log(search, category, price);
        if(category !== 'all'){
            newProduct = newProduct.filter((item)=>{ return item.title.toUpperCase().search(category.toUpperCase()) !== -1 });
        }
        if(price!=='all'){
            newProduct = newProduct.filter((item)=>{ return item.price<=price} );
        }
        if(search!==''){
            newProduct = newProduct.filter((item)=>{ return item.title.toUpperCase().search(search.toUpperCase()) !== -1} );
        }
        setPage(0);
        setSorted(paginate(newProduct));
    }, [filter, product])

    return(
        <div>
            <ProductContext.Provider 
                value={{product, loading, featured, sorted, page, filter,
                setFeatured, setPage, setSorted, changePage, updateFilters}} >
                {props.children}
            </ProductContext.Provider>
        </div>
    );
}