import { createSlice } from "@reduxjs/toolkit";
const initialState=0
const counterSlice=createSlice({
name:'counter',
initialState,
reducers:{
    addition(state,action){
        return state+1
    }
}
})

export default counterSlice.reducer
export const {addition} =counterSlice.actions