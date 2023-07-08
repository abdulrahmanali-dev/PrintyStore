import React from "react";
import { Container } from "reactstrap";
import products from "../../assets/data/products";
import ProductCard from "../ProductCard/ProductCard";
const FeaturedProduct = () => {
  return (
    <section class="featured-products">
      <Container>
        <h2 class="heading">New Arrivals</h2>
        <div class="row justify-content-center mt-5 gap-4">
          <ProductCard
            src={require("../../assets/images/products/package-1.webp")}
            products={products[0]}
          />
          <ProductCard
            src={require("../../assets/images/products/posters/poster-1.webp")}
            products={products[1]}
          />
          <ProductCard
            src={require("../../assets/images/products/packs/product-11.webp")}
            products={products[2]}
          />
          <ProductCard
            src={require("../../assets/images/products/figures/product-6.webp")}
            products={products[0]}
          />
          <ProductCard
            src={require("../../assets/images/products/figures/product-1.webp")}
            products={products[1]}
          />
          <ProductCard
            src={require("../../assets/images/products/packs/product-10.webp")}
            products={products[2]}
          />
          <ProductCard
            src={require("../../assets/images/products/packs/product-1.webp")}
            products={products[0]}
          />
          <ProductCard
            src={require("../../assets/images/products/posters/wall-poster-2.webp")}
            products={products[1]}
          />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProduct;
