import { fetch_product_start, fetch_product_list, fetch_product_fail } from '../redux/ProductList/productListActions';
import data from './data';

export const fetch_product=()=> {
    return async dispatch=> {
        try {
            dispatch(fetch_product_start());
            let response=await new Promise((resolve, reject)=>{
                setTimeout(()=> {
                    resolve(data);
                }, 1000);
            });
            dispatch(fetch_product_list(response));
        }catch(error) {
            dispatch(fetch_product_fail(error));
        }
    };
};

export const mockRequest=()=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(data);
        }, 1000);
    });
};
