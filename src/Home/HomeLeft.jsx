//! Core Modules
import React from "react";

//! Custom Modules/ Components
import HomeLeftUserInfo from "./HomeLeftUserInfo";
import HomeLeftUserActivity from "./HomeLeftUserActivity";
import "../Styles/HomeLeft.css";

const HomeLeft = () => {
	return (
		<div className='home_left_wrapper'>
			<HomeLeftUserInfo />
			<HomeLeftUserActivity />
		</div>
	);
};

export default HomeLeft;
