import React, { Component } from "react";
import Icon from "../../Common/Icon";
import "../../Styles/PostFormToggler.css";

class PostFormToggler extends Component {
	render() {
		return (
			<div className='post_form_toggler'>
				<Icon name='far fa-edit' />
				<div className='start_post'>Start a post</div>
			</div>
		);
	}
}

export default PostFormToggler;
