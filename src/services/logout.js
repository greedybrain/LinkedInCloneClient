import axios from "../utils/axios_configs";

const logoutService = async () => {
	try {
		await axios.post("/users/logout");
	} catch (error) {
		console.log(error.message);
	}
	localStorage.removeItem("token");
};

export default logoutService;
