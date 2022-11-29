import { productReducer } from './data/productSlice'
import { stockReducer } from './data/stockSlice'
import { userReducer } from './slice/userSlice'
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {cartReducer} from './slice/cartSlice'
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const rootReducer = combineReducers({
        cart: cartReducer,
        user: userReducer,
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: {persistedReducer,
        menu: productReducer,
        stock: stockReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)