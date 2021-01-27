import React, { Component } from "react";
import Icon from "../Common/Icon";
import "../Styles/UserCommentOptions.css";

class UserCommentOptions extends Component {
	render() {
		const { post, handleCommentOptionsLeave } = this.props;

		return (
			<div
				className='user_comment_options_wrapper'
				onMouseLeave={handleCommentOptionsLeave}
			>
				<div className='user_comment_options'>
					<ul>
						<li className='comment_option' onClick={null}>
							<Icon name='fas fa-pen' />
							<div className='label'>
								<div className='label_name'>Edit</div>
							</div>
						</li>
						<li className='comment_option' onClick={null}>
							<Icon name='fas fa-trash-alt' />
							<div className='label'>
								<div className='label_name'>Delete</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default UserCommentOptions;
