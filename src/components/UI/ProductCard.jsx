import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: "asdasd",
        image: "asdasd",
        productName: "asdasd",
        price: "asdasd",
      })
    );
  };
  return (
    <div class="card col-12 col-md-4 product-card">
      <span>
        <i class="fas fa-heart"></i>
      </span>
      <img
        class="card-img-top"
        src={props.products.imgUrl}
        alt="Card image cap"
      />
      <div class="card-body pb-0">
        <h5 class="card-title">
          <Link>{props.products.productName}</Link>
        </h5>
        <p class="card-text ">
          Start From <b>10$</b>
        </p>
      </div>
      <div class="btn-container card-body ">
        <Link
          to="/product/id"
          class="my-btn"
        >
          <i class="fas fa-shop"></i>
          <span>Product</span>
        </Link>
        <div
          class="my-btn"
          onClick={addToCart}
        >
          <i class="fa fa-plus" aria-hidden="true"></i>
          <span>Add</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
