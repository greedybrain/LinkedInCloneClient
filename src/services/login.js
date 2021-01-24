import axios from "../utils/axios_configs";

const loginService = async (loginAction, user) => {
	try {
		const { data } = await axios.post("/users/login", user);

		if (data.user) loginAction(data.user);
		localStorage.setItem("token", data.tokenValue);
	} catch (error) {
		console.log(error.message);
	}
};

export default loginService;
