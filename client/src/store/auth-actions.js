import { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, logoutStart, logoutSuccess, logoutFailure  } from './auth-slice';
import { registerProductFailure , registerProductSuccess , registerProductStart, deleteProductStart , deleteProductSuccess , deleteProductFailure } from './admin-slice';

import { publicRequest, userRequest } from '../request-methods';

import axios from 'axios';

export const login = ({email, password}) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await publicRequest.post('/auth/login', {email, password});
      dispatch(loginSuccess(response.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };
};
export const register = ({firstname, lastname, username, email, password, passwordConfirm}) => {
  return async (dispatch) => {
    dispatch(registerStart());
    try {
      const response = await publicRequest.post('/auth/register', {firstname, lastname, username, email, password, passwordConfirm});
      dispatch(registerSuccess(response.data));
    } catch (err) {
      dispatch(registerFailure());
    }
  };
};
export const addAProduct = ({title, description, image, category, size, color , price , inStock}) => {
  return async (dispatch) => {
    dispatch(registerProductStart());
    try {
      const response = await userRequest.post('products/admin/add', {title, description, image, category, size, color , price , inStock});
      // const response = await publicRequest.post('/products/admin/add', {title, discription, image, category, size, color , price , inStock});
      dispatch(registerProductSuccess(response.data));
    } catch (err) {
      dispatch(registerProductFailure());
    }
  };
};
export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(deleteProductStart());
    try {
      const response = await userRequest.delete(`products/admin/delete/${id}`);
      // const response = await publicRequest.post('/products/admin/add', {title, discription, image, category, size, color , price , inStock});
      dispatch(deleteProductSuccess(response.message));
    } catch (err) {
      dispatch(deleteProductFailure());
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    dispatch(logoutStart());
    try {
      const response = await publicRequest.get('/auth/logout');
      dispatch(logoutSuccess(response.message));
    } catch (err) {
      dispatch(logoutFailure());
    }
  };
};