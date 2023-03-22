import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterQuery: {},
};

export const productFilterSlice = createSlice({
    name: "product_filter",
    initialState,
    reducers: {
        setFilterQuery: (state, action) => {
            state.filterQuery = {...state.filterQuery, ...action.payload};
        },
        resetFilterQuery: (state, action) => {
            state.filterQuery = {};
        }
    },
});

export const {
    setFilterQuery,
    resetFilterQuery,
} = productFilterSlice.actions;
export default productFilterSlice.reducer;
