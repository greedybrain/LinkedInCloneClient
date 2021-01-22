//! Core Modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

//! Custom Modules / Components
import Icon from "../Common/Icon";
import TryPremium from "./TryPremium";
import UserTab from "./UserTab";
import WorkTab from "./WorkTab";
import "../Styles/Navbar.css";
class Navbar extends Component {
	state = {
		homeClicked: true,
		networkClicked: false,
		jobsClicked: false,
		messagesClicked: false,
		notificationsClicked: false,
	};

	networkTabStyles = {
		transform: "rotateY(180deg)",
	};

	notificationsTabStyles = {
		transform: "rotate(15deg)",
	};

	handleNavItemClick = (bool1, bool2, bool3, bool4, bool5) => {
		this.setState({
			homeClicked: bool1,
			networkClicked: bool2,
			jobsClicked: bool3,
			messagesClicked: bool4,
			notificationsClicked: bool5,
		});
	};

	handleHomeClick = () =>
		this.handleNavItemClick(true, false, false, false, false);
	handleNetworkClick = () =>
		this.handleNavItemClick(false, true, false, false, false);
	handleJobsClick = () =>
		this.handleNavItemClick(false, false, true, false, false);
	handleMessagesClick = () =>
		this.handleNavItemClick(false, false, false, true, false);
	handleNotificationsClick = () =>
		this.handleNavItemClick(false, false, false, false, true);

	render() {
		const {
			homeClicked,
			networkClicked,
			jobsClicked,
			messagesClicked,
			notificationsClicked,
		} = this.state;
		return (
			<nav className='main_nav'>
				<ul>
					<NavLink
						to='/feed'
						onClick={this.handleHomeClick}
						style={homeClicked ? { color: "#000" } : null}
					>
						<li
							className='nav_item home_icon'
							style={homeClicked ? { borderBottom: "2px solid #000" } : null}
						>
							{homeClicked ? (
								<Icon name='fas fa-house-user' />
							) : (
								<Icon name='fas fa-home' />
							)}
							<div className='nav_item_name'>Home</div>
						</li>
					</NavLink>
					<NavLink
						to='/my_network'
						onClick={this.handleNetworkClick}
						style={networkClicked ? { color: "#000" } : null}
					>
						<li
							className='nav_item network_icon'
							style={networkClicked ? { borderBottom: "2px solid #000" } : null}
						>
							{networkClicked ? (
								<Icon
									name='fas fa-user-friends'
									theseStyles={this.networkTabStyles}
								/>
							) : (
								<Icon name='fas fa-user-friends' />
							)}
							<div className='nav_item_name'>My Network</div>
						</li>
					</NavLink>
					<NavLink
						to='/jobs'
						onClick={this.handleJobsClick}
						style={jobsClicked ? { color: "#000" } : null}
					>
						<li
							className='nav_item jobs_icon'
							style={jobsClicked ? { borderBottom: "2px solid #000" } : null}
						>
							{jobsClicked ? (
								<Icon name='fas fa-business-time' />
							) : (
								<Icon name='fas fa-briefcase' />
							)}
							<div className='nav_item_name'>Jobs</div>
						</li>
					</NavLink>
					<NavLink
						to='/messaging'
						onClick={this.handleMessagesClick}
						style={messagesClicked ? { color: "#000" } : null}
					>
						<li
							className='nav_item messaging_icon'
							style={
								messagesClicked ? { borderBottom: "2px solid #000" } : null
							}
						>
							{messagesClicked ? (
								<Icon name='fas fa-comments' />
							) : (
								<Icon name='fas fa-comment-dots' />
							)}
							<div className='nav_item_name'>Messaging</div>
						</li>
					</NavLink>
					<NavLink
						to='/notifications'
						onClick={this.handleNotificationsClick}
						style={notificationsClicked ? { color: "#000" } : null}
					>
						<li
							className='nav_item notifications_icon'
							style={
								notificationsClicked ? { borderBottom: "2px solid #000" } : null
							}
						>
							{notificationsClicked ? (
								<Icon
									name='fas fa-bell'
									theseStyles={this.notificationsTabStyles}
								/>
							) : (
								<Icon name='fas fa-bell' />
							)}
							<div className='nav_item_name'>Notifications</div>
						</li>
					</NavLink>
					<NavLink to='#'>
						<li className='nav_item user_tab'>
							<UserTab />
						</li>
					</NavLink>
					<NavLink to='#'>
						<li className='nav_item work_tab'>
							<WorkTab />
						</li>
					</NavLink>
					<NavLink to='#'>
						<li className='nav_item try_premium_tab'>
							<TryPremium />
						</li>
					</NavLink>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
