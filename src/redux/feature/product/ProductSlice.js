import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
    loading: false,
    data: [],
    searchProduct: "",
    findProduct: [],
    categoryFilter: "",
    errorMessage: "",
};

export const getProduct = createAsyncThunk("product/getProduct", async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return rejectWithValue(error.response?.data || "An error occurred");
    }
});

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setSearchProduct: (state, action) => {
            state.searchProduct = action.payload;
            let result = state.data.filter(
                (item) =>
                    item.title.toLowerCase().includes(action.payload.toLowerCase()) &&
                    (state.categoryFilter ? item.category === state.categoryFilter : true)
            );
            state.findProduct = result;
        },
        setCategoryFilter: (state, action) => {
            state.categoryFilter = action.payload;
            let result;

            if (action.payload === "") {
                result = state.data;
            } else {
                result = state.data.filter(
                    (item) =>
                        (state.searchProduct
                            ? item.title.toLowerCase().includes(state.searchProduct.toLowerCase())
                            : true) && item.category === action.payload
                );
            }
            state.findProduct = result;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
                state.errorMessage = "";
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.data = action.payload;
                state.findProduct = action.payload;
                state.loading = false;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload || "Failed to fetch products";
            });
    },
});

export const { setSearchProduct, setCategoryFilter, clearErrorMessage } = productSlice.actions;

export default productSlice.reducer;
