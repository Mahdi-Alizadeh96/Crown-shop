import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import CartItem from '../cart-item/cartItem';
import CustomButton from '../Custom-button/CustomButton';


function CartDrowpdown({cartItem, history , dispatch}) {

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {   
                    cartItem.length ?
                    (cartItem.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                    : (<span className='empty-message'>Your Cart is Empty</span>)
                }
            </div>
            <CustomButton onClick={() => {history.push('/checkout');dispatch(toggleCartHidden())} } >GO TO CHECKOUT</CustomButton>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItem : selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDrowpdown));