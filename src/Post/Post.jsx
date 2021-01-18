import React from "react";
import Icon from "../Common/Icon";
import "../Styles/Post.css";
import moment from "moment";

const Post = ({ image, post }) => {
	const handleClickTest = () => {
		alert(post._id);
	};
	return (
		<div className='post_wrapper animate__animated animate__zoomIn animate__faster'>
			<div className='post'>
				<div className='post_header'>
					<div className='header_left'>
						<div className='image_wrapper'>
							<img src={image} alt='profile' />
						</div>
					</div>
					<div className='header_right'>
						<div className='name_headline_time'>
							<div className='name_ellipsis'>
								<div className='name'>{post.user.name}</div>
								<div className='ellipsis' onClick={handleClickTest}>
									<div className='ellipsis_1 ell'>•</div>
									<div className='ellipsis_2 ell'>•</div>
									<div className='ellipsis_3 ell'>•</div>
								</div>
							</div>
							<div className='headline'>{post.user.headline}</div>
							<div className='time_access'>
								<div className='time'>{moment(post.createdAt).fromNow()}</div>
								<div className='ell'>•</div>
								<Icon name='fas fa-globe-americas' />
							</div>
						</div>
					</div>
				</div>
				<div className='post_body'>
					<div className='content'>{post.content}</div>
					<div className='comment_meta_data'>0 • Comments</div>
				</div>
				<div className='post_footer'>
					<div className='like_label meta'>
						<Icon name='far fa-thumbs-up like icon' />
						<div className='label'>Like</div>
					</div>
					<div className='comment_label meta'>
						<Icon name='far fa-comment-dots comment icon' />
						<div className='label'>Comment</div>
					</div>
					<div className='share_label meta'>
						<Icon name='fas fa-share icon' />
						<div className='label'>Share</div>
					</div>
					<div className='send_label meta'>
						<Icon name='fas fa-paper-plane icon' />
						<div className='label'>Send</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
