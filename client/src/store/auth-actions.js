import { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure } from './auth-slice';
import { publicRequest } from '../request-methods';

export const login = (user) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await publicRequest.post('/auth/login', user);
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