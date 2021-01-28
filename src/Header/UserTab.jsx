//! Core Modules
import React, { useContext } from "react";

//! Cutome Modules/ Components
import UserImage from "../Common/UserImage";
import MePopup from "../Header/MePopup";
import UserContext from "../Context/userContext";
import "../Styles/UserTab.css";

const userImage = {
	imageWrapper: {
		width: "20px",
		image: {
			borderRadius: "50%",
		},
	},
};

const UserTab = () => {
	const { actions, get } = useContext(UserContext);
	const { showMePopup, avatar } = get;
	const { toggleMePopup, handlePopupLeave } = actions;

	return (
		<div className='user_tab_wrapper' onClick={toggleMePopup}>
			<UserImage styles={userImage} avatar={avatar} />
			<div className='user_tab_lower'>
				<div className='me'>Me</div>
				<div className='drop_down_arrow'>&#9662;</div>
			</div>
			{showMePopup ? <MePopup handlePopupLeave={handlePopupLeave} /> : null}
		</div>
	);
};


export default UserTab;
