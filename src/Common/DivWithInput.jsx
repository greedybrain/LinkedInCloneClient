import React from 'react'


const DivWithInput = ({ specialClass, inputType, inputName, inputPlaceholder, inputValue, inputRequired, handleChange, focus }) => {
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
                        />
                </div>
        )
}

export default DivWithInput
