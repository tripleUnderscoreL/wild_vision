import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import './MainPage.scss';
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProducrCard";
import Footer from "../../components/Footer/Footer";
import SmallProductSlider from "../../components/SmallProductSlider/SmallProductSlider";
import Logo from "../../components/Logo/Logo";
import { Product } from "../../types";
import { fetchProducts } from "../../api";
interface Props {products: Product[]}




const MainPage = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
    console.log(products);
  }, []);

  return (
    <>
      <div className="nav-bar">
        <NavBar></NavBar>
      </div>

      <Logo></Logo>
      <SearchBar></SearchBar>      
      
      <SmallProductSlider products={products}> </SmallProductSlider>
      <div className="products">
        <div className="product-cards">
          {products.map(e => (
            <ProductCard id={e.id} image = {e.image} name = {e.name} price = {e.price} description={e.description} category={e.category} reviews={e.reviews}/>
          ))}
          
        </div>
      </div>
      <Footer></Footer>
    </>
  )
  
}

export default MainPage;