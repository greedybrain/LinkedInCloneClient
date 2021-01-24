import axios from "../utils/axios_configs";

const getAllUsersService = async () => {
	const token = localStorage.getItem("token");
	if (!token) return;
	try {
		const { data } = await axios("/users", {
			headers: { Authorization: `Bearer ${token}` },
		});
		return data;
	} catch (error) {
		console.log(error.message);
	}
};

export default getAllUsersService;
