import React from "react";
import './/BasketPage.scss';
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProducrCard";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
interface Props {}

const BasketPage = (props: Props) => {
  return(
    <>
      <NavBar></NavBar>
      <Logo></Logo>
      <SearchBar></SearchBar>
      <div className="basket">
        <p className="basket-label">Корзина</p>
        <section className="items">
          <section className="basket-product">
            <ProductCard></ProductCard>
            <section className="counter">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </section>
          </section>
          <section className="basket-product">
            <ProductCard></ProductCard>
            <section className="counter">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </section>
          </section>
          <section className="basket-product">
            <ProductCard></ProductCard>
            <section className="counter">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </section>
          </section>
          <section className="basket-info">
            <p>Сумма:     52 500 руб</p>
            <p>Скидка:    -5000 руб</p>
            <p>Доставка:    Бесплатно</p>
            <p>Итого:     52 500 руб</p>
            <button className="payment-button">К оплате</button>
          </section>
        </section>
      </div>
      <Footer></Footer>
    </>
  )
}

export default BasketPage;