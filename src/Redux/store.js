import {
    configureStore
} from '@reduxjs/toolkit';
import productReducer from './data/productSlice'
import stockReducer from './data/stockSlice'


export const store = configureStore({
    reducer: {
        menu: productReducer,
        stock : stockReducer
    },

})