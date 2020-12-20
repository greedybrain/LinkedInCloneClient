//! Core Modules
import React from 'react'

//! Cutome Modules/ Components
import UserImage from '../Common/UserImage'
import '../Styles/UserTab.css'

const userImage = {
        imageWrapper: {
                width: "20px",
                image: {
                        borderRadius: "50%"
                }
        }
}

const UserTab = () => {
        return (
                <div className="user_tab_wrapper" style={null}>
                        <UserImage styles={userImage} />
                        <div className="user_tab_lower">
                                <div className="me">
                                        Me
                                </div>
                                <div className="drop_down_arrow">
                                        &#9662;
                                </div>
                        </div>
                </div>
        )
}

export default UserTab
