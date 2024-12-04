import React, { useContext } from "react";
import "./CartItems.css";
import { contextShop } from "../../Context/contextShop";

const CartItems = () => {
    const { ProductData, cartItems, addToCart, removeFromCart, removeAllFromCart } = useContext(contextShop);

    return (
        <div className="cart-items">
            <div className="cart-items-main">
                <p>Produkt</p>
                <p>Názov</p>
                <p>Počet</p>
                <p>Cena</p>
                <p>Cena spolu</p>
                <p>Odobrať</p>
            </div>
            <hr />
            {ProductData.map((e) => {
                if (cartItems?.[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cart-items-lesser cart-items-main">
                                <img src={e.image} alt="" className="cart-product-image"/>
                                <p>{e.name}</p>
                                <p>{cartItems[e.id]}</p>

                                <p>{e.price}€</p>
                                
                                <p>{e.price * cartItems[e.id]}€</p>
                                <button className="cart-items-remove-all" onClick={() => removeAllFromCart(e.id)} > Odobrať </button>
                                <div className="cart-buttons-quantity">
                                    <button className="cart-items-remove" onClick={() => removeFromCart(e.id)}>-</button>
                                    <button className="cart-items-add" onClick={() => addToCart(e.id)}>+</button>
                                </div>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default CartItems;
