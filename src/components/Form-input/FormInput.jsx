import React from 'react';

export default function FormInput({handleChange, lable, ...otherProps}) {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {
                lable ? 
                (<lable className={`${otherProps.value.length ? 'shrink' :  ''} form-input-label`}>
                    {lable}
                </lable>)
                : null
            }
        </div>
    )
}
