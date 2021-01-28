//! Core Modules
import React, { useContext, useEffect, useState } from "react";

//! NPM Modules
import moment from "moment";

//! Custom Modules
import Icon from "../Common/Icon";
import UserPostOptions from "./UserPostOptions";
import ViewerPostOptions from "./ViewerPostOptions";
import WhoLiked from "./WhoLiked";
import CommentForm from "../Comments/CommentForm";
import UserContext from "../Context/userContext";
import { likePostService, unlikePostService } from "../services/like_post";
import "../Styles/Post.css";
import CommentSection from "../Comments/CommentSection";

const Post = ({
	image,
	post,
	deletePostAction,
	getCurrentPost,
	setEditMode,
	getAllPostsAction,
	faker,
}) => {
	const [showUserPostOptions, setShowUserPostOptions] = useState(false);
	const [showCommentOptions, setShowCommentOptions] = useState(false);
	const [didComment, setDidComment] = useState(false);
	const [didReply, setDidReply] = useState(false);
	const [showLikes, setShowLikes] = useState(false);
	const [liked, setLiked] = useState(false);
	const [showCommentForm, setShowCommentForm] = useState(false);
	const [showComments, setShowComments] = useState(false);
	const { user, avatar } = useContext(UserContext).get;

	const toggleUserPostOptions = () => {
		setShowUserPostOptions(!showUserPostOptions);
	};

	const handleUserOptionsLeave = () => {
		setShowUserPostOptions(false);
	};

	const toggleUserCommentOptions = () => {
		setShowCommentOptions(!showCommentOptions);
	};

	const handleUserCommentOptionsLeave = () => {
		setShowCommentForm(false);
	};

	const handleShowCommentArea = () => {
		setShowCommentForm(true);
		setTimeout(() => setShowComments(true), 500);
	};

	const userDidLike = () => {
		const like = post.likes.find((like) => like.user === user._id);
		if (like) return true;
	};

	const handlePostLike = async () => {
		if (!userDidLike()) {
			const like = await likePostService(post);
			console.log(like, "POST LIKED");
			setLiked(userDidLike());
		} else {
			const unlike = await unlikePostService(post);
			console.log(unlike, "POST UNLIKED");
			setLiked(!userDidLike());
		}
	};

	useEffect(() => {
		getAllPostsAction();
	}, [liked, didComment, didReply]);

	return (
		<>
			<div className='post_and_user_options'>
				<div className='post_wrapper animate__animated animate__zoomIn animate__faster'>
					<div className='post'>
						<div className='post_header'>
							<div className='header_left'>
								<div className='image_wrapper'>
									<img src={faker.random.image()} alt='profile' />
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
												{`${post.likes.length} ${
													post.likes.length > 0 && post.comments.length > 0
														? "•"
														: ""
												}`}
											</div>
											<div className='dot' style={{ marginRight: "4px" }}></div>
										</>
									) : null}
								</div>
								<div className='comments' onClick={handleShowCommentArea}>
									{post.comments.length > 0
										? post.comments.length === 1
											? `${post.comments.length} comment`
											: ` ${post.comments.length} comments`
										: null}
								</div>
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
								onClick={handleShowCommentArea}
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
						{showCommentForm ? (
							<CommentForm post={post} setDidComment={setDidComment} />
						) : null}
						{showComments ? (
							<CommentSection
								post={post}
								toggleUserCommentOptions={toggleUserCommentOptions}
								handleUserCommentOptionsLeave={handleUserCommentOptionsLeave}
								setDidReply={setDidReply}
							/>
						) : null}
					</div>
				</div>
				{showUserPostOptions ? (
					user._id === post.user._id ? (
						<UserPostOptions
							toggleUserPostOptions={toggleUserPostOptions}
							handleUserOptionsLeave={handleUserOptionsLeave}
							deletePostAction={deletePostAction}
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
