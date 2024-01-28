import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import ItemSlice from "./ItemSlice.js";
const Store = configureStore({
    reducer: {
        cart: CartSlice,
        item : ItemSlice
    },
     
});

export default Store;