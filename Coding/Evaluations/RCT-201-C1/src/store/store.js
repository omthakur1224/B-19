// TODO: use this store variable to create a store.
import { legacy_createStore,combineReducers,compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";


const root=combineReducers({
  auth:authReducer,
  product:productReducer,
  cart:cartReducer
})
export const store = legacy_createStore(root,compose(applyMiddleware(thunk)))

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}