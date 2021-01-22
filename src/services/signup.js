import axios from "../utils/axios_configs";

const signupService = async (signupAction, user) => {
	try {
		const { data } = await axios.post("/users",  user);
		if (data.user) signupAction(data.user);
		localStorage.setItem("token", data.tokenValue);
	} catch (error) {
		console.log(error.message);
	}
};

export default signupService;
