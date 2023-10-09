import React from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import jujutsuImg from "../assets/images/products/stickers/jujutsu.webp";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Cart = () => {
 const cartItems = useSelector((state) => state.cart.cartItems);
 const totalAmount = useSelector((state) => state.cart.totalAmount);

 return (
  <Helmet title="Cart">
   <CommonSection title="Shopping Cart" />
   <section>
    <Container>
     <Row>
      <Col lg="8">
       {cartItems.length === 0 ? (
        <h2 className="no-items">No Items Added</h2>
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
           <Tr item={item} key={index} />
          ))}
         </tbody>
        </table>
       )}
      </Col>
      <Col lg="3">
       <div className="sub-total">
        <h5>
         Subtotal
         <span>{totalAmount}s.p</span>
        </h5>
        <p>After Shipping And Costs</p>
        <Link className="my-btn" to={"/shop"}>
         Continue Shopping
        </Link>
        <Link className="my-btn" to={"/checkout"}>
         Checkout
        </Link>
       </div>
      </Col>
     </Row>
    </Container>
   </section>
  </Helmet>
 );
};

const Tr = ({ item }) => {
 const dispatch = useDispatch();
 const delItem = () => {
  dispatch(cartActions.delItem(item.id));
  toast.success("Item Deleted Successfully");
 };
 return (
  <tr>
   <td>
    <img src={item.imgUrl} alt="" />
   </td>
   <td>{item.productName}</td>
   <td>{item.price}</td>
   <td>{item.quantity}</td>
   <td>
    <span onClick={delItem}>
     <i class="fa-solid fa-trash-can"></i>
    </span>
   </td>
  </tr>
 );
};

export default Cart;
