import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

export const fetchStock = createAsyncThunk(
    'Stock/fetchProduct',
    async function () {
        const response = await fetch('https://632fd006f5fda801f8d6918a.mockapi.io/Stock')
        const data = response.json();
        return data
    }
)

const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        stock: [],
        status: null,
        error: null
    },
    extraReducers: {
        [fetchStock.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [fetchStock.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.stock = action.payload[0];
        },
        [fetchStock.rejected]: (state, action) => {},
    }
})


export const stockReducer = stockSlice.reducer

