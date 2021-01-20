import React, { Component, useContext, useEffect, useState } from "react";
import CreatePost from "../Post/CreatePost";
import "../Styles/HomeFeed.css";
import Posts from "../Post/Posts";
import axios from "../utils/axios_configs";
import CreatePostPopup from "../Post/CreatePostPopup";
import UserContext from "../Context/userContext";
import SuccessMessage from "../SuccessMessage";
import "../Styles/SuccessMessage.css";
import ViewerPostOptions from "../Post/ViewerPostOptions";

class HomeFeed extends Component {
	state = {
		allPosts: [],
		didDeletePost: false,
		didCreatePost: false,
		didEditPost: false,
		currentPost: {},
		successMessage: "",
		inEditMode: false,
	};

	getAllPosts = async () => {
		const token = localStorage.getItem("token");
		try {
			const { data } = await axios("/posts", {
				headers: { Authorization: `Bearer ${token}` },
			});
			data.reverse();
			this.setState({ allPosts: data });
		} catch (error) {
			console.log(error.message);
		}
	};

	componentDidMount = () => {
		this.getAllPosts();
	};

	componentDidUpdate = () => {
		this.getAllPosts();
	};

	getCurrentPost = (post) => {
		this.setState({ currentPost: post });
	};

	addNewPost = (post) => {
		this.setState((prevState) => ({
			allPosts: [post, ...prevState.allPosts],
			didCreatePost: true,
			successMessage: "Post created successfully",
		}));
	};

	editPost = async (currPost, newContent) => {
		const { user } = this.context;
		if (currPost.user._id !== user._id)
			return console.log("This post does not belong to you");
		const token = localStorage.getItem("token");
		let { content } = currPost;
		content = newContent;
		try {
			const { data } = await axios.patch(
				`/posts/${currPost._id}`,
				{
					content,
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			console.log(data);
		} catch (error) {
			console.log(error.message);
		}
		this.setState({
			didEditPost: true,
			successMessage: "Post updated successfully",
		});
	};

	deletePost = async (currPost) => {
		const { user } = this.context;
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
		const postsCopy = [...this.state.allPosts];
		const filteredPosts = postsCopy.filter((post) => post._id !== currPost._id);
		this.setState({
			allPosts: filteredPosts,
			didDeletePost: true,
			successMessage: "Post deleted successfully",
		});
	};

	setSuccessMessage = (msg) => this.setState({ successMessage: msg });
	setDidDeletePost = (bool) => this.setState({ didDeletePost: bool });
	setDidCreatePost = (bool) => this.setState({ didCreatePost: bool });
	setDidEditPost = (bool) => this.setState({ didEditPost: bool });
	setEditMode = (bool) => this.setState({ inEditMode: bool });

	render() {
		const { showCreatePostPopup } = this.context;
		const {
			allPosts,
			didCreatePost,
			didDeletePost,
			didEditPost,
			successMessage,
			currentPost,
			inEditMode,
		} = this.state;
		return (
			<div className='home_feed_wrapper'>
				<CreatePost />

				{showCreatePostPopup ? (
					<CreatePostPopup
						addNewPost={this.addNewPost}
						editPost={this.editPost}
						currentPost={currentPost}
						inEditMode={inEditMode}
						setEditMode={this.setEditMode}
					/>
				) : null}
				<Posts
					allPosts={allPosts}
					deletePost={this.deletePost}
					editPost={this.editPost}
					getCurrentPost={this.getCurrentPost}
					inEditMode={inEditMode}
					setEditMode={this.setEditMode}
				/>
				{didDeletePost || didCreatePost || didEditPost ? (
					<SuccessMessage
						successMessage={successMessage}
						setSuccessMessage={this.setSuccessMessage}
						setDidDeletePost={this.setDidDeletePost}
						setDidCreatePost={this.setDidCreatePost}
						setDidEditPost={this.setDidEditPost}
						setEditMode={this.setEditMode}
					/>
				) : null}
			</div>
		);
	}
}

HomeFeed.contextType = UserContext;

export default HomeFeed;
