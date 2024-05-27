import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

export const appStore = configureStore({
    reducer: {      // this reducer is responsible to modify the appStore. it is combination of different small stores
        cart: cartReducer,
    },
});
