import React, { Component } from "react";
import Icon from "../Common/Icon";
import UserContext from "../Context/userContext";
import "../Styles/PostFormToggler.css";

class PostFormToggler extends Component {
	render() {
		const { toggleCreatePostPopup } = this.context.actions;
		return (
			<div className='post_form_toggler' onClick={toggleCreatePostPopup}>
				<Icon name='far fa-edit' />
				<div className='start_post'>Start a post</div>
			</div>
		);
	}
}

PostFormToggler.contextType = UserContext;

export default PostFormToggler;
