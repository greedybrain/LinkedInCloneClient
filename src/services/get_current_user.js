import axios from "../utils/axios_configs";

const getCurrentUserService = async () => {
	const token = localStorage.getItem("token");
	if (!token) return;
	try {
		const { data } = await axios("/users/me", {
			headers: { Authorization: `Bearer ${token}` },
		});
		if (!data.data._id) return;
		return data;
	} catch (error) {
		console.log(error.message);
	}
};

export default getCurrentUserService;
