import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getData(state, action) {
      state.push(action.payload);
    },
    removeData(state, action) {
      return state.filter(user => user.email !== action.payload);
    }
  }
});

export default userSlice.reducer;
export const { getData, removeData } = userSlice.actions;
