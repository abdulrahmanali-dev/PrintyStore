import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
// images
import logo from "../assets/images/logo.webp";
import userImg from "../assets/images/user-1.png";
import { useSelector } from "react-redux";
import {
 DropdownItem,
 DropdownMenu,
 DropdownToggle,
 UncontrolledDropdown,
} from "reactstrap";

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
  { path: "shop", display: "Products" },
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
      <span>0</span>
     </div>
     <div className="icon">
      <Link to="/cart">
       <i className="fas  fa-shop"></i>
      </Link>
      <span>{totalQuantity}</span>
     </div>
     <UncontrolledDropdown>
      <DropdownToggle color="white !important" className="border-0 p-0 me-2">
       <motion.img whileTap={{ scale: 1.1 }} src={userImg} alt="user" />
      </DropdownToggle>
      <DropdownMenu end>
       <DropdownItem header>Your Acount</DropdownItem>
       <DropdownItem>
        <Link className="d-block" to={"/signup"}>Register</Link>
       </DropdownItem>
       <DropdownItem>
        <Link className="d-block" to={"/login"}>Login</Link>{" "}
       </DropdownItem>
      </DropdownMenu>
     </UncontrolledDropdown>
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
