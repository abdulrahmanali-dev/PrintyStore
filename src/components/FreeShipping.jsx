import React from "react";
import user1 from "../assets/images/user-1.png";
import user2 from "../assets/images/user-2.png";
import user3 from "../assets/images/user-3.png";
import user4 from "../assets/images/user-4.png";
import { Container, Row } from "reactstrap";
const FreeShipping = () => {
 return (
  <section className="free-shipping">
   <Container>
    <Row>
     <div className="title col-12 col-lg-6">
      <h2>Free shipping, free online proofs, fast turnaround.</h2>
     </div>
     <div className="desc col-12 col-lg-6">
      <div className="icons">
       <div className="icon">
        <img src={user1} alt="user img" />
       </div>
       <div className="icon">
        <img src={user2} alt="user img" />
       </div>

       <div className="icon">
        <img src={user3} alt="user img" />
       </div>
       <div className="icon">
        <img src={user4} alt="user img" />
       </div>
      </div>
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
       ullam illum hic qui modi quo nulla laborum, libero exercitationem amet
       facere perferendis totam, aut esse tempore optio soluta nam architecto?
      </p>
     </div>
    </Row>
   </Container>
  </section>
 );
};

export default FreeShipping;
