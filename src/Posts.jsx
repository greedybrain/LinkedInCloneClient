import React, { useContext } from "react";
import UserContext from "./Context/userContext";
import Post from "./Post";
import moment from "moment";

const Posts = () => {
	const context = useContext(UserContext);
	const { allPosts } = context;
	const renderPosts = () => {
		return allPosts.map((post) => {
			return (
				<Post
					key={post._id}
					image={
						"https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
					}
					name={post.user.name}
					headline={post.user.headline}
					content={post.content}
					created={moment(post.createdAt).fromNow()}
				/>
			);
		});
	};

	return <div className='all_posts'>{renderPosts()}</div>;
};

export default Posts;
