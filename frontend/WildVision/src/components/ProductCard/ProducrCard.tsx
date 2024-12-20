import React from "react";
import './ProductCard.scss';
import { Product } from "../../types";

const ProductCard = (product: Product) => {
  return(
    <>
      <div className="product-card" onClick={() => 
      
      {
        window.location.href = `/product/${product.id}`
      }}>
        <img src={product.image}></img>
        <p className="product-name">{product.name}</p>
        <p className="product-price"> {product.price}</p>
      </div>
    </>
  ) 
}

ProductCard.defaultProps = {
  img: "../../src/assets/shopping-bag.png",
  name: "Сумка",
  price: "1000 руб"
}

export default ProductCard;