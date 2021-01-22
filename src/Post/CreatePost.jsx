import React, { Component } from "react";
import PostFormToggler from "./PostFormToggler";
import Icon from "../Common/Icon";
import "../Styles/CreatePost.css";

export default class CreatePost extends Component {
	render() {
		return (
			<div className='create_post_wrapper'>
				<PostFormToggler />
				<ul>
					<li className="image">
						<Icon name='far fa-image' />
						<div className='label'>Photo</div>
					</li>
					<li className="video">
						<Icon name='fab fa-youtube' />
						<div className='label'>Video</div>
					</li>
					<li className="event">
						<Icon name='far fa-calendar-alt' />
						<div className='label'>Event</div>
					</li>
					<li className="article">
						<Icon name='far fa-newspaper' />
						<div className='label'>Write article</div>
					</li>
				</ul>
			</div>
		);
	}
}
