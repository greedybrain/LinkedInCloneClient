import React, { Component } from "react";
import Icon from "../Common/Icon";
import UserImage from "../Common/UserImage";
import UserContext from "../Context/userContext";
import "../Styles/CreatePostPopup.css";
import addPostService from "../services/add_post";
import editPostService from "../services/edit_post";

class CreatePostPopup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: "",
			disabled: true,
		};
	}

	handleChange = (event) => {
		this.setState({
			content: event.target.value,
		});

		if (event.target.name === "content") {
			if (event.target.value.length > 0) {
				this.setState({ disabled: false });
			} else {
				this.setState({ disabled: true });
			}
		}
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const { content } = this.state;
		const { toggleCreatePostPopup } = this.context.actions;
		const { addPostAction } = this.props;

		const post = await addPostService(content);
		addPostAction(post);
		toggleCreatePostPopup();
	};

	handleEditSubmit = async (event) => {
		event.preventDefault();

		const { toggleCreatePostPopup } = this.context.actions;
		const { currentPost, editPostAction, setEditMode } = this.props;
		let { content } = currentPost;
		content = this.state.content;

		const data = await editPostService(this.context, currentPost, content);
		editPostAction(data.post);
		setEditMode(false);
		toggleCreatePostPopup();
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
		const { actions, get } = this.context;
		const { user, avatar } = get;
		const { toggleCreatePostPopup } = actions;
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
							<UserImage styles={userImage} avatar={avatar} />
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
						<form
							onSubmit={
								!this.props.inEditMode
									? this.handleSubmit
									: this.handleEditSubmit
							}
							encType='multipart/form-data'
						>
							<div className='body_post_area'>
								<div className='post_field'>
									<textarea
										name='content'
										placeholder='What do you want to talk about?'
										defaultValue={
											!this.props.inEditMode
												? this.state.content
												: this.props.currentPost.content
										}
										autoFocus
										onChange={this.handleChange}
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
									<button
										type='submit'
										disabled={this.state.disabled}
										style={
											this.state.disabled ? { cursor: "not-allowed" } : null
										}
									>
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
