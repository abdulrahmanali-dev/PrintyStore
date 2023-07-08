import React from "react";
const Hero = () => {
  return (
    <section
      className="hero d-flex justify-content-center align-items-center text-center"
      style={{
        backgroundImage:
          "url(" +
          require("../../assets/images/products/packs/all-products.webp") +
          ")",
      }}
    >
      <div className="overlay"></div>
      <div className="info ">
        <h2>NOT ONLY</h2>
        <h2>STICKERS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          voluptas beatae veritatis nulla similique voluptatem suscipit at
        </p>
      </div>
    </section>
  );
};

export default Hero;
