import React from "react";
import ProductCard from "./ProductCard";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0:{
      items:1
  },
  600:{
      items:3
  },
  1000:{
      items:4
  }
  },
};
const ProductOwl = ({ data }) => {
 return (
      <OwlCarousel className="owl-theme" responsiveClass={true}  autoplay    margin={10} nav {...options}>
   {data.map((item, index) => (
    <ProductCard item={item} key={index} />
   ))}
   </OwlCarousel>
 );
};

export default ProductOwl;
