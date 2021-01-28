import React, { Component } from "react";
import Icon from "../Common/Icon";
import UserContext from "../Context/userContext";
import "../Styles/WhoLiked.css";
import faker from "faker";

class WhoLiked extends Component {
	getUsersWhoLiked = () => {
		const usersIds = this.props.post.likes.map((like) => like.user);
		const { allUsers } = this.context.get;
		const usersWhoLiked = [];
		allUsers.forEach((user) => {
			if (usersIds.includes(user._id)) {
				usersWhoLiked.push(user);
			}
		});
		return usersWhoLiked;
	};
	render() {
		const { post, setShowLikes } = this.props;
		return (
			<div className='who_liked_wrapper'>
				<div className='who_liked'>
					<div className='header'>
						<div className='label'>Reactions</div>
						<div onClick={() => setShowLikes(false)}>
							<Icon name='fas fa-times' />
						</div>
					</div>
					<div className='meta_data'>
						<div className='data'>
							<Icon name='fas fa-thumbs-up' />
							<div className='like_amt'>{post.likes.length}</div>
						</div>
					</div>
					<div className='body'>
						<ul>
							{this.getUsersWhoLiked().map((user) => {
								return (
									<li key={user._id}>
										<div className='user_image'>
											<img src={faker.random.image()} alt='null' />
											<Icon name='fas fa-thumbs-up' />
										</div>
										<div className='name_headline'>
											<div className='name'>{user.name}</div>
											<div className='headline'>{user.headline}</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

WhoLiked.contextType = UserContext;

export default WhoLiked;
