import React from "react";
import './NavBar.scss';
interface Props {}

const NavBar = (props: Props) => {
  return(
    <div className="navbar">
      <a href="/">Отзывы</a>
      <a href="/">Оплата</a>
      <a href="/">Гарантии</a>
      <a href="/">Доставка</a>
      <a href="/">Контакты</a>
      <a href="/">Регистрация/Вход</a>
    </div>
  ) 
}

export default NavBar;