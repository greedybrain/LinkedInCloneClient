import axios from "../utils/axios_configs";

const { token } = localStorage;

export const likePostService = async (post) => {
	if (!token) return;
	try {
		const { data } = await axios.post(
			`/likes/${post._id}`,
			{ foo: null },
			{ headers: { Authorization: `Bearer ${token}` } }
		);
		return data;
	} catch (error) {
		console.log(error.message);
	}
};

export const unlikePostService = async (post) => {
	if (!token) return;
	try {
		const { data } = await axios.delete(`/likes/${post._id}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return data;
	} catch (error) {
		console.log(error.message);
	}
};
