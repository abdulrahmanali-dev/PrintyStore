import React from "react";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import ProductDetailes from "../pages/ProductDetailes";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import { Route, Routes } from "react-router-dom";

const routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop/>} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="shop/:id" element={<ProductDetailes />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
};

export default routers;
