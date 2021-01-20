import React from "react";
import Icon from "../Common/Icon";
import "../Styles/MostViewedCourses.css";

const MostViewedCourses = () => {
	return (
		<div className='most_viewed_courses_wrapper'>
			<div className='most_viewed_courses'>
				<div className='title_and_info'>
					<h5 className='title'>Today's most viewed courses</h5>
					<Icon name='fas fa-info-circle' />
				</div>
				<ul>
					<li className='topic'>
						<h5 className='title'>The Six Morning Habits of High Per...</h5>
						<div className='time_and_readers'>
							Pete Mockaitis | How to Be Awesome at Y...
						</div>
					</li>
					<li className='topic'>
						<h5 className='title'>Critical Thinking for Better Judm...</h5>
						<div className='time_and_readers'>Becki Saltzman</div>
					</li>
					<li className='topic'>
						<h5 className='title'>Unconscious Bias</h5>
						<div className='time_and_readers'>Stacey Gordon</div>
					</li>
				</ul>
				<div className='special_report'>
					<div className='report'>
						<div className='special'>Show more on LinkedIn Learning</div>
						<Icon name='fas fa-long-arrow-alt-right' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MostViewedCourses;
