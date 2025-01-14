import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./ProductPage.scss";
import Footer from "../../components/Footer/Footer";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { addCart, fetchProduct } from "../../api";
import { Product } from "../../types";
import { useParams } from "react-router-dom";



const ProductPage = () => {

  const { id } = useParams<{ id: string }>();
  console.log(id);
  const [product, setProduct] = useState<Product>([]);
  useEffect(() => {
      fetchProduct(id).then((data) => setProduct(data));
    }, []);
  const reviews = product.reviews === undefined ? [] : product.reviews;
  console.log(reviews, )
  // const reviews = [
  //   {
  //     name: "Екатерина",
  //     date: "15.10.2021",
  //     rating: 5,
  //     review: "Очень классный товар лайк подписка лайк",
  //     pros: "заебися",
  //     cons: "не заебись",
  //     images: 
  //       "../../src/assets/shopping-bag.png"
      
  //   },
  //   {
  //     name: "Екатерина",
  //     date: "15.10.2021",
  //     rating: 5,
  //     review: "Очень классный товар лайк подписка лайк",
  //     pros: "заебися",
  //     cons: "не заебись",
  //     images: 
  //       "../../src/assets/shopping-bag.png"
      
  //   }
  // ];
    console.log(localStorage.getItem("authToken"));
  return (
    <>
      <NavBar></NavBar>
      <Logo></Logo>
      <SearchBar></SearchBar>
      <div className="product">
        <div className="product-main">
          <div className="product-front">
            {/* <div className="product-gallery">
              <img src="../../src/assets/shopping-bag.png" alt="" />
              <img src="../../src/assets/shopping-bag.png" alt="" />
              <img src="../../src/assets/shopping-bag.png" alt="" />
            </div> */}
            <div className="product-img">
              <img src={product.image} alt="" />
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <div className="product-rating">
                <img src="../../src/assets/5star.png" alt="" />
                <p>Отзывов: {reviews.length} </p>
              </div>
              <p>Гарантия 25 лет!</p>
              <div className="product-price">
                <p>{product.price}</p>
                <div className="product-save">
                  {/* <button>Купить</button> */}
                  <button onClick={() => addCart({ product_id: id })}>В корзину</button>
                </div>
              </div>
            </div>
          </div>

          <p className="product-description">
          {product.description}
          </p>

          <div className="product-back">
            <p>Характеристики</p>
            <section>
              <div>
                <p>Вес</p>
                <p>6кг</p>
              </div>
              <div>
                <p>Цвет</p>
                <p>универсальный</p>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </section>
          </div>

          

          {reviews.length !== 0 ? reviews.map(e => (<ReviewCard name={e.user} date={e.date} rating={e.rating} review={e.review_text} pros='все хорошо' cons='минусов не наблюдаю' images={e.image}></ReviewCard>)): null}

        </div>
      </div>
      
      <Footer></Footer>
    </>
  )
}

export default ProductPage;