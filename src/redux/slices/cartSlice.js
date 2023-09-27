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
     productsName: newItem.productsName,
     imgUrl: newItem.imgUrl,
     imgBackUrl: newItem.imgBackUrl,
     category: newItem.category,
     quantity: 1,
     price: newItem.price,
     totalPrice: newItem.price,
    });
   } else {
    existingItem.quantity++;
    existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
   }
   state.totalAmount = state.cartItems.reduce((total, item)=> {
    total + Number(item.price) * Number (item.quantity)
   })
  },
 },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
