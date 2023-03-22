import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vehicles_data:[],
    vehicle_categories:[],
    vehicle_search_query:{},
    vehilce_filterd_data:{},
};

export const vehicleSlice = createSlice({
    name: "vehicles",
    initialState,
    reducers: {
        addVehiclesToStroe: (state, action) => {
            state.vehicles_data = [...state.vehicles_data, ...action.payload];
        },
        addVehicleCategoriesToStroe: (state, action) => {
            state.vehicle_categories = [...state.vehicle_categories, ...action.payload];
        },
        vehicleSearchQuery: (state, action) => {
            state.vehicle_search_query = {...state.vehicle_search_query, ...action.payload};
        },
        vehicleFilterdData: (state, action) => {
            state.vehilce_filterd_data = {...action.payload};
        },
    },
});

export const {
    addVehiclesToStroe,
    addVehicleCategoriesToStroe,
    vehicleSearchQuery,
    vehicleFilterdData,

} = vehicleSlice.actions;
export default vehicleSlice.reducer;
