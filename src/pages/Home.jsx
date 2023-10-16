import React, { useEffect, useState } from "react";
import FreeShipping from "../components/FreeShipping";
import Helmet from "../components/Helmet";
import Timer from "../components/UI/Timer";
import featuresData from "../assets/data/serviceData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import allProducts from "../assets/images/products/stickers/stickers-1.webp";
import stickercollection from "../assets/images/products/stickers/stickers-2.webp";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import products from "../assets/data/products";
import ProductOwl from "../components/UI/ProductOwl";
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
    setPostersProducts(filteredPostersProducts);
    setStickersProducts(filteredStickersProducts);
  }, []);
  return (
    <Helmet title="HOME">
      <section
        className="hero "
        style={{ backgroundImage: `url('${allProducts}')` }}
      >
        <div className="overlay"></div>
        <div className="info ">
          <h2>NOT ONLY</h2>
          <h2>STICKERS</h2>
          <p>
            Welcome to PRINTY STORE! Your one-stop destination for vibrant
            stickers and intricate figures. Dive in, explore, and let your
            creativity soar!
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
        {featuresData.map((item, index) => (
          <div className=" feat" key={index}>
            <div className="info">
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
                Experience the luxury of customization at PRINTY STORE's
                Premium. Here, size is a choice, not a constraint. Personalize
                your stickers and figures to match your vision. Unleash your
                creativity and let your imagination take flight!
              </p>
              <p>
              So why hold back? Step into our world, choose your size, personalize your items, and watch as your imagination comes to life!
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
          <ProductOwl data={stickersProducts} />
        </Container>
      </section>
      <Timer />
      <section class="featured-products">
        <Container>
          <h2 class="heading">Stickers</h2>
          <ProductOwl data={postersProducts} />
        </Container>
      </section>
      <FreeShipping />
    </Helmet>
  );
};

export default Home;
