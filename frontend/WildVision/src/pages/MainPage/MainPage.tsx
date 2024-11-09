import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import './MainPage.scss';
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProducrCard";
import Footer from "../../components/Footer/Footer";
import SmallProductSlider from "../../components/SmallProductSlider/SmallProductSlider";
import Logo from "../../components/Logo/Logo";
import { Product } from "../../types";
interface Props {products: Product[]}




const MainPage = (props: Props) => {
  const products: Product[] = [
    {img: "../../src/assets/shopping-bag.png", name: "Сумка", price: "1000 руб"},
  ]
  console.log((props));
  return (
    <>
      <div className="nav-bar">
        <NavBar></NavBar>
      </div>

      <Logo></Logo>
      <SearchBar></SearchBar>      
      
      <SmallProductSlider> </SmallProductSlider>
      <div className="products">
        <div className="product-cards">
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
          <ProductCard img = {products[0].img} name = {products[0].name} price = {products[0].price}></ProductCard>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
  
}

export default MainPage;