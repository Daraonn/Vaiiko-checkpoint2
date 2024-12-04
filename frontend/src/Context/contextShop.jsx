import React, { createContext, useState } from 'react';
import ProductData from '../Components/Assets/products';

export const contextShop = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < ProductData.length; index++) {
        cart[ProductData[index].id] = 0;
    }
    return cart;
};

const ContextShopProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemID) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemID]: (prev[itemID] || 0) + 1 };
            console.log(newCart); 
            return newCart;
        });
    };

    const removeFromCart = (itemID) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemID]: Math.max((prev[itemID] || 0) - 1, 0) };
            console.log( newCart); 
            return newCart;
        });
    };

    const removeAllFromCart = (itemID) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemID]: 0 };
            console.log(newCart); 
            return newCart;
        });
    };

    const contextValue = { ProductData, cartItems, addToCart, removeFromCart, removeAllFromCart };

    return (
        <contextShop.Provider value={contextValue}>
            {props.children}
        </contextShop.Provider>
    );
};

export default ContextShopProvider;