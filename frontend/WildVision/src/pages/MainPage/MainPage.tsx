import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import './MainPage.scss';
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProducrCard";
import Footer from "../../components/Footer/Footer";
import SmallProductSlider from "../../components/SmallProductSlider/SmallProductSlider";
interface Props {}

const MainPage = (props: Props) => {
  return (
    <>
      <div className="nav-bar">
        <NavBar></NavBar>
      </div>

      <p className="wv">WildVision</p>
      <SearchBar></SearchBar>      
      
      <SmallProductSlider> </SmallProductSlider>

      <div className="products">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <Footer></Footer>
    </>
  )
  
}

export default MainPage;