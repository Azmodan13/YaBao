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
    addToDb: (state, action) => {
        state.cart.push({
          ...action.payload,
        });
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
    clearItem(state){
      state.cart = [];
      state.totalPrice = 0;
      state.totalItems = 0;
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
  clearItem,
  addToDb,
} =
cartSlice.actions;