import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './auth/auth.reducer';
import { productReducer } from './product/product.reducer';
import {cartReducer} from './cart/cart.reducer'

// TODO: use this store variable to create a store.

// Note: use cart, product and auth as keys
// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

if (window.Cypress) {
  window.store = store;
}
