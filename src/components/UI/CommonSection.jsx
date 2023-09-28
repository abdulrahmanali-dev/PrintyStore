import React from "react";
import { Container } from "reactstrap";
import allProducts from "../../assets/images/products/stickers/stickers-1.webp";

function CommonSection({ title }) {
 return (
  <section
   className="common-section margin-fixed-header"
   style={{ backgroundImage: `url('${allProducts}') ` }}
  >
   <Container>
    <h1>{title}</h1>
   </Container>
   <div className="overlay"></div>
  </section>
 );
}

export default CommonSection;
