import React, { Component } from "react";
import naya_willis from "./Images/naya_willis.jpg";
import { Link } from "react-router-dom";
import UserContext from "./Context/userContext";
import "./Styles/MePopup.css";

class MePopup extends Component {
	render() {
		const { handlePopupLeave } = this.props;
		const { logoutUser } = this.context;
		return (
			<div
				className='me_popup_wrapper animate__animated animate__fadeIn animate__faster'
				onMouseLeave={handlePopupLeave}
			>
				<div className='popup_header'>
					<div className='image_wrapper'>
						<img src={naya_willis} alt='naya willis' />
					</div>
					<div className='name_and_headline'>
						<div className='name'>Naya Willis</div>
						<div className='headline'>
							Incoming Software Engineer Apprentice @Twitter
						</div>
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
					<Link to='#' onClick={logoutUser}>
						Sign Out
					</Link>
				</div>
			</div>
		);
	}
}

MePopup.contextType = UserContext;

export default MePopup;
