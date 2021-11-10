import React from 'react'

export default function CustomButton({children,isGoolgleSignIn , inverted, ...otherProps}) {
    return (
        <button className={`${isGoolgleSignIn ? 'google-sign-in' : '' }
                            ${inverted ? 'inverted' : '' }
                            custom-button`} {...otherProps}>{children}
        </button>
    )
};
