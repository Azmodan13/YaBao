import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    name: null,
    phone: null,
    token: null,
    id: null,
    admin: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.admin = action.payload.admin;
        },
        removeUser(state){
            state.email = null;
            state.name = null;
            state.phone = null;
            state.token = null;
            state.id = null;
            state.admin = null;
        }
    }
})

export const {setUser, removeUser} = userSlice.actions;



export const userReducer = userSlice.reducer;