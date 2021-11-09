import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';


function CartIcon({toggleCartHidden}) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden} >
            <img src="media/shopping-bag.svg" alt="shopping-bag" className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispachToProps = dispach => ({
    toggleCartHidden : () => dispach(toggleCartHidden())
})

export default connect(null , mapDispachToProps)(CartIcon);