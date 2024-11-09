import React from "react";
import './NavBar.scss';
import ModalSign from "../Modal/ModalSignIn/ModalSign";
interface Props {}

const NavBar = (props: Props) => {
  return(
    <div className="navbar">
      <a href="/reviews">Отзывы</a>
      <a href="/payment">Оплата</a>
      <a href="/guarantees">Гарантии</a>
      <a href="/">Доставка</a>
      <a href="/">Контакты</a>
      <ModalSign></ModalSign>
    </div>
  ) 
}

export default NavBar;