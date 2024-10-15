import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import './MainPage.scss';
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProducrCard";
interface Props {}

const MainPage = (props: Props) => {
  return (
    <>
      <div className="nav-bar">
        <NavBar></NavBar>
      </div>

      <p className="wv">WildVision</p>
      <SearchBar></SearchBar>      
      
      <div className="discounts">
        <p className="discount-label">Акции</p>
        <section className="cards">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="58" viewBox="0 0 32 58" fill="none">
          <path d="M0.763156 29.725C0.348156 29.3307 0.348157 28.6692 0.763157 28.275L29.8592 0.633728C30.7593 -0.221298 32.1021 1.00401 31.3329 1.97838L10.4892 28.3803C10.2024 28.7437 10.2024 29.2563 10.4892 29.6196L31.3329 56.0216C32.1021 56.996 30.7593 58.2213 29.8592 57.3663L0.763156 29.725Z" fill="#696969"/>
          </svg>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="58" viewBox="0 0 32 58" fill="none">
          <path d="M31.2368 29.725C31.6518 29.3307 31.6518 28.6692 31.2368 28.275L2.14077 0.633728C1.24074 -0.221298 -0.102093 1.00401 0.667141 1.97838L21.5108 28.3803C21.7976 28.7437 21.7976 29.2563 21.5108 29.6196L0.667131 56.0216C-0.102104 56.996 1.24075 58.2213 2.14077 57.3663L31.2368 29.725Z" fill="#696969"/>
          </svg>
        </section>
      </div>

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
    </>
  )
  
}

export default MainPage;