//! Core Modules
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//! Custom Modules/ Components
import Icon from "../Common/Icon";
import UserContext from "../Context/userContext";
import coverImage from "../Images/cover_image.jpeg";
import "../Styles/HomeLeftUserInfo.css";

const HomeLeftUserInfo = () => {
	const { user, avatar } = useContext(UserContext).get;

	return (
		<div className='home_left_user_info_wrapper'>
			<div className='cover_image_wrapper'>
				<img src={coverImage} alt='cover pic' />
			</div>
			<div className='user_image_wrapper'>
				<img src={avatar} alt='naya willis' />
			</div>
			<div className='user_name'>
				<Link to='#'>{user.name}</Link>
			</div>
			<div className='user_headline'>{user.headline}</div>
			<div className='views'>
				<div className='profile'>
					<div className='part_a'>Who viewed your profile</div>
					<div className='part_b'>1,278</div>
				</div>
				<div className='post_views'>
					<div className='part_a'>Views of your post</div>
					<div className='part_b'>440</div>
				</div>
			</div>
			<div className='tools'>
				<div className='access'>Access exclusive tools & insights</div>
				<div className='prem'>
					<Icon name='fas fa-square' />
					<div className='reactivate'>Reactivate Premium</div>
				</div>
			</div>
			<div className='my_items'>
				<Icon name='fas fa-bookmark' />
				<div className='label'>My items</div>
			</div>
		</div>
	);
};

export default HomeLeftUserInfo;
