import React, { Fragment } from "react";
import Post from "./Post";
import faker from "faker";

const Posts = ({
	allPosts,
	allLikes,
	deletePostAction,
	inEditMode,
	setEditMode,
	getCurrentPost,
	getAllPosts,
	getAllPostsAction,
}) => {
	return (
		<div className='all_posts'>
			{allPosts.map((post) => {
				return (
					<Fragment key={post._id}>
						<Post
							faker={faker}
							post={post}
							deletePostAction={deletePostAction}
							inEditMode={inEditMode}
							setEditMode={setEditMode}
							getCurrentPost={getCurrentPost}
							allLikes={allLikes}
							getAllPosts={getAllPosts}
							getAllPostsAction={getAllPostsAction}
						/>
					</Fragment>
				);
			})}
		</div>
	);
};

export default Posts;
