import React, { useEffect, useState } from "react";
import FreeShipping from "../components/FreeShipping";
import NewArrivals from "../components/NewArrivals";
import Helmet from "../components/Helmet";
import Timer from "../components/UI/Timer";

import features from "../assets/data/serviceData";

import allProducts from "../assets/images/products/stickers/stickers-1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import stickercollection from "../assets/images/products/stickers/stickers-2.webp";
import { Col, Container, Row } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";
const Home = () => {
 const [postersProducts, setPostersProducts] = useState(products);
 const [stickersProducts, setStickersProducts] = useState(products);
 const [newArrivals, setNewArrivals] = useState(products);

 useEffect(() => {
  const filteredPostersProducts = products.filter(
   (item) => item.category === "posters"
  );
  const filteredStickersProducts = products.filter(
   (item) => item.category === "stickers"
  );
  const filteredNewArrivals = products.filter(
   (item) => item.category === "stickers"
  );
  setPostersProducts(filteredPostersProducts);
  setStickersProducts(filteredStickersProducts);
  setNewArrivals(filteredNewArrivals);
 }, []);
 return (
  <Helmet title="HOME">
   <section
    className="hero d-flex justify-content-center align-items-center text-center"
    style={{ backgroundImage: `url('${allProducts}')` }}
   >
    <div className="overlay"></div>
    <div className="info ">
     <h2>NOT ONLY</h2>
     <h2>STICKERS</h2>
     <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
      voluptas beatae veritatis nulla similique voluptatem suscipit at
     </p>
     <div className="Social-media">
      <a
       href="https://www.facebook.com/profile.php?id=100087175977512"
       target="_blank"
      >
       <i class="fab fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/printy_sy/" target="_blank">
       <i class="fab fa-instagram"></i>
      </a>
     </div>
    </div>
   </section>
   <section className="features">
    {features.map((item, index) => (
     <div className=" feat" key={index}>
      <div className="info d-flex flex-column justify-content-center align-items-center ">
       <div className="icon">
        <FontAwesomeIcon icon={item.icon} />
       </div>
       <p className="text-center">{item.title}</p>
      </div>
     </div>
    ))}
   </section>
   <section className="about">
    <Container>
     <Row>
      <Col lg="6" md="12">
       <img src={stickercollection} />
      </Col>
      <Col lg="6" md="12">
       <h2>
        Print custom stickers in any size on
        <span> Premium</span>
       </h2>
       <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
        temporibus, facilis alias atque id nesciunt. Modi porro qui aperiam,
        enim mollitia ipsam a culpa deleniti corporis illum dolorum nam.
       </p>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus
        saepe quam!
       </p>
       <NavLink to="shop">
        <div className="btn-awesome btn">ORDER NOW</div>
       </NavLink>
      </Col>
     </Row>
    </Container>
   </section>
   <section class="featured-products">
    <Container>
     <h2 class="heading">Featured Products</h2>
     <ProductList data={postersProducts} />
     {/* <ProductList data={stickersProducts} /> */}
    </Container>
   </section>
   <Timer />
   <section class="featured-products">
    <Container>
     <h2 class="heading">Stickers</h2>
     <ProductList data={postersProducts} />
    </Container>
   </section>
   <FreeShipping />
  </Helmet>
 );
};

export default Home;
