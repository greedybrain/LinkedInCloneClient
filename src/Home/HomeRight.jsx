import React from "react";
import LinkedInNews from "./LinkedInNews";
import MostViewedCourses from "./MostViewedCourses";
import "../Styles/HomeRight.css";

const HomeRight = () => {
	return (
		<div className='home_right_wrapper'>
			<LinkedInNews />
			<MostViewedCourses />
		</div>
	);
};

export default HomeRight;
