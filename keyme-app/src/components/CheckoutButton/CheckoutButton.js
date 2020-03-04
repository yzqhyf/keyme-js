import React from 'react';
import { Route } from 'react-router-dom';

const Checkout=()=> {
    return (
        <Route render={({history})=> {
            return (
                <button type='button' onClick={()=>history.push('/addressEntry')}>Proceed to Checkout</button>
            );
        }} />
    );
};

export default Checkout;