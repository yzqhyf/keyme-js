import { FETCH_START, FETCH_LIST, FETCH_FAIL } from '../constants';

export const fetch_product_start=()=> {
    return {
        type: FETCH_START
    }
};

export const fetch_product_list=(action)=> {
    return {
        type: FETCH_LIST,
        list: action
    }
};

export const fetch_product_fail=(error)=> {
    return {
        type: FETCH_FAIL,
        error
    }
};


