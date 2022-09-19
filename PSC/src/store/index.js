import {legacy_createStore, compose,applyMiddleware} from 'redux';
import {combineReducers} from 'redux'
import { authReducer } from './auth/Auth.reducer';
import { CartReducer } from './cart/Cart.reducer';
import { ProductReducer } from './products/Product.reducer';
import thunk from 'redux-thunk';
const rootReducer=combineReducers({
    auth:authReducer,
    products:ProductReducer,
    cart:CartReducer,
})
const createComposer= window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
export const store=legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)));