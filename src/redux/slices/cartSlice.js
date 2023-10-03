import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const initialState = {
 cartItems: [],
 totalAmount: 0,
 totalQuantity: 0,
};
const cartSlice = createSlice({
 name: "cart",
 initialState,
 reducers: {
  addItem: (state, action) => {
   const newItem = action.payload;
   const existingItem = state.cartItems.find((item) => item.id === newItem.id);

   state.totalQuantity++;
   if (!existingItem) {
    state.cartItems.push({
     id: newItem.id,
     productName: newItem.productName,
     imgUrl: newItem.imgUrl,
     imgBackUrl: newItem.imgBackUrl,
     category: newItem.category,
     quantity: 1,
     price: newItem.price,
     totalPrice: newItem.price,
    });
   } else {
    existingItem.quantity++;
    existingItem.totalPrice =
     Number(existingItem.totalPrice) + Number(newItem.price);
   }

   state.totalAmount = state.cartItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity)
   );

   console.log(state.totalQuantity);
   console.log(state.cartItems);
   console.log(newItem);
  },
  delItem: (state, action) => {
   const id = action.payload;
   const existingItem = state.cartItems.find((item) => item.id === id);
   if (existingItem) {
    state.cartItems = state.cartItems.filter((item) => item.id !== id);
    state.totalQuantity = state.totalQuantity - existingItem.quantity;
   }
  },
 },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
