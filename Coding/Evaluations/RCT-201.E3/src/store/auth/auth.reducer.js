import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
} from './auth.types';

const token = localStorage.getItem('token') || '';
// Note: Do not update/change the initial state
export const authInitalState = {
  loading: false,
  data: {
    token: token,
    isAuthenticated: !!token,
  },
  error: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SIGN_IN_ERROR:
      return {
        ...state,
        error: true,
      };
    case AUTH_SIGN_IN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          token: payload.token,
          isAuthenticated: true,
        },
      };
    case AUTH_SIGN_OUT:
      localStorage.removeItem('token');
      return {
        ...state,
        data: {
          token: '',
          isAuthenticated: false,
        },
      };
    default:
      return state;
  }
};
