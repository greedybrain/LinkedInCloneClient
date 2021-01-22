import React, { Fragment, useState } from "react";
import Post from "./Post";
import WhoLiked from "./WhoLiked";

const Posts = ({
	allPosts,
	allLikes,
	deletePost,
	inEditMode,
	setEditMode,
	getCurrentPost,
	getAllPosts,
}) => {

	return (
		<div className='all_posts'>
			{allPosts.map((post) => {
				return (
					<Fragment key={post._id}>
						<Post
							image={
								"https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
							}
							post={post}
							deletePost={deletePost}
							inEditMode={inEditMode}
							setEditMode={setEditMode}
							getCurrentPost={getCurrentPost}
							allLikes={allLikes}
							getAllPosts={getAllPosts}
						/>
					</Fragment>
				);
			})}
		</div>
	);
};

export default Posts;
