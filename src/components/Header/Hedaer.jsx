import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDrowpdown from '../cart-dropdown/CartDrowpdown';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';

function Hedaer({currentUser , hidden}) {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <img className='logo' src="media/crown.svg" alt="crown logo" />
            </Link>
            <div className='options'>
                <Link className='option' to='/Shop'>Shop</Link>
                <Link className='option' to='/Contant'>Contant</Link>
                {
                    currentUser ?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div> :
                    <Link className='option' to='/Auth'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
                !hidden ? 
                <CartDrowpdown/> :
                null
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Hedaer);