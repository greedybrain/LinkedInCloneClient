//! Core Modules
import React, { Component } from "react";

//! NPM Modules
import { Link } from "react-router-dom";

//! Custom Modules
import "../Styles/Login.css";
import DivWithInput from "../Common/DivWithInput";
import Icon from "../Common/Icon";
import UserContext from "../Context/userContext";
import loginService from "../services/login";

class Login extends Component {
	state = {
		email: "",
		password: "",
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const user = this.state;
		const { loginAction } = this.context.actions;

		//! loginAction loads user to state, loginService sends login post request
		loginService(loginAction, user);
		this.props.history.replace("/feed");
	};

	render() {
		return (
			<div className='login_page_wrapper'>
				<div className='form_area_wrapper'>
					<div className='brand_name_wrapper'>
						<div className='brand_name'>
							<div className='brand'>Linked </div>
							<Icon name='fab fa-linkedin' />
						</div>
					</div>
					<div className='welcome_back_message_wrapper'>
						<div className='welcome_back_message'>
							<div className='message'>Welcome Back </div>
							<p>
								Don't miss your next opportunity. Sign in to stay updated on
								your professional world.
							</p>
						</div>
					</div>
					<form onSubmit={this.handleSubmit}>
						<DivWithInput
							specialClass='email_or_phone_field fields'
							inputType='text'
							inputName='email'
							inputPlaceholder='Email or Phone'
							inputValue={this.state.email}
							inputRequired={true}
							handleChange={this.handleChange}
							focus={true}
						/>
						<DivWithInput
							specialClass='password_field fields'
							inputType='password'
							inputName='password'
							inputPlaceholder='Password'
							inputValue={this.state.password}
							inputRequired={true}
							handleChange={this.handleChange}
						/>
						<div className='submit_btn'>
							<button type='submit'>Sign in</button>
						</div>
						<div className='forgot_password'>Forgot password?</div>
						<div className='if_new'>
							New to LinkedIn? <Link to='/signup'>Join now</Link>
						</div>
					</form>
				</div>
				<div className='login_footer'>
					<ul>
						<li className='brand_area'>
							<div className='brand_name'>
								<div className='brand'>Linked </div>
								<Icon name='fab fa-linkedin' />
							</div>
							<div className='copyright'>&copy; 2021</div>
						</li>
						<li>
							<Link to='#'>User Agreement</Link>
						</li>
						<li>
							<Link to='#'>Privacy Policy</Link>
						</li>
						<li>
							<Link to='#'>Community Guidelines</Link>
						</li>
						<li>
							<Link to='#'>Cookie Policy</Link>
						</li>
						<li>
							<Link to='#'>Copyright Policy</Link>
						</li>
						<li>
							<Link to='#'>Send Feedback</Link>
						</li>
						<li>
							<Link to='#'>Language</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

Login.contextType = UserContext;

export default Login;
