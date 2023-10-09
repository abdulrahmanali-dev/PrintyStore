import React from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useSelector } from "react-redux";

const Checkout = () => {
 const { totalQuantity, totalAmount } = useSelector((state) => state.cart);
 return (
  <Helmet title="Checkout">
   <CommonSection title="Checkout" />
   <Container>
    <Row className="mt-5">
     <Col lg="8">
      <h1 className="mb-3 billing">Billing</h1>
      <Form className="billing-form">
       <FormGroup>
        <Input placeholder="Enater your name" type="text" />
       </FormGroup>
       <FormGroup>
        <Input placeholder="Enater your email" type="email" />
       </FormGroup>
       <FormGroup>
        <Input placeholder="Phone number" type="text" />
       </FormGroup>
       <FormGroup>
        <Input placeholder="Street address" type="text" />
       </FormGroup>
       <FormGroup>
        <Input placeholder="City" type="text" />
       </FormGroup>
       <FormGroup>
        <Input placeholder="Postal code" type="text" />
       </FormGroup>
       <FormGroup>
        <Input placeholder="Country" type="text" />
       </FormGroup>
      </Form>
     </Col>
     <Col lg="4">
      <div className="checkout-cart">
       <h6>
        Total Qty: <span>{totalQuantity} items</span>
       </h6>
       <h6>
        Subtotal: <span>{totalAmount}</span>
       </h6>
       <h6>
        Shipping: <br />
        Free Shipping <span>0SYP</span>
       </h6>
       <h2>
        Total Cost: <span>{totalAmount}</span>
       </h2>
       <button className="btn bg-light text-dark"> Place an order</button>
      </div>
     </Col>
    </Row>
   </Container>
  </Helmet>
 );
};

export default Checkout;
