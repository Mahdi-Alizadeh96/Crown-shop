import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';
import CustomButton from '../Custom-button/CustomButton';

function CollectionItem({item ,ADDITEM}) {
    const {name , price , imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}$</span>
            </div>
            <CustomButton inverted onClick={ () => ADDITEM(item)} >ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    ADDITEM: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)