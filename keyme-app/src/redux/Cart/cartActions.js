import { ADD_CART, UPDATE_CART } from '../constants';

export const add_cart=(product)=> {
    return {
        type: ADD_CART,
        product
    }
}

export const update_cart=(products)=> {
    return {
        type: UPDATE_CART,
        products
    }
}