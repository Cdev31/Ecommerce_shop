import { configureStore } from "@reduxjs/toolkit";


import { productSlice } from "./Products";


export const store = configureStore({
    reducer:{
        product: productSlice.reducer
    }
})