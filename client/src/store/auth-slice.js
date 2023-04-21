import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.isFetching = true;
    },
    loginSuccess(state, action) {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure(state) {
      state.isFetching = false;
      state.error = true;
    },

    registerStart(state) {
      state.isFetching = true;
    },
    registerSuccess(state, action) {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registerFailure(state) {
      state.isFetching = false;
      state.error = true;
    },

    logoutStart(state) {
      state.isFetching = true;
    },
    logoutSuccess(state, action) {
      state.isFetching = false;
      state.currentUser = null;
      state.message = action.payload;
    },
    logoutFailure(state) {
      state.isFetching = false;
      state.error = true;
    },


  }
});

export const { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, logoutStart, logoutSuccess, logoutFailure } = authSlice.actions;

export default authSlice;