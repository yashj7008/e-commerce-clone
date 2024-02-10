import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './cartSlice'
import productReducer from './productSlice'
import searchReducer from './searchSlice'



const store = configureStore({
    reducer : {
       cart : cartReducer,
       products : productReducer,
       searchTerm : searchReducer

    }
})

export default store