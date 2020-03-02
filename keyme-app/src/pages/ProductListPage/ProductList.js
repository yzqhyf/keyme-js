import React from 'react';
import { connect } from 'react-redux';
import Product from '../../components/Product/Product';
import CheckoutButton from '../../components/CheckoutButton/CheckoutButton';

import { update_cart } from '../../redux/Cart/cartActions'
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

    addCart=(product)=> {
        let cartProducts=this.props.cartProducts;
        this.props.products.map(item=> {
            if(item.id===product.id) {
                item.order+=product.order || 1;
            }
        });
        if(!cartProducts.includes(product)) {
            this.props.cartProducts.push(product);
        }
        this.props.dispatch(update_cart(this.props.cartProducts));
    }

    render() {
        const ProductList=this.props.products && this.props.products.map(product=> (
            <Product key={product.id} item={product} addProduct={()=>this.addCart(product)} />
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
                <div className='checkout-button'>
                    <CheckoutButton />
                </div>
            </div>
        );
    };
};

const mapStateToProps= state => {
    return {
        cartProducts: state.cartReducer.carts,
        products: [...state.productListReducer.lists]
    };
};

export default connect(mapStateToProps, null)(ProductList);