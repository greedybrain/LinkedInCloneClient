import React from "react";
import Post from "./Post";

const Posts = ({
	allPosts,
	deletePost,
	editPost,
	inEditMode,
	setEditMode,
	getCurrentPost,
}) => {
	return (
		<div className='all_posts'>
			{allPosts.map((post) => {
				return (
					<Post
						key={post._id}
						image={
							"https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
						}
						post={post}
						deletePost={deletePost}
						inEditMode={inEditMode}
						setEditMode={setEditMode}
						getCurrentPost={getCurrentPost}
					/>
				);
			})}
		</div>
	);
};

export default Posts;
