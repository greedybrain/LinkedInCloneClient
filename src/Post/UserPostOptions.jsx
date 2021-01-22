import React, { Component } from "react";
import Icon from "../Common/Icon";
import UserContext from "../Context/userContext";
import "../Styles/UserPostOptions.css";

class UserPostOptions extends Component {
	handleEdit = () => {
		const { toggleUserPostOptions, setEditMode, getCurrentPost } = this.props;
		toggleUserPostOptions();
		setEditMode(true);
		getCurrentPost(this.props.post);
		this.context.actions.toggleCreatePostPopup();
	};

	render() {
		const { handleUserOptionsLeave, deletePostAction, post } = this.props;

		return (
			<div
				className='user_post_options_wrapper'
				onMouseLeave={handleUserOptionsLeave}
			>
				<div className='user_post_options'>
					<ul>
						<li className='post_option'>
							<Icon name='fas fa-bookmark' />
							<div className='label'>
								<div className='label_name'>Save</div>
								<div className='option_description'>Save for later</div>
							</div>
						</li>
						<li className='post_option' onClick={this.handleEdit}>
							<Icon name='fas fa-pen' />
							<div className='label'>
								<div className='label_name'>Edit post</div>
							</div>
						</li>
						<li className='post_option' onClick={() => deletePostAction(post)}>
							<Icon name='fas fa-trash-alt' />
							<div className='label'>
								<div className='label_name'>Delete post</div>
							</div>
						</li>
						<li className='post_option'>
							<Icon name='fas fa-comment-slash slash' />
							<div className='label'>
								<div className='label_name'>Disable comments on this post</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

UserPostOptions.contextType = UserContext;

export default UserPostOptions;
