import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
 return (
  <div className="products">
   {data.map((item, key) => (
    <ProductCard item={item} key={key} />
   ))}
  </div>
 );
};

export default ProductList;
