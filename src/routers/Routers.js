import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// Pages
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import ProductDetailes from "../pages/ProductDetailes";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Error from "../pages/Error";
import Signup from "../pages/Signup";
import Favorites from "../pages/Favorites";

const routers = () => {
 return (
  <Routes>
   <Route path="/" element={<Navigate to="Home" />} />
   <Route path="home" element={<Home />} />
   <Route path="shop" element={<Shop />} />
   <Route path="checkout" element={<Checkout />} />
   <Route path="login" element={<Login />} />
   <Route path="signup" element={<Signup />} />
   <Route path="shop/:id" element={<ProductDetailes />} />
   <Route path="cart" element={<Cart />} />
   <Route path="fav" element={<Favorites />} />
   <Route path="*" element={<Error />} />
  </Routes>
 );
};

export default routers;
