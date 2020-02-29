import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Product=(props)=> {
    const item=props.item;

    const addCart=(item)=> {
        console.log(item);
    }

    const addButton=()=> {
        return (
            <div>
                <button onClick={()=>addCart(item)}>Add to Cart</button>
            </div>
        );
    }

    const orderCount=()=> {
        return (
            <div>
                orderCount
            </div>
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
    item: PropTypes.object.isRequired
}

export default connect()(Product);