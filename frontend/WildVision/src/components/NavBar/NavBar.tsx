import React from "react";
import './NavBar.scss';
import ModalSign from "../Modal/ModalSignIn/ModalSign";
interface Props {}

const NavBar = (props: Props) => {
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

export default NavBar;