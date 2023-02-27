import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: "",
    filterProducts:"",
    filterdProducts:""
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setFilterProducts: (state, action) => {
            state.filterProducts = action.payload;
        },
        filterdProducts: (state, action) => {
            state.filterdProducts = action.payload;
        },
        
    },
});

export const {
    setProducts,
    setFilterProducts,
    filterdProducts,
} = productsSlice.actions;
export default productsSlice.reducer;
