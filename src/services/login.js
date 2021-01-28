import axios from "../utils/axios_configs";

const loginService = async (dispatch, user) => {
	try {
		const { data } = await axios.post("/users/login", user);

		if (data.user) dispatch(data.user);
		localStorage.setItem("token", data.tokenValue);
	} catch (error) {
		console.log(error.message);
	}
};

export default loginService;
