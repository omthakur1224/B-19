import {
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  UPDATE_CART_ITEMS_ERROR,
  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
} from './cart.types';
import axios from 'axios';
// Cart Actions here

export const getCartItems = () => async (dispatch) => {
  dispatch({
    type: GET_CART_ITEMS_LOADING,
  });
  try {
    let res = await axios.get('http://localhost:8080/cartItems');
    dispatch({
      type: GET_CART_ITEMS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({ type: GET_CART_ITEMS_ERROR });
  }
};

export const addItemToCart = (data) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_LOADING });
  try {
    const res = await axios.post('http://localhost:8080/cartItems/', {
      ...data,
    });
    dispatch({
      type: ADD_ITEM_TO_CART_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: ADD_ITEM_TO_CART_ERROR });
  }
};
// {count: 2}
export const updateCartItem = (cartId, update) => async (dispatch) => {
  dispatch({
    type: UPDATE_CART_ITEMS_LOADING,
  });
  try {
    const res = await axios.patch(`http://localhost:8080/cartItems/${cartId}`, {
      ...update,
    });
    dispatch({
      type: UPDATE_CART_ITEMS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({ type: UPDATE_CART_ITEMS_ERROR });
  }
};

export const removeItemFromCart = (cartId) => async (dispatch) => {
  dispatch({
    type: REMOVE_CART_ITEMS_LOADING,
  });
  try {
    await axios.delete(`http://localhost:8080/cartItems/${cartId}`);
    dispatch({
      type: REMOVE_CART_ITEMS_SUCCESS,
      payload: { id: cartId },
    });
  } catch (e) {
    dispatch({ type: REMOVE_CART_ITEMS_ERROR });
  }
};
