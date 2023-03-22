import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    prost_data: {},

};

export const productsSliec = createSlice({
    name: "vehicles",
    initialState,
    reducers: {
        createPost: (state, action) => {
            state.prost_data = { ...state.prost_data, ...action.payload };
        }
    },
});

export const {
    createPost

} = productsSliec.actions;
export default productsSliec.reducer;
