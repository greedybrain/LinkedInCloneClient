import axios from "../utils/axios_configs";

const editPostService = async (context, currPost, newContent) => {
	const { user } = context.get;
	if (currPost.user._id !== user._id)
		return console.log("This post does not belong to you");
	let { content } = currPost;
	content = newContent;
	const token = localStorage.getItem("token");
	if (!token) return;
	try {
		const { data } = await axios.patch(
			`/posts/${currPost._id}`,
			{
				content,
			},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default editPostService;
