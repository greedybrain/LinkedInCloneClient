import React, { Component } from "react";
import "../Styles/CommentForm.css";
import axios from "../utils/axios_configs";
import faker from "faker";

class CommentForm extends Component {
	state = {
		content: "",
		height: 40,
		showPostButton: false,
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
		if (event.target.value.length === 0)
			this.setState({ showPostButton: false });
		if (event.target.value.length > 0) {
			this.setState({
				showPostButton: true,
			});
		} else {
			this.setState({
				height: 40,
				showPostButton: false,
			});
		}
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const { post, setDidComment } = this.props;
		const { content } = this.state;
		const { token } = localStorage;
		try {
			const { data } = await axios.post(
				`/comments/${post._id}`,
				{ content },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			console.log(data);
		} catch (error) {
			console.log(error.message);
		}
		setDidComment(true);
		setTimeout(() => {
			setDidComment(false);
		}, 500);
		event.target.reset();
		this.setState({
			content: "",
		});
	};

	render() {
		return (
			<div className='comment_form_wrapper'>
				<div className='comment_form'>
					<form onSubmit={this.handleSubmit}>
						<div className='image_comment'>
							<div className='user_image'>
								<img src={faker.random.image()} alt='null' />
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
									rows='1'
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
