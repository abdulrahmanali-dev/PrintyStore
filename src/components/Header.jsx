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
     <div class="dropdown">
      <button
       className="icon border-0"
       type="button"
       data-bs-toggle="dropdown"
       aria-expanded="false"
      >
       <Link to="/shop">
        <i className="fas fa-user-circle fa-4x"></i>
       </Link>
       <span>2</span>
      </button>
      <ul class="dropdown-menu">
       <li>
        <a class="dropdown-item" href="#">
         Action
        </a>
       </li>
       <li>
        <a class="dropdown-item" href="#">
         Something
        </a>
       </li>
      </ul>
     </div>
     <div
      onClick={() => {
       navbarToggle();
       console.log("object");
      }}
     >
      <div id="menu-bars" class="fas fa-bars"></div>
     </div>
    </div>
   </div>
  </header>

  // <!-- Header End -->
 );
};

export default Header;
