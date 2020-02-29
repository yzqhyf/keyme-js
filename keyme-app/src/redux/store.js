import { createStore, combineReducers, applyMiddleware } from 'redux';
import { productListReducer } from './reducers/productListReducers';
import thunk from 'redux-thunk';

const rootReducer=combineReducers({ productListReducer });
export const store=createStore(rootReducer, applyMiddleware(thunk));
