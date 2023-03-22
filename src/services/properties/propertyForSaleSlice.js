import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    propertyForSale:[]
};

export const propertyForSaleSlice = createSlice({
    name: "propertyForSale",
    initialState,
    reducers: {
        getPropertyForSaleData: (state, action) => {
            state.propertyForSale = [...state.propertyForSale, ...action.payload];
        }
    },
});

export const {
    getPropertyForSaleData,
} = propertyForSaleSlice.actions;
export default propertyForSaleSlice.reducer;
