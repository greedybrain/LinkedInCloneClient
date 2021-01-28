import React, { Component } from "react";
import moment from "moment";
import UserContext from "../Context/userContext";
import "../Styles/Reply.css";
import UserCommentOptions from "./UserCommentOptions";
import faker from "faker";

class Reply extends Component {
	state = {
		shouldShowReplyOptions: false,
	};

	getStatePropsContext = () => {
		const { allUsers } = this.context.get;
		const { shouldShowReplyOptions } = this.state;
		const { comment, reply } = this.props;
		return {
			allUsers,
			shouldShowReplyOptions,
			comment,
			reply,
		};
	};

	getReplyUser = () => {
		const { allUsers, reply } = this.getStatePropsContext();
		const user = allUsers.find((user) => reply.user === user._id);
		if (!user) return;
		return user;
	};

	toggleUserCommentOptions = () => {
		this.setState((prevState) => ({
			shouldShowCommentOptions: !prevState.shouldShowCommentOptions,
		}));
	};

	handleCommentOptionsLeave = () => {
		this.setState({
			shouldShowCommentOptions: false,
		});
	};

	render() {
		const { shouldShowCommentOptions, reply } = this.getStatePropsContext();
		return (
			<div className='reply_and_options'>
				<li className='reply_wrapper'>
					<div className='user_image'>
						<img src={faker.random.image()} alt='null' />
					</div>
					<div className='helper'>
						<div className='reply'>
							<div className='reply_header'>
								<div className='name_and_headline'>
									<div className='name'>{this.getReplyUser().name}</div>
									<div className='headline'>{this.getReplyUser().headline}</div>
								</div>
								<div className='time_and_ellipsis'>
									<div className='time'>
										{moment(reply.createdAt).fromNow()}
									</div>
									<div
										className='ellipsis'
										onClick={this.toggleUserCommentOptions}
									>
										•••
									</div>
								</div>
							</div>
							<div className='reply_body'>{reply.content}</div>
						</div>
						<div className='reply_footer'>
							<span className='like'>Like</span>
							<span className='pipe'>|</span>
							<span className='reply'>Reply</span>
						</div>
					</div>
				</li>
				{shouldShowCommentOptions ? (
					<UserCommentOptions
						handleCommentOptionsLeave={this.handleCommentOptionsLeave}
					/>
				) : null}
			</div>
		);
	}
}

Reply.contextType = UserContext;

export default Reply;
