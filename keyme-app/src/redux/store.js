import { createStore, combineReducers, applyMiddleware } from 'redux';
import { productListReducer } from './ProductList/productListReducer';
import { cartReducer } from './Cart/cartReducer';
import thunk from 'redux-thunk';

const rootReducer=combineReducers({ productListReducer, cartReducer });
export const store=createStore(rootReducer, applyMiddleware(thunk));
