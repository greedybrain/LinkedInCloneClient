//! Core Modules
import React, { Component } from "react";

//! NPM Modules
import { Link } from "react-router-dom";

//! Custom Modules
import UserContext from "../Context/userContext";
import "../Styles/MePopup.css";

class MePopup extends Component {
	render() {
		const { get, actions } = this.context;
		const { user } = get;
		const { logoutAction, handlePopupLeave } = actions;

		return (
			<div
				className='me_popup_wrapper animate__animated animate__fadeIn animate__faster'
				onMouseLeave={handlePopupLeave}
			>
				<div className='popup_header'>
					<div className='image_wrapper'>
						<img
							src={
								"https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
							}
							alt='naya willis'
						/>
					</div>
					<div className='name_and_headline'>
						<div className='name'>{user.name}</div>
						<div className='headline'>{user.headline}</div>
					</div>
				</div>
				<div className='view_profile_btn'>
					<button>View Profile</button>
				</div>
				<div className='popup_body_a'>
					<h4>Account</h4>
					<ul>
						<li>
							<Link to='#'>Settings & Privacy</Link>
						</li>
						<li>
							<Link to='#'>Help</Link>
						</li>
						<li>
							<Link to='#'>Language</Link>
						</li>
					</ul>
				</div>
				<div className='popup_body_b'>
					<h4>Manage</h4>
					<ul>
						<li>
							<Link to='#'>Posts & Activity</Link>
						</li>
						<li>
							<Link to='#'>Job Posting Account</Link>
						</li>
					</ul>
				</div>
				<div className='popup_footer'>
					<Link to='#' onClick={logoutAction}>
						Sign Out
					</Link>
				</div>
			</div>
		);
	}
}

MePopup.contextType = UserContext;

export default MePopup;
