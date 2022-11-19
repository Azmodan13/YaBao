import {
    configureStore
} from '@reduxjs/toolkit';
import productReducer from './data/productSlice'
import stockReducer from './data/stockSlice'
import {cartReducer} from './slice/cartSlice'


export const store = configureStore({
    reducer: {
        menu: productReducer,
        stock : stockReducer,
        cart : cartReducer,
    },

})

// import storage from 'redux-persist/lib/storage';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig,productReducer,stockReducer, cartReducer)

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// })

// export const persistor = persistStore(store)