import React from 'react';
import { connect } from 'react-redux';
import { createSelectorCreator } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

function CartIcon({toggleCartHidden, itemCount}) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden} >
            <img src="media/shopping-bag.svg" alt="shopping-bag" className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispachToProps = dispach => ({
    toggleCartHidden : () => dispach(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount : selectCartItemsCount(state)
})

export default connect(mapStateToProps , mapDispachToProps)(CartIcon);