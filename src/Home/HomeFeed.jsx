import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import "../Styles/HomeFeed.css";
import Posts from "../Posts";

const HomeFeed = () => {
	return (
		<div className='home_feed_wrapper'>
			<CreatePost />
			<Posts />
		</div>
	);
};

export default HomeFeed;
