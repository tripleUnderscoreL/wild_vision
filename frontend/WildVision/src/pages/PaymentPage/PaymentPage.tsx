import React from "react";
import './PaymentPage.scss';
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";

const PaymentPage = () => {
  return(
    <>
      <NavBar></NavBar>
      <Logo></Logo>
      <SearchBar></SearchBar>
      <div className="payment-inner">
        <h1>Доставка и оплата</h1>
        <h2>Стоимость доставки</h2>
        <p>Доставка осуществляется на следующий день после заказа</p>
        <p>По городу - 200 руб, цена в другие города - в зависимости от расстояния</p>
        <p>Для оформления доставки свяжитесь по телефону: +7(900) 555 75 75 или через личный аккаунт</p>
        <p>Доставка по вашему региону осуществляется либо курьерской компанией СДЭК, либо Почтой России </p>
        <p>Для расчёта стоимости и сроков доставки свяжитесь по телефону : +7(900) 555 75 75 или через личный кабинет</p>
        <p>По всем вопросам можете обращаться в поддержку, написав на почту  WildVisionCo@gmail.com или позвонив по номеру телефона +7(900) 555 75 75   С уважением, WildVision!</p>
      </div>
      <Footer></Footer>
    </>
  )
}

export default PaymentPage;