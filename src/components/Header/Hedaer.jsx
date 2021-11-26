import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDrowpdown from '../cart-dropdown/CartDrowpdown';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { HeaderContainer , LogoContainer , OptionsContainer , OptionLink , OptionDiv } from './Header-Styles';

function Hedaer({currentUser , hidden}) {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <img className='logo' src="/media/crown.svg" alt="crown logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/Shop'>Shop</OptionLink>
                <OptionLink to='/Contant'>Contant</OptionLink>
                {
                    currentUser ?
                    <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv> :
                    <OptionLink to='/Auth'>SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                !hidden ? 
                <CartDrowpdown/> :
                null
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Hedaer);