//! Core Modules
import React from 'react'
import { Link } from 'react-router-dom'

//! Custom Modules / Components
import Icon from '../Common/Icon'
import '../Styles/Logo.css'


const Logo = () => {
        return (
                <div className="logo_wrapper">
                        <Link to="/">
                                <Icon name="fab fa-linkedin" />
                        </Link>
                </div>
        )
}

export default Logo
