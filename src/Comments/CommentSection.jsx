import React, { Component } from "react";
import Comment from "./Comment";
import "../Styles/CommentSection.css";
class CommentSection extends Component {
	render() {
		const {
			post,
			handleUserCommentOptionsLeave,
			toggleUserCommentOptions,
			setDidReply,
		} = this.props;
		return (
			<div className='comment_section_wrapper'>
				{/* <div className='sort_options'>Most relevant</div> */}
				<div className='comment_section'>
					<ul>
						{post.comments.reverse().map((comment) => {
							return (
								<Comment
									key={comment._id}
									post={post}
									comment={comment}
									handleUserCommentOptionsLeave={handleUserCommentOptionsLeave}
									toggleUserCommentOptions={toggleUserCommentOptions}
									setDidReply={setDidReply}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default CommentSection;
