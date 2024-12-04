import React, { useContext } from 'react'
import './ProductDisplay.css'
import { contextShop } from '../../Context/contextShop';

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(contextShop);
    if (!product) {
        return <div>Načitáva sa</div>;
    }
  return (
    <div className="product-display">
        <div className="product-left">
            <div className="display-image-main">
                <img src={product.image} alt="main" className="main" />
                <div className="display-image-lesser">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />  
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
            </div>
        </div>
        <div className="product-right">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <div className="display-price">
                <p>{product.price}€</p>
            </div>
            <div className="left-buy">
                <button onClick={()=>{addToCart(product.id)}}>Do košíka </button>
            </div>

        </div>
    </div>
  )
}
