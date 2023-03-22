import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchFilter:{}
};

export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearchFilters: (state, action) => {
            state.searchFilter = {...state.searchFilter, ...action.payload};
        },
    },
});

export const {
    setSearchFilters,

} = filterSlice.actions;
export default filterSlice.reducer;
