import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice.jsx";
import CategorySlice from "./Slices/CategorySlice.jsx";
import SearchSlice from "./Slices/SearchSlice.jsx";

const store = configureStore({
    reducer : {
        cart : CartSlice,
        category: CategorySlice,
        search: SearchSlice, 
    },
    
});

export default store;