import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
// images
import logo from "../assets/images/logo.webp";
import userImg from "../assets/images/user-1.png";
import { useSelector } from "react-redux";

const Header = () => {
 const totalQuantity = useSelector((state) => state.cart.totalQuantity);
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
 const navLinks = [
  { path: "home", display: "Home" },
  { path: "products", display: "Products" },
  { path: "contact", display: "Contact" },
 ];
 return (
  <header>
   <div className="container">
    <NavLink to="/" className="logo">
     <img src={logo} alt="logo" />
    </NavLink>
    <nav class={active}>
     {navLinks.map((item) => (
      <NavLink to={item.path}>{item.display}</NavLink>
     ))}
     {/* <NavLink to="/">Home</NavLink>
     <NavLink to="products">Products</NavLink>
     <NavLink to="contact">Contact</NavLink> */}
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
      <span>{totalQuantity}</span>
     </div>
     <div class="dropdown">
      <button
       className="icon border-0"
       type="button"
       data-bs-toggle="dropdown"
       aria-expanded="false"
      >
       <motion.img whileTap={{ scale: 1.1 }} src={userImg} alt="user" />
      </button>
      <ul class="dropdown-menu">
       <li>
        <a class="dropdown-item" href="#">
         Account
        </a>
       </li>
       <li>
        <a class="dropdown-item" href="#">
         Setting
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
