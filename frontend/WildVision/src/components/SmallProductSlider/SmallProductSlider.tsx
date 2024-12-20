import React from "react";
import './SmallProductSlider.scss';
import ProductCard from "../ProductCard/ProducrCard";
import { Product } from "../../types";

type AppProps = { products: Product[], name: string }

const SmallProductSlider = ({ products, name }: AppProps) => {
  // const products: Product[] = prods;
  console.log(products);
  return(
    <div className="discounts">
        <p className="discount-label">{name}</p>
        <section className="cards">
          <button onClick={() => document.getElementById("scrollable-section").scrollBy({
            top: 0,
            left: -312,
            behavior: 'smooth'
            }) 
          }>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="58" viewBox="0 0 32 58" fill="none">
            <path d="M0.763156 29.725C0.348156 29.3307 0.348157 28.6692 0.763157 28.275L29.8592 0.633728C30.7593 -0.221298 32.1021 1.00401 31.3329 1.97838L10.4892 28.3803C10.2024 28.7437 10.2024 29.2563 10.4892 29.6196L31.3329 56.0216C32.1021 56.996 30.7593 58.2213 29.8592 57.3663L0.763156 29.725Z" fill="#696969"/>
            </svg>
          </button>
          <section id="scrollable-section" className="gallery-cards">
            
            {products.map(e => (
              <ProductCard id={e.id} image={e.image} name={e.name} price={e.price} description={e.description} category={e.category} reviews={e.reviews}></ProductCard>
            ))}

          </section>
          <button  onClick={() => (document.getElementById("scrollable-section").scrollBy({
            top: 0,
            left: +312,
            behavior: 'smooth'
            }) 
          )}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="58" viewBox="0 0 32 58" fill="none">
            <path d="M31.2368 29.725C31.6518 29.3307 31.6518 28.6692 31.2368 28.275L2.14077 0.633728C1.24074 -0.221298 -0.102093 1.00401 0.667141 1.97838L21.5108 28.3803C21.7976 28.7437 21.7976 29.2563 21.5108 29.6196L0.667131 56.0216C-0.102104 56.996 1.24075 58.2213 2.14077 57.3663L31.2368 29.725Z" fill="#696969"/>
            </svg>
          </button>
        </section>
      </div>
  )
}

SmallProductSlider.defaultProps = {
  products: [],
  name: "Акции"
};

export default SmallProductSlider;