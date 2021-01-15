//! Core Modules
import React, { useContext } from "react";

//! Cutome Modules/ Components
import UserImage from "../Common/UserImage";
import "../Styles/UserTab.css";
import UserContext from "../Context/userContext";
import MePopup from "../MePopup";

const userImage = {
	imageWrapper: {
		width: "20px",
		image: {
			borderRadius: "50%",
		},
	},
};

const UserTab = () => {
	const context = useContext(UserContext);
	const { toggleMePopup, showMePopup, handlePopupLeave } = context;

	return (
		<div className='user_tab_wrapper' onClick={toggleMePopup}>
			<UserImage styles={userImage} />
			<div className='user_tab_lower'>
				<div className='me'>Me</div>
				<div className='drop_down_arrow'>&#9662;</div>
			</div>
			{showMePopup ? <MePopup handlePopupLeave={handlePopupLeave} /> : null}
		</div>
	);
};

export default UserTab;
