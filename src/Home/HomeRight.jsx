import React from "react";
import LinkedInNews from "./LinkedInNews";
import "../Styles/HomeRight.css";
import MostViewedCourses from "./MostViewedCourses";

const HomeRight = () => {
	return (
		<div className='home_right_wrapper'>
			<LinkedInNews />
			<MostViewedCourses />
		</div>
	);
};

export default HomeRight;
