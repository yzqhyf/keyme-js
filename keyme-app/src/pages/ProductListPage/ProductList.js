import React from 'react';
import { connect } from 'react-redux';
import Product from '../../components/Product/Product';
import { fetch_product } from '../../services/mockRequest';

import './ProductList.scss';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.dispatch(fetch_product());
    }

    render() {
        const ProductList=this.props.products && this.props.products.map(product=> (
            <Product key={product.id} item={product} />
        ));
        return (
            <div className='products'>
                <div className='product-list-header'>
                    <div>Add or Scan Your Free Key</div>
                    <div>Free delivery</div>
                </div>
                <div className='product-list'>
                    {ProductList}
                </div>
            </div>
        );
    };
};

const mapStateToProps= state => {
    return {
        products: state.productListReducer.lists
    };
};

export default connect(mapStateToProps, null)(ProductList);