import React, { useContext, useEffect, useState } from "react";
import CreatePost from "../Post/CreatePost";
import "../Styles/HomeFeed.css";
import Posts from "../Post/Posts";
import axios from "../utils/axios_configs";
import CreatePostPopup from "../Post/CreatePostPopup";
import UserContext from "../Context/userContext";

const HomeFeed = () => {
	const [allPosts, setAllPosts] = useState([]);
	const context = useContext(UserContext);
	const { showCreatePostPopup } = context;

	const getAllPosts = async () => {
		const token = localStorage.getItem("token");
		try {
			const { data } = await axios("/posts", {
				headers: { Authorization: `Bearer ${token}` },
			});
			data.reverse();
			setAllPosts(data);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getAllPosts();
	}, []);

	const addNewPost = (post) => {
		setAllPosts([post, ...allPosts]);
	};

	return (
		<div className='home_feed_wrapper'>
			<CreatePost />

			{showCreatePostPopup ? <CreatePostPopup addNewPost={addNewPost} /> : null}
			<Posts allPosts={allPosts} />
		</div>
	);
};

export default HomeFeed;
