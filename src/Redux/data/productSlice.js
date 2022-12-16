import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async function (_, rejectedWithValue) {
        try {
            const response = await fetch('https://632fd006f5fda801f8d6918a.mockapi.io/menu')
            if (!response.ok){
                throw new Error('Server Error!')
            }
            const data = response.json();
            return data
        } catch (error) {
            return rejectedWithValue(error.massage)
        }
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
            state.menu = action.payload[0];
        },
        [fetchProduct.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})


export const productReducer = productSlice.reducer;