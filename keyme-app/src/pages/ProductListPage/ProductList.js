import React from 'react';
import { connect } from 'react-redux';
import Product from '../../components/Product/Product';
import Pagination from '../../components/Pagination/Pagination';
import CheckoutButton from '../../components/CheckoutButton/CheckoutButton';

import { update_cart } from '../../redux/Cart/cartActions'
import { fetch_product } from '../../services/mockRequest';

import './ProductList.scss';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProducts: []
        };
    }

    componentDidMount() {
        this.props.dispatch(fetch_product());
    }

    updateProducts=(currentItems)=> {
        this.setState({
            currentProducts: currentItems
        });
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
        return (
            <div className='products'>
                <div className='product-list-header'>
                    <div className='eyebrow-key'>Add or Scan Your Free Key</div>
                    <div className='eyebrow-delivery'>Free delivery</div>
                </div>
                <div className='product-list'>
                    {this.state.currentProducts.map(product=> (
                       <Product key={product.id} item={product} addProduct={()=>this.addCart(product)} /> 
                    ))}
                </div>
                <div className='product-list-pagination'>
                    {this.props.products.length!==0 && <Pagination items={this.props.products}  handleChange={this.updateProducts} />}
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