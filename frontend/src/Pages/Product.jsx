import React, {useEffect, useState } from 'react';
import { useContext } from 'react';
import { contextShop } from '../Context/contextShop';
import {useParams} from 'react-router-dom';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {ProductData} = useContext(contextShop)
  const {productID} = useParams();
  const [product, setProduct] = useState(null);

    useEffect(() => {
    if (ProductData && Array.isArray(ProductData)) {
      const foundProduct = ProductData.find(
        (prop) => prop.id === Number(productID)
      );
      setProduct(foundProduct);
    } else {
      console.error("Error 404");
    }
  }, [productID, ProductData]); 
  return (
    <div>
        <ProductDisplay product={product} />
    </div>
  );
}

export default Product;