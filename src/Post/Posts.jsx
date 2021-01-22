import React, { Fragment } from "react";
import Post from "./Post";

const Posts = ({
	allPosts,
	allLikes,
	deletePostAction,
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
							deletePostAction={deletePostAction}
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
