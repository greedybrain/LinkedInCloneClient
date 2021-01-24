import React, { Component } from "react";
import Comment from "./Comment";
import "../Styles/CommentSection.css";
class CommentSection extends Component {
	render() {
		const { post } = this.props;
		return (
			<div className='comment_section_wrapper'>
				{/* <div className='sort_options'>Most relevant</div> */}
				<div className='comment_section'>
					<ul>
						{post.comments.reverse().map((comment) => {
							console.log(comment);
							return (
								<Comment key={comment._id} post={post} comment={comment} />
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default CommentSection;
