import { ADD_CART, UPDATE_CART } from '../constants';

const initialState={
    carts: []
};

export const cartReducer=(state=initialState, action)=> {
    switch(action.type) {
        case ADD_CART: {
            return {
                ...state,
                product: {...action.product}
            };
        }
        case UPDATE_CART: {
            return {
                ...state,
                carts: action.products
            }
        }
        default: {
            return state;
        }
    }
};
