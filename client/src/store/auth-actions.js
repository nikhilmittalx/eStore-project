import { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, logoutStart, logoutSuccess, logoutFailure } from './auth-slice';
import { publicRequest } from '../request-methods';

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