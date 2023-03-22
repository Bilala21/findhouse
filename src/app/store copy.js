import { configureStore } from "@reduxjs/toolkit";
import agentSlice from "../features/agent/agentSlice";
import { api } from "../features/api/api";
import filterSlice from "../features/filter/filterSlice";
import filtersSlice from "../features/filters/filterSlice";
import categorySlice from "../features/products/categorySlice";
import productsSlice from "../features/products/productsSlice";
import propertiesSlice from "../features/properties/propertiesSlice";
import vehicleSlice from "../features/vehicles/vehicleSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        properties: propertiesSlice,
        filter: filterSlice,
        agent: agentSlice,
        category:categorySlice,
        product:productsSlice,
        filter:filtersSlice,
        vehicles:vehicleSlice
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
