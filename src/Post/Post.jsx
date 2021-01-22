import React, { useContext, useEffect, useState } from "react";
import Icon from "../Common/Icon";
import "../Styles/Post.css";
import moment from "moment";
import UserPostOptions from "./UserPostOptions";
import ViewerPostOptions from "./ViewerPostOptions";
import UserContext from "../Context/userContext";
import axios from "../utils/axios_configs";
import WhoLiked from "./WhoLiked";
import CommentForm from "./CommentForm";

const Post = ({
	image,
	post,
	deletePost,
	getCurrentPost,
	setEditMode,
	getAllPosts,
}) => {
	const [showUserPostOptions, setShowUserPostOptions] = useState(false);
	const [showLikes, setShowLikes] = useState(false);
	const [liked, setLiked] = useState(false);
	const [showCommentForm, setShowCommentForm] = useState(false);
	const context = useContext(UserContext);
	const { user } = context;

	const toggleUserPostOptions = () => {
		setShowUserPostOptions(!showUserPostOptions);
	};

	const handleUserOptionsLeave = () => {
		setShowUserPostOptions(false);
	};

	const userDidLike = () => {
		const like = post.likes.find((like) => like.user === user._id);
		if (like) return !!like;
	};

	const handlePostLike = async () => {
		const token = localStorage.getItem("token");
		if (!userDidLike()) {
			try {
				const { data } = await axios.post(
					`/likes/${post._id}`,
					{ foo: null },
					{ headers: { Authorization: `Bearer ${token}` } }
				);
				console.log(data);
			} catch (error) {
				console.log(error.message);
			}
			setLiked(true);
		} else {
			try {
				const { data } = await axios.delete(`/likes/${post._id}`, {
					headers: { Authorization: `Bearer ${token}` },
				});
				console.log(data);
			} catch (error) {
				console.log(error.message);
			}
			setLiked(false);
		}
	};

	// useEffect(() => getAllPosts(), [getAllPosts, liked]);

	return (
		<>
			<div className='post_and_user_options'>
				<div className='post_wrapper animate__animated animate__zoomIn animate__faster'>
					<div className='post'>
						<div className='post_header'>
							<div className='header_left'>
								<div className='image_wrapper'>
									<img src={image} alt='profile' />
								</div>
							</div>
							<div className='header_right'>
								<div className='name_headline_time'>
									<div className='name_ellipsis'>
										<div className='name'>{post.user.name}</div>
										<div className='ellipsis' onClick={toggleUserPostOptions}>
											<div className='ellipsis_1 ell'>•</div>
											<div className='ellipsis_2 ell'>•</div>
											<div className='ellipsis_3 ell'>•</div>
										</div>
									</div>
									<div className='headline'>{post.user.headline}</div>
									<div className='time_access'>
										<div className='time'>
											{moment(post.createdAt).fromNow()}
										</div>
										<div className='ell'>•</div>
										<Icon name='fas fa-globe-americas' />
									</div>
								</div>
							</div>
						</div>
						<div className='post_body'>
							<div className='content'>{post.content}</div>
							<div className='comment_meta_data'>
								<div className='reaction'>
									{post.likes.length > 0 ? (
										<>
											<Icon name='fas fa-thumbs-up' />
											<div
												className='reaction_amount'
												onClick={() => setShowLikes(true)}
											>
												{post.likes.length}
											</div>
											<div className='dot' style={{ marginRight: "4px" }}>
												•
											</div>
										</>
									) : null}
								</div>
								<div className='comments'>0 comments</div>
							</div>
						</div>
						<div className='post_footer'>
							{!userDidLike() ? (
								<div className='like_label meta' onClick={handlePostLike}>
									<Icon name='far fa-thumbs-up like icon' />
									<div className='label'>Like</div>
								</div>
							) : (
								<div
									className='like_label meta liked_state'
									onClick={handlePostLike}
								>
									<Icon name='far fa-thumbs-up like icon' />
									<div className='label' style={{ color: "#0a66c2" }}>
										Like
									</div>
								</div>
							)}
							<div
								className='comment_label meta'
								onClick={() => setShowCommentForm(!showCommentForm)}
							>
								<Icon name='far fa-comment-dots comment icon' />
								<div className='label'>Comment</div>
							</div>
							<div className='share_label meta'>
								<Icon name='fas fa-share icon' />
								<div className='label'>Share</div>
							</div>
							<div className='send_label meta'>
								<Icon name='fas fa-paper-plane icon' />
								<div className='label'>Send</div>
							</div>
						</div>
						{showCommentForm ? <CommentForm /> : null}
					</div>
				</div>

				{showUserPostOptions ? (
					user._id === post.user._id ? (
						<UserPostOptions
							toggleUserPostOptions={toggleUserPostOptions}
							handleUserOptionsLeave={handleUserOptionsLeave}
							deletePost={deletePost}
							post={post}
							getCurrentPost={getCurrentPost}
							setEditMode={setEditMode}
						/>
					) : (
						<ViewerPostOptions
							post={post}
							toggleUserPostOptions={toggleUserPostOptions}
							handleUserOptionsLeave={handleUserOptionsLeave}
						/>
					)
				) : null}
			</div>
			{showLikes && <WhoLiked post={post} setShowLikes={setShowLikes} />}
		</>
	);
};

export default Post;
