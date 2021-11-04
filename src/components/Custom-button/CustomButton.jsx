import React from 'react'

export default function CustomButton({children,isGoolgleSignIn , ...otherProps}) {
    return (
        <button className={`${isGoolgleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherProps}>
            {children}
        </button>
    )
};
