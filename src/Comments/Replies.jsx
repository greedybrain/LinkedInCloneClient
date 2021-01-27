import React, { Component } from "react";
import Reply from "./Reply";
import "../Styles/Replies.css";

class Replies extends Component {
	render() {
		const {
			post,
			replies,
			handleUserCommentOptionsLeave,
			toggleUserCommentOptions,
		} = this.props;
		return (
			<div className='replies_section_wrapper'>
				{/* <div className='sort_options'>Most relevant</div> */}
				<div className='replies_section'>
					<ul>
						{replies.reverse().map((reply) => {
							return (
								<Reply
									key={reply._id}
									reply={reply}
									post={post}
									handleUserCommentOptionsLeave={handleUserCommentOptionsLeave}
									toggleUserCommentOptions={toggleUserCommentOptions}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default Replies;
