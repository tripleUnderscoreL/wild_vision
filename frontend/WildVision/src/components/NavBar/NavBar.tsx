import React from "react";
import './NavBar.scss';
import ModalSign from "../Modal/ModalSignIn/ModalSign";
import { getToken } from "../../api";

const NavBar = () => {
  if (getToken() === null){
    return(
      <div className="navbar">
        <a href="/reviews">Отзывы</a>
        <a href="/payment">Доставка и оплата</a>
        <a href="/guarantees">Гарантии</a>
        <a href="/faq">FAQ</a>
        <ModalSign></ModalSign>
      </div>
    )
  }
  else{
    return(
      <div className="navbar">
        <a href="/reviews">Отзывы</a>
        <a href="/payment">Доставка и оплата</a>
        <a href="/guarantees">Гарантии</a>
        <a href="/faq">FAQ</a>
        <div className="navbar">
          <a href="/profile"><img src="../../src/assets/profile_pic.png"></img></a>
          <a href="/basket"><img src="../../src/assets/basket_pic.png"></img></a>
        </div>
      </div>
    ) 
  }
  
}

export default NavBar;