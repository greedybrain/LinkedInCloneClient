//! Core Modules
import React, { Component } from "react";

//! Custom Modules
import CreatePost from "../Post/CreatePost";
import Posts from "../Post/Posts";
import CreatePostPopup from "../Post/CreatePostPopup";
import SuccessMessage from "../SuccessMessage";
import UserContext from "../Context/userContext";
import getAllPostsService from "../services/get_all_posts";
import deletePostService from "../services/delete_post";
import "../Styles/HomeFeed.css";
import "../Styles/SuccessMessage.css";

class HomeFeed extends Component {
	state = {
		allPosts: [...this.context.get.allPosts],
		didDeletePost: false,
		didCreatePost: false,
		didEditPost: false,
		currentPost: {},
		successMessage: "",
		inEditMode: false,
	};

	getAllPostsAction = async () => {
		const data = await getAllPostsService();
		if (!data) return;
		data.reverse();
		this.setState({ allPosts: data });
	};

	// componentDidMount() {
	// 	this.getAllPostsAction();
	// }

	// componentDidUpdate = async (prevProps, prevState, snapshot) => {
	// 	if (this.state.allPosts !== prevState.allPosts) {
	// 		await this.getAllPostsAction();
	// 	}
	// };

	getCurrentPost = (post) => {
		this.setState({ currentPost: post });
	};

	addPostAction = async (post) => {
		console.log(post, "ADDED POST");
		this.setState((prevState) => ({
			allPosts: [post, ...prevState.allPosts],
			didCreatePost: true,
			successMessage: "Post created successfully",
		}));
	};

	editPostAction = async (post) => {
		console.log(post, "EDITED POST");
		const posts = [...this.state.allPosts];
		const index = posts.findIndex((p) => p._id === post._id);
		posts[index] = { ...post };

		this.setState({
			allPosts: posts,
			didEditPost: true,
			successMessage: "Post updated successfully",
		});
	};

	deletePostAction = async (currPost) => {
		const post = await deletePostService(this.context, currPost);
		console.log(post, "DELETED");
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
		const { showCreatePostPopup } = this.context.get;
		const {
			allPosts,
			allLikes,
			didCreatePost,
			didDeletePost,
			didEditPost,
			successMessage,
			currentPost,
			inEditMode,
		} = this.state;
		return (
			<>
				<div className='home_feed_wrapper'>
					<CreatePost />

					<Posts
						allPosts={allPosts}
						allLikes={allLikes}
						deletePostAction={this.deletePostAction}
						editPostAction={this.editPostAction}
						getCurrentPost={this.getCurrentPost}
						inEditMode={inEditMode}
						setEditMode={this.setEditMode}
						getAllPosts={this.getAllPosts}
						getAllPostsAction={this.getAllPostsAction}
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
				{showCreatePostPopup ? (
					<CreatePostPopup
						addPostAction={this.addPostAction}
						editPostAction={this.editPostAction}
						currentPost={currentPost}
						inEditMode={inEditMode}
						setEditMode={this.setEditMode}
					/>
				) : null}
			</>
		);
	}
}

HomeFeed.contextType = UserContext;

export default HomeFeed;
