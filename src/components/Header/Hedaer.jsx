import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

function Hedaer({currentUser}) {
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
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Hedaer);