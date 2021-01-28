import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
	return (
		<div className='footer_wrapper'>
			<ul>
				<li className='f_item'>About</li>
				<li className='f_item'>Accessibility</li>
				<li className='f_item'>Help Center</li>
				<li className='f_item'>Privacy & Terms</li>
				<li className='f_item'>Ad Choices</li>
				<li className='f_item'>Advertising</li>
				<li className='f_item'>Business Services</li>
				<li className='f_item'>Get the LinkedIn app</li>
				<li className='f_item'>More</li>
			</ul>
			<p>
				LinkedIn <i className='fab fa-linkedin' />
				<span style={{ marginLeft: "5px" }}>
					LinkedIn Corporation &copy; 2021
				</span>
			</p>
		</div>
	);
};

export default Footer;
