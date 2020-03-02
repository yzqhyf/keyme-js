import React from 'react';
import PropTypes from 'prop-types';
import Count from '../Count/Count';

const Product=(props)=> {
    const item=props.item;

    const addButton=()=> {
        return (
            <div>
                <button onClick={props.addProduct}>Add to Cart</button>
            </div>
        );
    }

    const orderCount=()=> {
        return (
            <Count />
        );
    }

    return (
        <div className='product-item'>
            <div>
                <img src={item.imageURL} alt={item.name} />
            </div>
            <div>
                <div>{item.display_name}</div>
                <div>{item.cost}</div>
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