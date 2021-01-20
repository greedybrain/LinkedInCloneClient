//! Core Modules
import React, { Component } from "react";
import HeadAd from "../Common/HeadAd";

//! Custom Modules/ Components
import "../Styles/Home.css";
import HomeFeed from "./HomeFeed";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

class Home extends Component {
	render() {
		return (
			<div className='home_page'>
				<div className='home_page_wrapper'>
					<HeadAd />
					<div className='home_page_body'>
						<HomeLeft />
						<HomeFeed />
						<HomeRight />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
