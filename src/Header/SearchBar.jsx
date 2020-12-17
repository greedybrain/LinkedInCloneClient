//! Core Modules
import React, { useState } from 'react'

//! Custom Modules / Components
import DivWithInput from '../Common/DivWithInput'
import Icon from '../Common/Icon'
import '../Styles/SearchBar.css'

const SearchBar = () => {
        const [inputValue, setInputValue] = useState("")
        
        const handleChange = event => setInputValue(event.target.value)
        
        return (
                <div className="search_bar_wrapper">
                        <form>
                                <div className="search_icon_and_input">
                                        <Icon name="fas fa-search" />
                                        <DivWithInput 
                                                specialClass="search" 
                                                inputType="search" 
                                                inputName="search" 
                                                inputPlaceholder="Search" 
                                                inputValue={inputValue}
                                                inputRequired={true} 
                                                focus={true} 
                                                handleChange={handleChange}
                                        />
                                </div>
                        </form>
                </div>
        )
}

export default SearchBar
