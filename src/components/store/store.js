import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice.js'
import productSlice from './productSlice.js'
import counterSlice from './counterSlice.js'
import userSlice from './userSlice.js'
const store=configureStore({
    reducer:{
        cart:cartSlice,
        product:productSlice,
        counter:counterSlice,
        user:userSlice
    }
})

export default store;

