import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../pages/counter/counterSlice'
import { cartSlice } from '../pages/Cart/cartSlice'

export const store = configureStore({
    reducer : {
        counter : counterSlice.reducer,
        cart : cartSlice.reducer,
    } 
})