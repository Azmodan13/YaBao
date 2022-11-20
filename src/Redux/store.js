import {
    configureStore
} from '@reduxjs/toolkit';
import productReducer from './data/productSlice'
import stockReducer from './data/stockSlice'
import {cartReducer} from './slice/cartSlice'
import { userReducer } from './slice/userSlice'


export const store = configureStore({
    reducer: {
        menu: productReducer,
        stock : stockReducer,
        cart : cartReducer,
        user: userReducer,
    },
})
