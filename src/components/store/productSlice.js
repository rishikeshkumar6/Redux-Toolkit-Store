import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const initialState={
    data:[],
}
const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
       fetchProducts(state,action){
              state.data=action.payload
       },
      //  extraReducers:(builder)=>{ 
      //       builder
      //       .addCase(getProducts,fulfilled,())
      //  }
    }
})

export default productSlice.reducer;
export const {fetchProducts}=productSlice.actions; 
// export const getProducts=createAsyncThunk('products/get',async=()=>{
//   const response=await axios.get("https://fakestoreapi.com/products")
//   const result=response.data
//   return result
// })
export function getProduct(){
  return async function getProductThunk(dispatch,getState){
    const response=await axios.get("https://fakestoreapi.com/products")
   const result=response.data
   dispatch(fetchProducts(result))
  }
}