import React, { Component } from "react";
import axios from "../utils/axios_configs";
import "../Styles/ReplyForm.css";

class ReplyForm extends Component {
	state = {
		content: "",
		height: 40,
		showReplyButton: false,
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
		if (event.target.value.length > 0) {
			this.setState({
				showReplyButton: true,
			});
		} else {
			this.setState({
				height: 40,
				showReplyButton: false,
			});
		}
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const { post, setDidReply, comment, toggleReplyForm } = this.props;
		const { content } = this.state;
		const { token } = localStorage;
		if (!token) return console.log("Please login");
		try {
			const { data } = await axios.post(
				`/replies/${comment._id}/post/${post._id}`,
				{ content },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			console.log(data);
		} catch (error) {
			console.log(error.message);
		}
		setDidReply(true);
		setTimeout(() => {
			setDidReply(false);
		}, 500);
		event.target.reset();
		this.setState({
			content: "",
		});
		toggleReplyForm();
	};

	render() {
		const { getCommentUser } = this.props;
		return (
			<div className='reply_form_wrapper'>
				<div className='reply_form'>
					<form onSubmit={this.handleSubmit}>
						<div className='image_reply'>
							<div className='user_image'>
								<img
									src='https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png'
									alt='null'
								/>
							</div>
							<div
								className='reply_field'
								style={{
									height: `${this.state.height}px`,
									position: "relative",
									display: "inline-block",
								}}
							>
								<textarea
									name='content'
									required
									placeholder={`@${getCommentUser().name}`}
									onChange={this.handleChange}
									rows='1'
								/>
								<span
									className='replying_to'
									style={{
										position: "absolute",
										top: "9px",
										left: "10px",
										color: "#0a66c2",
									}}
								></span>
							</div>
						</div>
						{this.state.showReplyButton ? (
							<div className='submit_btn'>
								<button type='submit'>Reply</button>
							</div>
						) : null}
					</form>
				</div>
			</div>
		);
	}
}

export default ReplyForm;
