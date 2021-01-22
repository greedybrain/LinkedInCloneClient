import axios from "../utils/axios_configs";

const addPostService = async (content) => {
        const token = localStorage.getItem("token");
        if(!token) return
	try {
		const { data } = await axios.post(
			"/posts",
			{
				content,
			},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
                );
                return data
	} catch (error) {
		console.log(error.message);
	}
};

export default addPostService
