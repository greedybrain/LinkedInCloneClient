//! Core Modules
import React from "react";

//! Custom Modules/ Components
import HomeLeftUserInfo from "./HomeLeftUserInfo";
import "../Styles/HomeLeft.css";
import HomeLeftUserActivity from "./HomeLeftUserActivity";

const HomeLeft = () => {
	return (
		<div className='home_left_wrapper'>
			<HomeLeftUserInfo />
			<HomeLeftUserActivity />
		</div>
	);
};

export default HomeLeft;
