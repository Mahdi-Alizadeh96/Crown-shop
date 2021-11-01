import React from 'react'
import { Link } from 'react-router-dom'

export default function Hedaer() {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <img className='logo' src="media/crown.svg" alt="crown logo" />
            </Link>
            <div className='options'>
                <Link className='option' to='/Shop'>Shop</Link>
                <Link className='option' to='/Contant'>Contant</Link>
            </div>
        </div>
    )
}
