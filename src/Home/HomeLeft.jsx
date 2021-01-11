//! Core Modules
import React from 'react'

//! Custom Modules/ Components
import HomeLeftUserInfo from './HomeLeftUserInfo'
import '../Styles/HomeLeft.css'

const HomeLeft = () => {
        return (
                <div className="home_left_wrapper">
                        <HomeLeftUserInfo />
                </div>
        )
}

export default HomeLeft
