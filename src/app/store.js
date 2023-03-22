import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api/api";
import vehicleSlice from "../services/vehicles/vehicleSlice";
import propertyForSaleSlice from "../services/properties/propertyForSaleSlice";
import propertyForRentSlice from "../services/properties/propertyForRentSlice";
import productFilterSlice from "../services/productFilter/productFilterSlice";
import productsSlice from "../services/productsSlice";


export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        vehicles:vehicleSlice, 
        propertyForSaledata:propertyForSaleSlice, 
        propertyForRentdata:propertyForRentSlice, 
        productFilterQuery:productFilterSlice,
        product:productsSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
