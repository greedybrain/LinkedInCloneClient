import React from "react";
import Icon from "../Common/Icon";
import "../Styles/LinkedInNews.css";

const LinkedInNews = () => {
	return (
		<div className='linked_in_news_wrapper'>
			<div className='linked_in_news'>
				<div className='title_and_info'>
					<h5 className='title'>LinkedIn News</h5>
					<Icon name='fas fa-info-circle' />
				</div>
				<ul>
					<li className='topic'>
						<h5 className='title'>COVID deaths approach 400,000 in ...</h5>
						<div className='time_and_readers'>1h ago • 12,086 readers</div>
					</li>
					<li className='topic'>
						<h5 className='title'>Snapchat pays big to take on TikTok</h5>
						<div className='time_and_readers'>1h ago • 12,086 readers</div>
					</li>
					<li className='topic'>
						<h5 className='title'>Peloton's now an exercise in patience</h5>
						<div className='time_and_readers'></div>
					</li>
					<li className='topic'>
						<h5 className='title'>Kids to face 'epic' tech withdrawal</h5>
						<div className='time_and_readers'>1h ago • 12,086 readers</div>
					</li>
					<li className='topic'>
						<h5 className='title'>Expat life may be within your grasp</h5>
						<div className='time_and_readers'>1h ago • 12,086 readers</div>
					</li>
				</ul>
				<div className='special_report'>
					<div className='report'>
						<div className='special'>Special Report: The Road Ahead</div>
						<Icon name='fas fa-long-arrow-alt-right' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LinkedInNews;
