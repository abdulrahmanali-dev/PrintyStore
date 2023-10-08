import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from 'react-redux';

const ProductCard = ({ item }) => {
 const dispatch = useDispatch();
 const addToCart = () => {
  dispatch(
   cartActions.addItem({
    id: item.id,
    productName: item.productName,
    price: item.price,
    imgUrl: item.imgUrl,
   })
  );
  toast.success("Product added Successfully");
 };
 const favoriteItems = useSelector((state) => state.cart.favoriteItems);
 const isFavorite = favoriteItems.some(favoriteItem => favoriteItem.id === item.id);

//  
const addToFavorite = () => {
    const newItem = {
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    };
    const existingItem = favoriteItems.find((item) => item.id === newItem.id);
  
    if (existingItem) {
      // Item exists in favorites, remove it
      dispatch(cartActions.addToFavorite(newItem));
      toast.success("Product removed from favorites");
    } else {
      // Item does not exist in favorites, add it
      dispatch(cartActions.addToFavorite(newItem));
      toast.success("Product added to favorites");
    }
  };
  
 return (
  <div class="card col-12 col-md-4 product-card">
   <span onClick={addToFavorite} className={`favorite-heart ${isFavorite ? 'favorite' : ''}`}>
    <i class="fas fa-heart"></i>
   </span>
   <img class="card-img-top" src={item.imgUrl} alt="Card image cap" />
   <div class="card-body pb-0">
    <h5 class="card-title">
     <Link to={`/shop/${item.id}`}>{item.productName}</Link>
    </h5>
    <p class="card-text ">
     Price Is <b>{item.price} sp</b>
    </p>
   </div>
   <div class="btn-container card-body ">
    <Link to={`/shop/${item.id}`} class="my-btn">
     <i class="fas fa-shop"></i>
     <span>Product</span>
    </Link>
    <div class="my-btn" onClick={addToCart}>
     <i class="fas fa-plus" aria-hidden="true"></i>
     <span>Add</span>
    </div>
   </div>
  </div>
 );
};

export default ProductCard;
