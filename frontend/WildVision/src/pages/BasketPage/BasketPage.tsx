/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from "react";
import './/BasketPage.scss';
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProducrCard";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import { fetchProduct, getCart, getCartProducts, getToken } from "../../api";
import { Cart, Product } from "../../types";
interface Props {}

const BasketPage = (props: Props) => {
  const [cart, setCart] = useState<Cart>();
  
  useEffect(() => {
      getCart(getToken()).then((data) => setCart(data));
  }, []);
  console.log(cart);
  const cart_total: number = cart === undefined || cart === null ? 0 : (cart.total === null || cart.total === undefined ? 0 : cart.total);
  

  let cartItems = [];
  let cartAmount = [] 
  if (cart !== undefined) {
    for (let i = 0; i < cart.items.items.length; i++) {
      cartItems.push(cart.items.items[i].product.price);
      cartAmount.push(cart.items.items[i].quantity);
    }
  }
  console.log(cartItems);
  console.log(cartAmount);

  const [localCart, setLocalCart] = useState(cart || { items: { items: [] } });
  
  const incrementQuantity = (index) => {
    setLocalCart(cart)
    const updatedCart = { ...localCart }; // Создаем копию текущего состояния корзины
    updatedCart.items.items[index].quantity += 1; // Увеличиваем количество
    setLocalCart(updatedCart); // Обновляем состояние
  };

  const decrementQuantity = (index) => {
    setLocalCart(cart)
    const updatedCart = { ...localCart };
    if (updatedCart.items.items[index].quantity > 1) {
      updatedCart.items.items[index].quantity -= 1;
      setLocalCart(updatedCart);
    }
  };
  // async function getProductCard(id: []) {
  //   const products = [];
  //   for (let i = 0; i < id.length; i++) {
  //     products.push = await fetchProduct(id[i]); // Ждём выполнения
  //   }
  //   return(products);
  // }
  // console.log(getProductCard(cartItems));

  // const cartItems = [];
  // cart === undefined ? null : cart.items.map(e => 
  //     useEffect(() => {
  //       fetchProduct(e.product).then((data) => setProduct(data));
  //     }, []),
  //   cartItems.push(product)
  // )
  // console.log(cartItems);
  return(
    <>
      <NavBar></NavBar>
      <Logo></Logo>
      <SearchBar></SearchBar>
      <div className="basket">
        <p className="basket-label">Корзина</p>
        <section className="items">
          {cart === undefined ? null : cart.items.items.map((e, index) => 
            <section className="basket-product">
              <ProductCard name={e.product.name} price={e.product.price} image={'	http://127.0.0.1:8000/'+e.product.image}></ProductCard>
              <section className="counter">
                <button onClick={() => decrementQuantity(index)}>-</button>
                <p>{e.quantity}</p>
                <button onClick={() => incrementQuantity(index)}>+</button>
              </section>
            </section>
          )}
          
          {/* <section className="basket-product">
            <ProductCard name="Рюкзак для оборудования WildPack 40L" price="12000.90" image="../../src/assets/backpack.jpg"></ProductCard>
            <section className="counter">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </section>
          </section>
          <section className="basket-product">
            <ProductCard name="WildVision Observer Pro" price="19990.99" image="../../src/assets/droneScaryUfo.jpg"></ProductCard>
            <section className="counter">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </section>
          </section>
          <section className="basket-product">
            <ProductCard name="WildVision Observer Pro" price="19990.99" image="../../src/assets/droneScaryUfo.jpg"></ProductCard>
            <section className="counter">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </section>
          </section>
          <section className="basket-product">
            <ProductCard name="WildVision Observer Pro" price="19990.99" image="../../src/assets/droneScaryUfo.jpg"></ProductCard>
            <section className="counter">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </section>
          </section> */}
          <section className="basket-info">
            <p>Сумма:     {cart_total}</p>
            <p>Скидка:    -5000 руб</p>
            <p>Доставка:    Бесплатно</p>
            <p>Итого:     {cart_total - 5000 > 0 ? cart_total - 5000 : 0}</p>
            <button className="payment-button">К оплате</button>
          </section>
        </section>
      </div>
      <Footer></Footer>
    </>
  )
}

export default BasketPage;