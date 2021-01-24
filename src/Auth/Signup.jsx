import React, { Component } from "react";
import { Link } from "react-router-dom";
import DivWithInput from "../Common/DivWithInput";
import Icon from "../Common/Icon";
import "../Styles/Signup.css";
import UserContext from "../Context/userContext";
import signupService from "../services/signup";

class Signup extends Component {
	state = {
		name: "",
		email: "",
		password: "",
		headline: "",
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const user = this.state;
		const { signupAction } = this.context.actions;

		//! signupAction loads user to state, signupService sends signup post request
		signupService(signupAction, user);
		this.props.history.replace("/feed");
	};

	render() {
		const { name, email, password, headline } = this.state;
		return (
			<div className='signup_page_wrapper'>
				<div className='form_area_wrapper'>
					<div className='brand_name_wrapper'>
						<div className='brand_name'>
							<div className='brand'>Linked </div>
							<Icon name='fab fa-linkedin' />
						</div>
					</div>
					<div className='tagline_wrapper'>
						<p>Make the most of your professional life</p>
					</div>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor='name'>Name</label>
						<DivWithInput
							specialClass='name_field fields'
							inputType='text'
							inputName='name'
							inputValue={name}
							inputRequired={true}
							handleChange={this.handleChange}
							focus={true}
						/>
						<label htmlFor='email'>Email</label>
						<DivWithInput
							specialClass='email_field fields'
							inputType='text'
							inputName='email'
							inputValue={email}
							inputRequired={true}
							handleChange={this.handleChange}
						/>
						<label htmlFor='headline'>Headline</label>
						<DivWithInput
							specialClass='headline_field fields'
							inputType='text'
							inputName='headline'
							inputValue={headline}
							inputRequired={true}
							handleChange={this.handleChange}
						/>
						<label htmlFor='password'>Password (6 or more characters)</label>
						<DivWithInput
							specialClass='password_field fields'
							inputType='password'
							inputName='password'
							inputValue={password}
							inputRequired={true}
							handleChange={this.handleChange}
						/>

						<div className='disclaimer_field'>
							By clicking Agree & Join, you agree to the LinkedIn{" "}
							<Link to='#'>User Agreement</Link>,{" "}
							<Link to='#'>User Agreement</Link> and{" "}
							<Link to='#'>Cookie Policy</Link>.
						</div>
						<div className='submit_btn'>
							<button type='submit'>Agree & Join</button>
						</div>
						<div className='other'>
							<div className='line1'>
								<hr />
							</div>
							<div className='or'>or</div>
							<div className='line2'>
								<hr />
							</div>
						</div>
						<div className='omni_btn resume'>
							<button type='submit'>
								<Icon name='far fa-file-alt' />
								<div className='btn_name'>Join with resume</div>
							</button>
						</div>
						<div className='omni_btn google'>
							<button type='submit'>
								<Icon name='fab fa-google' />
								<div className='btn_name'>Join with Google</div>
							</button>
						</div>
						<div className='if_new'>
							Already on LinkedIn? <Link to='/login'>Sign in</Link>
						</div>
					</form>
				</div>
				<div className='signup_footer'>
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

Signup.contextType = UserContext;

export default Signup;
