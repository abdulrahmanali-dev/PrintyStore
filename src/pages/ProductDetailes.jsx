import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProductDetailes = () => {
 const { id } = useParams();
 const product = products.find((item) => item.id === id);
 const {
  imgUrl,
  price,
  productName,
  category,
  avgRating,
  shortDesc,
  description,
  reviews,
 } = product;
 //  review and desc tabs
 const [tab, setTab] = useState("desc");

 // you might also like sec filtering
 const [stickersProducts, setStickersProducts] = useState(products);
 useEffect(() => {
  const filteredStickersProducts = products.filter(
   (item) => item.category === "stickers"
  );
  setStickersProducts(filteredStickersProducts);
 }, []);

 // supmit review handler
 const [usrRating, setUsrRating] = useState(null);
 const reviewMsg = useRef("");
 const reviewUser = useRef("");
 const submitHandler = (e) => {
  e.preventDefault();
  const submitUserName = reviewUser.current.value;
  const submitUserMsg = reviewMsg.current.value;
 const reviewObj = {
      userName: submitUserName,
      userMsg: submitUserMsg,
      rating : usrRating,
    }
    console.log(reviewObj);
    toast.success('Review Submitted')
 };

//  add to product cart 
const dispatch = useDispatch();
const addToCart = () => {
 dispatch(
  cartActions.addItem({
   id ,
   productName,
   price ,
   Image: imgUrl,
  })
 );
 toast.success("Product added Successfully");
};
// Scroll TO Top

useEffect(()=> {
    window.scrollTo(0,0)
} ,[product])
 return (
  <Helmet title={productName}>
   <CommonSection title={productName} />
   <section>
    <Container>
     <Row>
      <Col lg="6">
       <div className="product-image">
        <img src={imgUrl} alt="" />
       </div>
      </Col>
      <Col lg="6">
       <div className="product-datails">
        <h2>{productName}</h2>
        <div className="rating">
         <div className="product-rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half"></i>
         </div>
         <p className="avg-rating">
          (<span>{avgRating}</span> ratings)
         </p>
        </div>
        <div className="d-flex align-items-center gap-3">
         <b className="price">${price}</b>
         <div className="catagory">
          catagory <span>{category}</span>
         </div>
        </div>

        <p className="short-desc">{shortDesc} </p>
        <motion.button whileTap={{ scale: 1.1 }} className="buy-btn" onClick={addToCart}>
         Add to cart
        </motion.button>
       </div>
      </Col>
     </Row>
    </Container>
   </section>
   <section className="reviews-and-desc">
    <Container>
     <Row>
      <Col lg="12">
       <div className="tab-wrapper">
        <button
         className={`${tab === "desc" ? "active-tab" : ""} tab `}
         onClick={() => setTab("desc")}
        >
         Description
        </button>
        <button
         className={`${tab === "rev" ? "active-tab" : ""} tab `}
         onClick={() => setTab("rev")}
        >
         Reviews ({reviews.length})
        </button>
       </div>
       <div className="tab-content mt-3">
        {tab === "desc" ? (
         <p>{description}</p>
        ) : (
         <Row>
          <Col lg="6">
           <ul>
            {reviews.map((rev, index) => (
             <li>
              <h6>{rev.name}</h6>
              <span className="avg-rating">{rev.rating} (avrage rating)</span>
              <p>{rev.text}</p>
             </li>
            ))}
           </ul>
          </Col>

          <Col lg="6">
           <div className="review-form">
            <h4>Leave Your Experience</h4>
            <form action="" onSubmit={submitHandler}>
             <div className="form-group">
              <input 
              ref={reviewUser}
              required
              type="text" name="" placeholder="Enter Name" id="" />
             </div>
             <div className="form-group">
              <span onClick={()=> setUsrRating(1)}>
               1<i className="fa fa-star"></i>
              </span>
              <span onClick={()=> setUsrRating(2)}>
               2<i className="fa fa-star"></i>
              </span>
              <span onClick={()=> setUsrRating(3)}>
               3<i className="fa fa-star"></i>
              </span>
              <span onClick={()=> setUsrRating(4)}>
               4<i className="fa fa-star"></i>
              </span>
              <span onClick={()=> setUsrRating(5)}>
               5<i className="fa fa-star"></i>
              </span>
             </div>
             <div className="form-group">
              <textarea
              ref={reviewMsg}
               type="text"
               name=""
               placeholder="Enter Name"
               id=""
               rows="4"
               required
              ></textarea>
             </div>
             <button className="my-btn">Submit</button>
            </form>
           </div>
          </Col>
         </Row>
        )}
       </div>
      </Col>
      <Col lg="12">
       <h2 className="related-title"> you might also like</h2>
       <ProductList data={stickersProducts} />
      </Col>
     </Row>
    </Container>
   </section>
  </Helmet>
 );
};

export default ProductDetailes;
