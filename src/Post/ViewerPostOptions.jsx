import React, { Component } from "react";
import Icon from "../Common/Icon";
import "../Styles/ViewersPostOptions.css";

class ViewerPostOptions extends Component {
	render() {
		return (
			<div
				className='user_post_options_wrapper'
				onMouseLeave={this.props.handleUserOptionsLeave}
			>
				<div className='user_post_options'>
					<ul>
						<li className='post_option'>
							<Icon name='fas fa-bookmark' />
							<div className='label'>
								<div className='label_name'>Save</div>
								<div className='option_description'>Save for later</div>
							</div>
						</li>
						<li className='post_option'>
							<Icon name='fas fa-link' />
							<div className='label'>
								<div className='label_name'>Copy link to post</div>
							</div>
						</li>
						<li className='post_option'>
							<Icon name='fas fa-code' />
							<div className='label'>
								<div className='label_name'>Embed this post</div>
								<div className='option_description'>
									Copy and paste embed code on your site
								</div>
							</div>
						</li>
						<li className='post_option'>
							<Icon name='fas fa-eye-slash' />
							<div className='label'>
								<div className='label_name'>I don't want to see this</div>
								<div className='option_description'>
									Let us know why you don't want to see this post
								</div>
							</div>
						</li>
						<li className='post_option'>
							<Icon name='fas fa-flag' />
							<div className='label'>
								<div className='label_name'>Report this post</div>
								<div className='option_description'>
									This post is offensive or the account is hacked
								</div>
							</div>
						</li>
						<li className='post_option'>
							<Icon name='fas fa-eye' />
							<div className='label'>
								<div className='label_name'>Who can see this post?</div>
								<div className='option_description'>
									Visible to anyone on or off LinkedIn
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default ViewerPostOptions;
