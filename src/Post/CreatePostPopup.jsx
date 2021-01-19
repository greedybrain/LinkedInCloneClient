import React, { Component } from "react";
import Icon from "../Common/Icon";
import UserImage from "../Common/UserImage";
import UserContext from "../Context/userContext";
import "../Styles/CreatePostPopup.css";
import axios from "../utils/axios_configs";

class CreatePostPopup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: "",
			avatar: "",
			buttonDisabled: true,
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const token = localStorage.getItem("token");
		const { content } = this.state;
		const { toggleCreatePostPopup } = this.context;
		const { addNewPost } = this.props;
		try {
			const { data } = await axios.post(
				"/posts",
				{
					content,
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			const { data: image } = await axios.post("/users/me/avatar", {
				avatar: this.state.avatar,
			});
			console.log(image);
			addNewPost(data);
			toggleCreatePostPopup();
		} catch (error) {
			console.log(error.message);
		}
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
		const { toggleCreatePostPopup, user } = this.context;
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
								<div className='name'>{user.name}</div>
								<div className='privacy'>
									<div className='label'>
										<Icon name='fas fa-globe-americas' />
										<span>Anyone</span>
									</div>
									<Icon name='fas fa-caret-down' />
								</div>
							</div>
						</div>
						<form onSubmit={this.handleSubmit}>
							<div className='body_post_area'>
								<div className='post_field'>
									<textarea
										name='content'
										placeholder='What do you want to talk about?'
										defaultValue={this.state.content}
										autoFocus
										onChange={this.handleChange}
										style={{ border: "1px solid red" }}
										rows={5}
									/>
								</div>
								<div className='uploaded_image'></div>
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
									<label htmlFor='image_upload'>
										<Icon name='far fa-image' />
									</label>
									<input
										type='file'
										name='avatar'
										value={this.state.image_url}
										id='image_upload'
										onChange={this.handleChange}
										hidden
									/>
									<Icon name='fab fa-youtube' />
									<Icon name='fas fa-file-alt' />
								</div>
								<div className='submit_btn'>
									<button type='submit'>Post</button>
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
