import React, { Component } from "react";
import "./Styles/MePopup.css";
import naya_willis from "./Images/naya_willis.jpg";

class MePopup extends Component {
	render() {
		return (
			<div className='me_popup_wrapper'>
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
                                <div className="view_profile_btn">
                                        <button>
                                                View Profile
                                        </button>
                                </div>
			</div>
		);
	}
}

export default MePopup;
