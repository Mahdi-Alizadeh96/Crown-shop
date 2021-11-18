import React from 'react';
import { connect } from 'react-redux';
import { cleaerItemFromCart , addItem , removeItem } from '../../redux/cart/cart-actions';


function CheckoutItem({cartItem ,clearItem , ADD_ITEM, REMOVE_ITEM}) {
    const {name ,imageUrl ,price ,quantity} = cartItem;
    return (
        <div className='checkout-item' >
            <div className='image-container' >
                <img src={imageUrl} alt="item" />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=> REMOVE_ITEM(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=> ADD_ITEM(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=>clearItem(cartItem)} >&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(cleaerItemFromCart(item)),
    ADD_ITEM : item => dispatch(addItem(item)),
    REMOVE_ITEM : item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);