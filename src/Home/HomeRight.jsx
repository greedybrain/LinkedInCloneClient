import React from "react";
import LinkedInNews from "./LinkedInNews";
import MostViewedCourses from "./MostViewedCourses";
import "../Styles/HomeRight.css";
import Footer from "../Footer/Footer";

const HomeRight = () => {
	return (
		<div className='home_right_wrapper'>
			<LinkedInNews />
			<MostViewedCourses />
			<Footer />
		</div>
	);
};

export default HomeRight;
