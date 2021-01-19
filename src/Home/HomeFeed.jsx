import React, { useContext, useEffect, useState } from "react";
import CreatePost from "../Post/CreatePost";
import "../Styles/HomeFeed.css";
import Posts from "../Post/Posts";
import axios from "../utils/axios_configs";
import CreatePostPopup from "../Post/CreatePostPopup";
import UserContext from "../Context/userContext";
import SuccessMessage from "../SuccessMessage";
import "../Styles/SuccessMessage.css";

const HomeFeed = () => {
	const [allPosts, setAllPosts] = useState([]);
	const [didDeletePost, setDidDeletePost] = useState(false);
	const [didCreatePost, setDidCreatePost] = useState(false);
	const [didEditPost, setDidEditPost] = useState(false);
	const [currentPost, setCurrentPost] = useState({});
	const [successMessage, setSuccessMessage] = useState("");
	const context = useContext(UserContext);
	const { showCreatePostPopup, user } = context;

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

	const getCurrentPost = (post) => {
		setCurrentPost(post);
	};

	const addNewPost = (post) => {
		setAllPosts([post, ...allPosts]);
		setDidCreatePost(true);
		setSuccessMessage("Post created successfully");
	};

	const editPost = async (currPost) => {
		if (currPost.user._id !== user._id)
			return console.log("This post does not belong to you");
		const token = localStorage.getItem("token");
		try {
			const { data } = await axios.patch(
				`/posts/${currPost._id}`,
				{
					...currPost,
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			console.log(data);
		} catch (error) {
			console.log(error.message);
		}
		setDidEditPost(true);
		setSuccessMessage("Post updated successfully");
	};

	const deletePost = async (currPost) => {
		if (currPost.user._id !== user._id)
			return console.log("This post does not belong to you");
		const token = localStorage.getItem("token");
		try {
			const { data } = await axios.delete(`/posts/${currPost._id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			console.log(data);
		} catch (error) {
			console.log(error.message);
		}
		const postsCopy = [...allPosts];
		const filteredPosts = postsCopy.filter((post) => post._id !== currPost._id);
		setAllPosts(filteredPosts);
		setDidDeletePost(true);
		setSuccessMessage("Post deleted successfully");
	};
	return (
		<div className='home_feed_wrapper'>
			<CreatePost />

			{showCreatePostPopup ? (
				<CreatePostPopup addNewPost={addNewPost} editPost={editPost} />
			) : null}
			<Posts
				allPosts={allPosts}
				deletePost={deletePost}
				getCurrentPost={getCurrentPost}
			/>
			{didDeletePost || didCreatePost || didEditPost ? (
				<SuccessMessage
					successMessage={successMessage}
					setSuccessMessage={setSuccessMessage}
					setDidDeletePost={setDidDeletePost}
					setDidCreatePost={setDidCreatePost}
				/>
			) : null}
		</div>
	);
};

export default HomeFeed;
