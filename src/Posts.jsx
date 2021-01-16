import React from "react";
import naya_willis from "./Images/naya_willis.jpg";
import Post from "./Post";

const Posts = () => {
	const postContent =
		" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nulla quasi molestiae, perferendis temporibus et! Quos obcaecati sint harum dignissimos inventore";
	const name = "Naya Willis";
	const headline = "Incoming Software Engineering Apprentice @Twitter";
	const created = "40m";

	const posts = [
		{
			naya_willis,
			name,
			headline,
			postContent,
			created,
		},
		{
			naya_willis,
			name,
			headline,
			postContent,
		},
		{
			naya_willis,
			name,
			headline,
			postContent,
		},
		{
			naya_willis,
			name,
			headline,
			postContent,
		},
	];
	const renderPosts = () => {
		return posts.map((post) => {
			return (
				<Post
					image={post.naya_willis}
					name={post.name}
					headline={post.headline}
					content={post.postContent}
					created={post.created}
				/>
			);
		});
	};

	return <div className='all_posts'>{renderPosts()}</div>;
};

export default Posts;
