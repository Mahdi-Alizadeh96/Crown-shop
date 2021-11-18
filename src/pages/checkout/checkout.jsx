import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkoutItem';
import { selectCartItems, selectCartTotals } from '../../redux/cart/cart-selectors';

function Checkout({cartItem, total}) {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItem.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
            }
            <div className='total'>
                <span>TOTAL: $ {total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItem : selectCartItems,
    total : selectCartTotals
})

export default connect(mapStateToProps)(Checkout);