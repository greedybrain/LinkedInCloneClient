//! Core Modules
import React, { useState } from 'react'

//! Custom Modules / Components
import DivWithInput from '../Common/DivWithInput'
import Icon from '../Common/Icon'
import '../Styles/SearchBar.css'

const SearchBar = () => {
        const [inputValue, setInputValue] = useState("")
        const handleChange = event => setInputValue(event.target.value)
        const handleFocus = ({ target }) => target.style.paddingLeft = "15px"
        const handleBlur = ({ target }) => target.style.paddingLeft = "5px"
        
        return (
                <div className="search_bar_wrapper">
                        <form>
                                <div className="search_icon_and_input">
                                        <Icon name="fas fa-search" />
                                        <DivWithInput 
                                                specialClass="search" 
                                                inputType="text" 
                                                inputName="search" 
                                                inputPlaceholder="Search" 
                                                inputValue={inputValue}
                                                inputRequired={true} 
                                                focus={false} 
                                                handleChange={handleChange}
                                                handleFocus={handleFocus}
                                                handleBlur={handleBlur}
                                        />
                                </div>
                        </form>
                </div>
        )
}

export default SearchBar
