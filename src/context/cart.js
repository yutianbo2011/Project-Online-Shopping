import React from 'react';
import localCart from '../utils/localCart';

const getCartFromLocalStorage = () =>{
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}

export const CartContext = React.createContext();

export default function CarProvider(props){
    const [cart, setCart ] = React.useState(getCartFromLocalStorage());
    const [total, setTotal] =React.useState(0);
    const [cartItems, setCartItems] = React.useState(0);

    React.useEffect( ()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
        let newCartItems=cart.reduce( (count, curItem)=>{
            return count + curItem.amount;
        }, 0 );
        setCartItems(newCartItems);
        let newTotal = cart.reduce((total, curItem)=>{
            return total + curItem.amount * curItem.price;
        }, 0)
        newTotal=parseFloat(newTotal.toFixed(2)) ;
        setTotal(newTotal);
    }, [cart])

    const removeItem = (id)=>{
        setCart([...cart].filter((item => item.id!==id )));
    }

    const increaseAmount = (id)=>{
        setCart([...cart].map((item)=>{
            if(item.id=== id ) {
                return {...item, amount: item.amount+1};
            }
            else {
                return {...item};
            }
        } ))
    }

    const decreaseAmount = (id, amount)=>{
        if(amount === 1 ) {
            removeItem(id);
            return ;
        }
        setCart([...cart].map((item)=>{
            return (item.id=== id ) ? {...item, amount: item.amount-1}: {...item};
        } ))

    }
    const addToCart = (product)=>{
        const item= cart.findIndex(item => item.id === product.id);
        if(item !==-1) {
            increaseAmount(product.id);
        }
        else{
            const newItem= {id: product.id, price: product.price, title: product.title, image: product.image.url, amount: 1};
            const newCart = [...cart, newItem];
            setCart(newCart);
        }
    }
    const clearCart = ()=>{
        setCart([]);
    }

    return <CartContext.Provider value={{cart, total, cartItems, removeItem, increaseAmount, decreaseAmount, addToCart, clearCart}}>
        {props.children}
    </CartContext.Provider>
}
