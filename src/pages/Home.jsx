import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import FreeShipping from "../components/FreeShipping";
import FeaturedProduct from "../components/FeaturedProduct";
import NewArrivals from "../components/NewArrivals";
import Helmet from "../components/Helmet";
import Timer from "../components/Timer";
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
