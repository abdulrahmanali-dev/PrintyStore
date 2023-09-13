import React, { useState } from "react";
import "../css/App.css";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [active, setActive] = useState("navbar-menu");
  const navbarToggle = () => {
    active === "navbar-menu"
      ? setActive("navbar-menu active")
      : setActive("navbar-menu");
    console.log("object");
  };

  window.onscroll = () => {
    setActive("navbar-menu");
  };

  return (
    <header>
      <div className="container">
        <NavLink to="/" className="logo">
          <img src={require("../assets/images/logo.webp")} />
        </NavLink>
        <nav class={active}>
          <NavLink to="home">Home</NavLink>
          <NavLink to="products">Products</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
        <div class="icons">
          <div
            onClick={() => {
              navbarToggle();
              console.log("object");
            }}
          >
            <div id="menu-bars" class="fas fa-bars"></div>
          </div>
          <div className="icon">
            <Link to="/fav">
              <i className="fas fa-heart"></i>
            </Link>
            <span>2</span>
          </div>
          <div className="icon">
            <Link to="/shop">
              <i className="fas  fa-shop"></i>
            </Link>
            <span>2</span>
          </div>
        </div>
      </div>
    </header>

    // <!-- Header End -->
  );
};

export default Header;
