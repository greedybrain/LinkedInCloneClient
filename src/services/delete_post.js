import axios from "../utils/axios_configs";

const deletePostService = async (context, currPost) => {
	const { user } = context.get;
	if (currPost.user._id !== user._id)
		return console.log("This post does not belong to you");
	const token = localStorage.getItem("token");
	if (!token) return;
	try {
		const { data } = await axios.delete(`/posts/${currPost._id}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return data;
	} catch (error) {
		console.log(error.message);
	}
};

export default deletePostService;
