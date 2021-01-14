import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../Common/Icon";
import "../Styles/HomeLeftUserActivity.css";

class HomeLeftUserActivity extends Component {
	render() {
		return (
			<div className='home_left_user_activity_wrapper'>
				<ul>
					<li>Recent</li>
					<li>
						<Link to='#'>Groups</Link>
					</li>
					<li className='events_level'>
						<div>
							<Link to='#'>Events</Link>
						</div>
						<Icon name='fas fa-plus' />
					</li>
					<li>
						<Link to='#'>Followed Hashtags</Link>
					</li>
				</ul>
				<div className='discover_more'>Discover more</div>
			</div>
		);
	}
}

export default HomeLeftUserActivity;
