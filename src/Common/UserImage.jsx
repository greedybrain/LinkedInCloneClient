//! Core Modules
import React from "react";

//! Cutom Modules/ Components

const UserImage = ({ styles, avatar }) => {
	return (
		<div className='image_wrapper' style={styles.imageWrapper}>
			<img src={avatar} alt='user avatar' style={styles.imageWrapper.image} />
		</div>
	);
};

export default UserImage;
