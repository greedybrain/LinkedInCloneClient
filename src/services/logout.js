import axios from "../utils/axios_configs";

const logoutService = async () => {
	const { token } = localStorage;
	try {
		await axios.post(
			"/users/logout",
			{ foo: null },
			{ headers: { Authorization: `Bearer ${token}` } }
		);
	} catch (error) {
		console.log(error.message);
	}
	
};

export default logoutService;
