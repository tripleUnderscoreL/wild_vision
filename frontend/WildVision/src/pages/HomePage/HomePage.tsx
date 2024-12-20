import React, { useEffect, useState } from "react";
import './HomePage.scss';
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import SmallProductSlider from "../../components/SmallProductSlider/SmallProductSlider";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import { Product } from "../../types";
import { fetchProducts } from "../../api";

const categories: Product[] = [
  {image:"../../src/assets/shopping-bag.png", name: "Категория 1", price: "", description: "", category: ""},
  {image:"../../src/assets/shopping-bag.png", name: "Категория 2", price: "", description: "", category: ""},
  {image:"../../src/assets/shopping-bag.png", name: "Категория 3", price: "", description: "", category: ""},
  {image:"../../src/assets/shopping-bag.png", name: "Категория 4", price: "", description: "", category: ""},
]


const HomePage = () => {
  
  const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
      fetchProducts().then((data) => setProducts(data));
      console.log(products);
    }, []);

  return(
    <>
      <NavBar></NavBar>
      <Logo></Logo>

      <SearchBar></SearchBar>  

      <div className="announcement">
        <img src="../../src/assets/lionhaha.png"></img>
        <div className="announcement-inner">
          <h1>СКИДКА до 30%</h1>
          <h2>на походное снаряжение</h2>
          <a href="/catalog">Ассортимент</a>
          <p>Мы заботимся о состоянии, защите природы и высоком качестве предоставляемой продукции</p>
        </div>
        <img src="../../src/assets/lionhaha2.jpeg"></img>
        <img src="../../src/assets/surokhaha.jpeg"></img>
      </div>

      <SmallProductSlider products={products}></SmallProductSlider>

      <a href="/catalog" className="link-to-products">Перейти в каталог</a>

      <div className="self-promotion">
        <section className="left-promotion">
          <img src="../../src/assets/checkboxG.png"></img>
          <p>В основе гарантий - тщательный отбор качественных сертифицированных товаров. Гарантийные обязательства составляют от 12 месяцев. Гарантийное обслуживание осуществляется бесплатно.
          </p>
        </section>
        
        <section className="right-promotion">
          <img src="../../src/assets/checkboxG.png"></img>
          <p>На рынке мы завоевали высокое доверие среди как любителей дикой природы, так и профессионалов и научных деятелей</p>
        </section>

        <section className="left-promotion">
          <img src="../../src/assets/checkboxG.png"></img>
          <p>Мы сотрудничаем напрямую с зарубежным производителем, поэтому гарантируем качество и справедливые цены.</p>
        </section>

        <section className="right-promotion">
          <img src="../../src/assets/checkboxG.png"></img>
          <p>Предоставляем новые приятные скидки и акции каждый новый сезон. Бесплатная гарантийная доставка на сумму от 50000 рублей. Скидка 15% при оптовой закупке.</p>
        </section>
      </div>

      <div className="faq">
        <section>
          <p>Доставляете в регионы?</p>
          <p>Доставка доступна по всей территории РФ. Возможен самовывоз с торговых точек Москвы, Санкт-Петербурга и Екатеринбурга.</p>
        </section>
        <section>
          <p>Какой срок гарантии?</p>
          <p>Гарантийный срок зависит от вида приобретенной продукции и года ее выпуска....</p>
        </section>
        <section>
          <p>Зачем нужен аккаунт?</p>
          <p>Регистрация вашего аккаунта позволяет использовать систему дополнительных....</p>
        </section>
        <section>
          <p>Как получить скидку?</p>
          <p>В нашем магазине действует система бонусов при покупке оптом или частом со....</p>
        </section>
        <section>
          <p>Какое качество продукта?</p>
          <p>Мы ведем канал в телеграмме, где наши покупатели могут делиться результат....</p>
        </section>
      </div>

      <SmallProductSlider products={categories} name="Популярные категории"></SmallProductSlider>

      <a href="/catalog" className="link-to-products">Перейти в каталог</a>
      <Footer></Footer>
    </>
  )
}

export default HomePage;