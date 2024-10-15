import React from "react";
import './ProductCard.scss';
interface Props {}

const ProductCard = (props: Props) => {
  return(
    <>
      <div className="product-card">
        <svg xmlns="http://www.w3.org/2000/svg" width="252" height="236" viewBox="0 0 252 236" fill="none">
        <path d="M83.8714 88.6493V49.3831C83.8714 27.697 102.694 10.1169 125.807 10.1169C148.968 10.1169 167.743 27.7411 167.743 49.3831V88.6493M41.9357 69.0162H209.678V226.081H41.9357V69.0162Z" stroke="#696969" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p className="product-name">Товар 1</p>
      </div>
    </>
  ) 
}

export default ProductCard;