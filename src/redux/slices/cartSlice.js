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
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem++;
        existingItem.totalPrice =
          Number(existingItem.price) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
      console.log(state.cartItems[0] )
      console.log(state.totalQuantity )
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
