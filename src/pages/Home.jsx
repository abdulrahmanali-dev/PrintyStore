import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import About from "../components/About/About";
import FreeShipping from "../components/FreeShipping/FreeShipping";
import FeaturedProduct from "../components/FeaturedProduct/FeaturedProduct";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import Helmet from "../components/Helmet/Helmet";
import Timer from "../components/Timer/Timer";
// import Header from "../components/Header";
const Home = () => {
  return (
    <Helmet title="HOME">
      <Hero />
      <Features />
      <About />
      <FeaturedProduct />
      <Timer />
      <NewArrivals />
      <FreeShipping />
    </Helmet>
  );
};

export default Home;
