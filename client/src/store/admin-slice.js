import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: null,
  isFetching: false,
  error: false
};
const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
   
    registerProductStart(state) {
      state.isFetching = true;
    },
    registerProductSuccess(state, action) {
      state.isFetching = false;
      state.product = action.payload;
    },
    registerProductFailure(state) {
      state.isFetching = false;
      state.error = true;
    },

    
    



  }
});

export const {  registerProductStart , registerProductSuccess , registerProductFailure } = adminSlice.actions;

export default adminSlice;