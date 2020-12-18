import React from 'react'


const DivWithInput = ({ specialClass, inputType, inputName, inputPlaceholder, inputValue, inputRequired, handleChange, handleFocus, handleBlur, focus }) => {
        return (
                <div 
                        className={specialClass + ' important_input_styles'}
                >
                        <input 
                                type={inputType} 
                                name={inputName} 
                                placeholder={inputPlaceholder} 
                                value={inputValue} 
                                required={inputRequired} 
                                onChange={handleChange}
                                autoFocus={focus}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                        />
                </div>
        )
}

export default DivWithInput
