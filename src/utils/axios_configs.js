import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.headers.common = { Authorization: `bearer ${token}` };

export default axios;
