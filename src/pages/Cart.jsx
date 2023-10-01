import React from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import jujutsuImg from "../assets/images/products/stickers/jujutsu.webp";
import { useSelector } from "react-redux";
const Cart = () => {
 const cartItems = useSelector((state) => state.cart.cartItems);

 return (
  <Helmet title="Cart">
   <CommonSection title="Shopping Cart" />
   <section>
    <Container>
     <Row>
      <Col lg="9">
       {cartItems.length === 0 ? (
        <h2>No Items Added</h2>
       ) : (
        <table className="table bordered">
         <thead>
          <tr>
           <th>Image</th>
           <th>Title</th>
           <th>Price</th>
           <th>Qty</th>
           <th>Delete</th>
          </tr>
         </thead>
         <tbody>
          {cartItems.map((item, index) => (
           <tr>
            <td>
             <img src={item.imgUrl} alt="" />
            </td>
            <td>{item.productName}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
             <span>
              <i class="fa-solid fa-trash-can"></i>
             </span>
            </td>
           </tr>
          ))}
         </tbody>
        </table>
       )}
      </Col>
     </Row>
    </Container>
   </section>
  </Helmet>
 );
};

export default Cart;
