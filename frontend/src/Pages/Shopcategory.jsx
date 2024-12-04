import React, { useContext } from 'react';
import './Shopcategory.css';
import {contextShop} from '../Context/contextShop'
import Item from '../Components/Items/Items'

const Shopcategory = (props) => {
  const {ProductData} = useContext(contextShop)
  return (
    <div>
        <div className="shop-category-products">
          {ProductData.map((item,i) =>{
            if(props.category === item.category) {
              return (
              <Item key={i}
              id={item.id}
              name={item.name}
              image={item.image} 
              description ={item.description}
              price ={item.price}
              />
              );
            } else {
              return null;
            }

          } 
        )
      }       

        </div>
    </div>
  );
}

export default Shopcategory;