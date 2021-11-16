import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cartItem';
import CustomButton from '../Custom-button/CustomButton';


function CartDrowpdown({cartItem}) {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItem.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
};

const mapStateToProps = ({ cart: {cartItem} }) => ({
    cartItem
})

export default connect(mapStateToProps)(CartDrowpdown)
