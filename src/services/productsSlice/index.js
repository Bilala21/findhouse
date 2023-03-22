import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    product_categories:[],
    product_search_query:{},
    searched_products:{},
};

export const productSlice = createSlice({
    name: "vehicles",
    initialState,
    reducers: {
        addProductsToStroe: (state, action) => {
            state.products = [...state.products, ...action.payload];
        },
        addProductCategoriesToStroe: (state, action) => {
            console.log(action);
            state.product_categories = {...state.product_categories, ...action.payload};
        },
        productSearchQuery: (state, action) => {
            state.searched_products = {...state.searched_products, ...action.payload};
        },
        productFilterdData: (state, action) => {
            state.vehilce_filterd_data = {...state.searched_products,...action.payload};
        },
    },
});

export const {
    addProductsToStroe,
    addProductCategoriesToStroe,
    productSearchQuery,
    productFilterdData,

} = productSlice.actions;
export default productSlice.reducer;
