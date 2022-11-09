import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async function () {
        const response = await fetch('https://632fd006f5fda801f8d6918a.mockapi.io/menu')
        const data = response.json();
        return data
    }
)

const productSlice = createSlice({
    name: 'menu',
    initialState: {
        menu: [],
        status: null,
        error: null
    },
    extraReducers: {
        [fetchProduct.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.menu = action.payload;
        },
        [fetchProduct.rejected]: (state, action) => {},
    }
})

export default productSlice.reducer