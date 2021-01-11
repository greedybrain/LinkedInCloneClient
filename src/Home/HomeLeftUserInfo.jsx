//! Core Modules
//! Core Modules
import React from 'react'
import { Link } from 'react-router-dom'

//! Custom Modules/ Components
import Icon from '../Common/Icon'
import coverImage from  '../Images/cover_image.jpeg'
import userImage from '../Images/naya_willis.jpg'
import '../Styles/HomeLeftUserInfo.css'

const HomeLeftUserInfo = () => {
        return (
                <div className="home_left_user_info_wrapper">
                        <div className="cover_image_wrapper">
                                <img src={coverImage} alt="cover pic"/>
                        </div>
                        <div className="user_image_wrapper">
                                <img src={userImage} alt="naya willis"/>
                        </div>
                        <div className="user_name">
                                <Link to="#">Naya Willis</Link>
                        </div>
                        <div className="user_headline">
                                Full Stack Software Engineer || React | Redux | Node | Javascript | Ruby | Rails
                        </div>
                        <div className="views">
                                <div className="profile">
                                        <div className="part_a">
                                                Who viewed your profile
                                        </div>
                                        <div className="part_b">
                                                1,278
                                        </div>
                                </div>
                                <div className="post_views">
                                        <div className="part_a">
                                                Views of your post
                                        </div>
                                        <div className="part_b">
                                                440
                                        </div>
                                </div>
                        </div>
                        <div className="tools">
                                <div className="access">
                                        Access exclusive tools & insights
                                </div>
                                <div className="prem">
                                        <Icon name="fas fa-square" /> 
                                        <div className="reactivate">
                                                Reactivate Premium
                                        </div>
                                </div>
                        </div>
                        <div className="my_items">
                                <Icon name="fas fa-bookmark" />
                                <div className="label">
                                        My items
                                </div>
                        </div>
                </div>
        )
}

export default HomeLeftUserInfo
