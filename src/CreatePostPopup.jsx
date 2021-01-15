import React, { Component } from "react";
import Icon from "./Common/Icon";
import UserImage from "./Common/UserImage";
import UserContext from "./Context/userContext";
import "./Styles/CreatePostPopup.css";

class CreatePostPopup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: "",
			buttonDisabled: true,
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
		const { content } = this.state;
		if (content.length === 0) this.setState({ buttonDisabled: true });
		if (content.length > 0) this.setState({ buttonDisabled: false });
	};

	render() {
		const userImage = {
			imageWrapper: {
				width: "40px",
				image: {
					borderRadius: "50%",
				},
			},
		};
		const { toggleCreatePostPopup } = this.context;
		return (
			<div className='create_post_popup animate__animated animate__fadeIn animate__faster'>
				<div className='create_post_popup_wrapper'>
					<div className='create_post_popup_header'>
						<div className='label'>Create Post</div>
						<div className='close' onClick={toggleCreatePostPopup}>
							<Icon name='fas fa-times' />
						</div>
					</div>
					<div className='body'>
						<div className='body_head'>
							<UserImage styles={userImage} />
							<div className='name_and_privacy'>
								<div className='name'>Naya Willis</div>
								<div className='privacy'>
									<div className='label'>
										<Icon name='fas fa-globe-americas' />
										<span>Anyone</span>
									</div>
									<Icon name='fas fa-caret-down' />
								</div>
							</div>
						</div>
						<form>
							<div className='body_post_area'>
								<div className='post_field'>
									<textarea
										name='content'
										placeholder='What do you want to talk about?'
										defaultValue={this.state.content}
										autoFocus
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className='add_hash_tags'>
								<ul>
									<li>Add hashtag</li>
									<li>#rails</li>
									<li>#devcommunity</li>
									<li>#programming</li>
									<li>{" > "}</li>
								</ul>
							</div>
							<div className='body_footer'>
								<div className='extras'>
									<Icon name='fas fa-plus' />
									<Icon name='far fa-image' />
									<Icon name='fab fa-youtube' />
									<Icon name='fas fa-file-alt' />
								</div>
								<div className='submit_btn'>
									<button type='submit' disabled={this.state.buttonDisabled}>
										Post
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

CreatePostPopup.contextType = UserContext;

export default CreatePostPopup;
