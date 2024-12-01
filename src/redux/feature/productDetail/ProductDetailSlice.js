import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
    loading: false,
    detail: []
}
    
export const productDetail = createAsyncThunk('detailProduct', async (id) => {
    try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return data
    } catch (error) {
        console.error(error);
    }
})

export const productDetailSlice = createSlice({
    name: "detailProduct",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(productDetail.pending, (state) => {
            state.loading = true
        })

        builder.addCase(productDetail.fulfilled, (state, action) => {
            state.detail = action.payload
            state.loading = false
        })
    }
})



export default productDetailSlice.reducer