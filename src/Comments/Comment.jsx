import React, { Component } from "react";
import moment from "moment";
import UserContext from "../Context/userContext";
import "../Styles/Comment.css";
import UserCommentOptions from "./UserCommentOptions";
import Replies from "./Replies";
import ReplyForm from "./ReplyForm";
import faker from "faker";

class Comment extends Component {
	state = {
		shouldShowCommentOptions: false,
		shouldShowReplyForm: false,
	};

	getStatePropsContext = () => {
		const { allUsers } = this.context.get;
		const { shouldShowCommentOptions, shouldShowReplyForm } = this.state;
		const { comment, post, setDidReply } = this.props;
		return {
			allUsers,
			shouldShowCommentOptions,
			comment,
			post,
			shouldShowReplyForm,
			setDidReply,
		};
	};

	getCommentUser = () => {
		const { allUsers, comment } = this.getStatePropsContext();
		const user = allUsers.find((user) => comment.user === user._id);
		if (!user) return;
		return user;
	};

	toggleUserCommentOptions = () => {
		this.setState((prevState) => ({
			shouldShowCommentOptions: !prevState.shouldShowCommentOptions,
		}));
	};

	toggleReplyForm = () => {
		this.setState((prevState) => ({
			shouldShowReplyForm: !prevState.shouldShowReplyForm,
		}));
	};

	handleCommentOptionsLeave = () => {
		this.setState({
			shouldShowCommentOptions: false,
		});
	};

	render() {
		const {
			comment,
			shouldShowCommentOptions,
			post,
			shouldShowReplyForm,
			setDidReply,
		} = this.getStatePropsContext();
		return (
			<div className='comment_and_options'>
				<li className='comment_wrapper'>
					<div className='user_image'>
						<img src={faker.random.image()} alt='null' />
					</div>
					<div className='helper'>
						<div className='comment'>
							<div className='comment_header'>
								<div className='name_and_headline'>
									<div className='name'>{this.getCommentUser().name}</div>
									<div className='headline'>
										{this.getCommentUser().headline}
									</div>
								</div>
								<div className='time_and_ellipsis'>
									<div className='time'>
										{moment(comment.createdAt).fromNow()}
									</div>
									<div
										className='ellipsis'
										onClick={this.toggleUserCommentOptions}
									>
										•••
									</div>
								</div>
							</div>
							<div className='comment_body'>{comment.content}</div>
						</div>
						<div className='comment_footer'>
							<span className='like'>Like</span>
							<span className='pipe'>|</span>
							<span className='reply' onClick={this.toggleReplyForm}>
								Reply
							</span>
						</div>
					</div>
				</li>
				{shouldShowReplyForm ? (
					<ReplyForm
						getCommentUser={this.getCommentUser}
						setDidReply={setDidReply}
						post={post}
						comment={comment}
						toggleReplyForm={this.toggleReplyForm}
					/>
				) : null}
				<Replies post={post} replies={comment.replies} />
				{shouldShowCommentOptions ? (
					<UserCommentOptions
						handleCommentOptionsLeave={this.handleCommentOptionsLeave}
					/>
				) : null}
			</div>
		);
	}
}

Comment.contextType = UserContext;

export default Comment;
