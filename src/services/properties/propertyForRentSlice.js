import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    propertyForRent:[],
    productFilterData:[],
    categories:[],
    sub_categories:[],
};

export const propertyForRentSlice = createSlice({
    name: "propertyForRent",
    initialState,
    reducers: {
        getPropertyForRentData: (state, action) => {
            state.propertyForRent = [...state.propertyForRent, ...action.payload];
        },
        getPropertyForRentFilterData: (state, action) => {
            state.productFilterData = [...action.payload];
        },
        resetPropertyForRentFilterData: (state, action) => {
            state.productFilterData =[];
        },
        getCategories: (state, action) => {
            state.categories = [...state.categories, ...action.payload];
        },
        getSubCategories: (state, action) => {
            state.sub_categories = [...state.sub_categories, ...action.payload];
        }
    },
});

export const {
    getPropertyForRentData,
    getPropertyForRentFilterData,
    resetPropertyForRentFilterQuery,
    getCategories,
    getSubCategories
} = propertyForRentSlice.actions;
export default propertyForRentSlice.reducer;
