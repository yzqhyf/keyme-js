import React from 'react';
import PropTypes from 'prop-types';
import Count from '../Count/Count';

import './Product.scss';

const Product=(props)=> {
    const item=props.item;

    const addButton=()=> {
        return (
            <div className='cart-button'>
                <button onClick={props.addProduct}>Add to Cart</button>
            </div>
        );
    }

    const orderCount=()=> {
        return (
            <div className='order-count'>
                <Count />
            </div>
        );
    }

    return (
        <div className='product-item'>
            <div>
                <img src={item.imageURL} alt={item.name} />
            </div>
            <div>
                <div className='product-name'>{item.display_name}</div>
                <div className='product-cost'>{`$ ${item.cost}`}</div>
            </div>
            {item.order===0 ? addButton() : orderCount()}
            
        </div>
    );
}

Product.propTypes={
    item: PropTypes.object.isRequired,
    addProduct: PropTypes.func.isRequired
}

export default Product;