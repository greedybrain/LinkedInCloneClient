import React, { Component } from "react";
import "../Styles/CommentForm.css";

class CommentForm extends Component {
	state = {
		content: "",
		height: 40,
		charCount: 0,
		showPostButton: false,
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});

		if (event.target.value.length > 0) {
			this.setState({
				showPostButton: true,
			});
		}
		if (event.target.value.length === 0) {
			this.setState({
				height: 40,
				showPostButton: false,
			});
		}
		//! ===================
		if (event.target.value.length === 136) {
			this.setState({
				height: 80,
			});
		}
		if (event.target.value.length === 272) {
			this.setState({
				height: 120,
			});
		}
		if (event.target.value.length === 408) {
			this.setState({
				height: 160,
			});
		}
	};

	render() {
		return (
			<div className='comment_form_wrapper'>
				<div className='comment_form'>
					<form>
						<div className='image_comment'>
							<div className='user_image'>
								<img
									src='https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png'
									alt='null'
								/>
							</div>
							<div
								className='comment_field'
								style={{ height: `${this.state.height}px` }}
							>
								<textarea
									name='content'
									placeholder='Add a comment...'
									required
									defaultValue={this.state.content}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						{this.state.showPostButton ? (
							<div className='submit_btn'>
								<button type='submit'>Post</button>
							</div>
						) : null}
					</form>
				</div>
			</div>
		);
	}
}

export default CommentForm;
