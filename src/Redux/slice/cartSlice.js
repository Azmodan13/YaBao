import {
  createSlice
} from "@reduxjs/toolkit";

import { getCartFromLS } from "../../utils/getCartFromLS";


const initialState = {
  totalPrice: 0,
  totalItems: 0,
  cart: getCartFromLS(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    recountTotalValues(state) {
      state.totalPrice = state.cart.reduce((sum, obj) => obj.price * obj.quantity + sum, 0);
      state.totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
      console.log(state.cart)
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  recountTotalValues,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} =
cartSlice.actions;