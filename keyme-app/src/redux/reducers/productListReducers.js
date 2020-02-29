import { FETCH_START, FETCH_LIST, FETCH_FAIL } from '../constants';

const initialState={
    pending: true,
    lists: [],
    error: null
};

export const productListReducer=(state=initialState, action)=> {
    switch(action.type) {
        case FETCH_START: {
            return {
                ...state,
                pending: true
            };
        }
        case FETCH_LIST: {
            return {
                ...state,
                pending: false,
                lists: action.list
            };
        }
        case FETCH_FAIL: {
            return {
                ...state,
                pending: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
};
