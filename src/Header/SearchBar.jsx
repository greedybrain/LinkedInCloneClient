//! Core Modules
import React from 'react'

//! Custom Modules / Components
import DivWithInput from '../Common/DivWithInput'
import Icon from '../Common/Icon'
import '../Styles/SearchBar.css'

const SearchBar = () => {
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
                                                inputValue={null} 
                                                inputeRequired={true} 
                                                focus={true} 
                                        />
                                </div>
                        </form>
                </div>
        )
}

export default SearchBar
