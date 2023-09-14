import React from "react";
import FreeShipping from "../components/FreeShipping";
import FeaturedProduct from "../components/FeaturedProduct";
import NewArrivals from "../components/NewArrivals";
import Helmet from "../components/Helmet";
import Timer from "../components/UI/Timer";
// import Header from "../components/Header";

import allProducts from "../assets/images/products/packs/all-products.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import stickercollection from "../assets/images/products/packs/collection.webp";
import { Col, Container, Row } from "reactstrap";
import { Link, NavLink } from "react-router-dom";


const Home = () => {
  return (
    <Helmet title="HOME">
   <section
   className="hero d-flex justify-content-center align-items-center text-center"
   style={{backgroundImage: `url('${allProducts}')`, }}
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
      <div className="container">
        <div className="d-flex gap-5 justify-content-center align-items-center flex-wrap">
          <div className=" feat">
            <div className="info d-flex flex-column justify-content-center align-items-center ">
              <div className="icon">
                <FontAwesomeIcon icon="fas fa-sticky-note" />
              </div>
              <p className="text-center">Stickers</p>
            </div>
          </div>
          <div className=" feat">
            <div className="info d-flex flex-column justify-content-center align-items-center ">
              <div className="icon">
                <i class="fa-solid fa-dragon"></i>
              </div>
              <p className="text-center">Figures</p>
            </div>
          </div>
          <div className=" feat">
            <div className="info d-flex flex-column justify-content-center align-items-center ">
              <div className="icon">
                <i class="fa-solid fa-image"></i>
              </div>
              <p className="text-center">Posters</p>
            </div>
          </div>
          <div className=" feat">
            <div className="info d-flex flex-column justify-content-center align-items-center ">
              <div className="icon">
                <i class="fas fa-tag"></i>
              </div>
              <p className="text-center">Lables</p>
            </div>
          </div>
        </div>
      </div>
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
       temporibus, facilis alias atque id nesciunt. Modi porro qui aperiam, enim
       mollitia ipsam a culpa deleniti corporis illum dolorum nam.
      </p>
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus saepe
       quam!
      </p>
      <NavLink to="shop">
       <div className="btn-awesome btn">ORDER NOW</div>
      </NavLink>
     </Col>
    </Row>
   </Container>
  </section>
      <FeaturedProduct />
      <Timer />
      <NewArrivals />
      <FreeShipping />
    </Helmet>
  );
};

export default Home;
