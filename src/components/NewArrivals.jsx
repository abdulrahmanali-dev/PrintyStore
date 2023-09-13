import React from "react";
import { Container } from "reactstrap";
import products from "../assets/data/products";
import ProductCard from "./UI/ProductCard";
const FeaturedProduct = () => {
 return (
  <section class="featured-products">
   <Container>
    <h2 class="heading">New Arrivals</h2>
    <div class="products">
     <ProductCard products={products[0]} />
     <ProductCard products={products[1]} />
     <ProductCard products={products[2]} />
     <ProductCard products={products[0]} />
     <ProductCard products={products[1]} />
     <ProductCard products={products[2]} />
     <ProductCard products={products[0]} />
     <ProductCard products={products[1]} />
    </div>
   </Container>
  </section>
 );
};

export default FeaturedProduct;
