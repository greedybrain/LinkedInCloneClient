//! Core Modules
import React, { Component } from 'react';
import HeadAd from '../Common/HeadAd';

//! Custom Modules/ Components
import '../Styles/Home.css'

class Home extends Component {
        render() {
                return (
                        <div className="home_page_wrapper">
                                <HeadAd />
                        </div>
                );
        }
}

export default Home;