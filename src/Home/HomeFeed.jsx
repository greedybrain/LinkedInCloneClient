import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import "../Styles/HomeFeed.css";

const HomeFeed = () => {
	return (
		<div className='home_feed_wrapper'>
			<CreatePost />
		</div>
	);
};

export default HomeFeed;
