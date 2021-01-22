//! Core Modules
//! Core Modules
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//! Custom Modules/ Components
import Icon from "../Common/Icon";
import UserContext from "../Context/userContext";
import coverImage from "../Images/cover_image.jpeg";
import "../Styles/HomeLeftUserInfo.css";
import axios from "../utils/axios_configs";

const HomeLeftUserInfo = () => {
	const { get } = useContext(UserContext);
	const { user } = get;
	const [avatar, setAvatar] = useState(null);

	const handleChange = async (event) => {
		setAvatar(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const token = localStorage.getItem("token");
		const { data } = await axios.post(
			"/users/me/avatar",
			{
				avatar,
			},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		setAvatar(data);
		console.log(data);
	};

	return (
		<div className='home_left_user_info_wrapper'>
			<div className='cover_image_wrapper'>
				<img src={coverImage} alt='cover pic' />
			</div>
			<div className='user_image_wrapper'>
				<form onSubmit={handleSubmit}>
					<label htmlFor='my_avatar'>
						<img
							src={
								"https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
							}
							alt='naya willis'
						/>
					</label>
					<input
						type='file'
						id='my_avatar'
						name='avatar'
						onChange={handleChange}
						hidden
					/>
					{/* <button type='submit'>Upload</button> */}
				</form>
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
