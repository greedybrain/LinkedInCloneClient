import React, { Component } from "react";
import moment from "moment";
import UserContext from "../Context/userContext";
import "../Styles/Comment.css";

class Comment extends Component {
	render() {
		const { allUsers } = this.context.get;
		const { comment } = this.props;

		const getCommentUser = () => {
			const user = allUsers.find((user) => comment.user === user._id);
			if (!user) return;
			return user;
		};
		return (
			<li className='comment_wrapper'>
				<div className='user_image'>
					<img
						src='https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png'
						alt='null'
					/>
				</div>
				<div className='helper'>
					<div className='comment'>
						<div className='comment_header'>
							<div className='name_and_headline'>
								<div className='name'>{getCommentUser().name}</div>
								<div className='headline'>{getCommentUser().headline}</div>
							</div>
							<div className='time_and_ellipsis'>
								<div className='time'>
									{moment(comment.createdAt).fromNow()}
								</div>
								<div className='ellipsis'>•••</div>
							</div>
						</div>
						<div className='comment_body'>{comment.content}</div>
					</div>
					<div className='comment_footer'>
						<span className='like'>Like</span>
						<span className='pipe'>|</span>
						<span className='reply'>Reply</span>
					</div>
				</div>
			</li>
		);
	}
}

Comment.contextType = UserContext;

export default Comment;
