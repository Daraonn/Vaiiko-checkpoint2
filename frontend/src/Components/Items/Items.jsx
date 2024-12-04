import React from "react";
import './Items.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
    <div className="item-image">
    <Link to= {`/product/${props.id}`}>
     <img src={props.image} alt=""/>
     <p>{props.name}</p>
    </Link>
     <div className="item-description">
        {props.description}
     </div>
     <div className="item-price">
        {props.price}€
     </div>
    </div>

  )
}

export default Item;