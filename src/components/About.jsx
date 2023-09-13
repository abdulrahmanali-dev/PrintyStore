import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col lg="6" md="12">
            <img
              src={require("../assets/images/products/packs/collection.webp")}
            />
          </Col>
          <Col lg="6" md="12">
            <h2>
              Print custom stickers in any size on
              <span> Premium</span>
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              temporibus, facilis alias atque id nesciunt. Modi porro qui
              aperiam, enim mollitia ipsam a culpa deleniti corporis illum
              dolorum nam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              minus saepe quam!
            </p>
            <NavLink to="shop">
              <div className="btn-awesome btn">ORDER NOW</div>
            </NavLink>
          </Col>
        </Row>
        </Container>
    </section>
  );
};

export default About;
  