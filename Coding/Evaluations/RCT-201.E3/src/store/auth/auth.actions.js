import axios from 'axios';
import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
} from './auth.types';

export const loginAPI = (creds) => async (dispatch) => {
  dispatch({
    type: AUTH_SIGN_IN_LOADING,
  });
  try {
    const res = await axios.post('https://reqres.in/api/login', creds);
    dispatch({
      type: AUTH_SIGN_IN_SUCCESS,
      payload: res.data,
    });
    return res.data;
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: AUTH_SIGN_IN_ERROR,
    });
  }
};

export const logout = () => ({
  type: AUTH_SIGN_OUT,
});
