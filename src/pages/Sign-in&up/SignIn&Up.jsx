import React from 'react'
import SignIn from '../../components/Auth/SignIn'
import SignUp from '../../components/Auth/SignUp'

export default function SignInAndUp() {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}
