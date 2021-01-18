//! Core Modules
import React from "react";

//! Cutome Modules/ Components

const UserImage = ({ styles }) => {
	return (
		<div className='image_wrapper' style={styles.imageWrapper}>
			<img
				src={
					"https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
				}
				alt='user avatar'
				style={styles.imageWrapper.image}
			/>
		</div>
	);
};

export default UserImage;
