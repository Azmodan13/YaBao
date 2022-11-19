import {
    createSlice
  } from "@reduxjs/toolkit";


  const totalSlice = createSlice({
    name: 'total',
    initialState : {
        price : 0,
        items: 0
    },
    reducers : {
        totalPrice: (state, action) => {
            const itemInCart = state.cart
        }

    }
  })