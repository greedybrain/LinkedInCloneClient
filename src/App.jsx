//! Core modules
import React, { Component } from "react";

//! NPM Modules
import axios from "./utils/axios_configs";

//! Custom Modules/ Components
import Header from "./Header/Header";
import Routes from "./Routes";
import UserContext from "./Context/userContext";
import MePopup from "./MePopup";

class App extends Component {
	state = {
		loggedIn: false,
		token: "",
		user: {},
	};

	getCurrentUser = async () => {
		const token = localStorage.getItem("token");
		try {
			const { data } = await axios("/users/me", {
				headers: { Authorization: `Bearer ${token}` },
			});
			if (data._id) this.setState({ loggedIn: true, user: data });
		} catch (error) {
			console.log(error.message);
		}
	};

	async componentDidMount() {
		this.getCurrentUser();
	}

	loginUser = (user) => {
		this.setState({ loggedIn: true, user });
	};

	render() {
		const { loggedIn, user } = this.state;
		return (
			<UserContext.Provider
				value={{
					loggedIn,
					user,
					loginUser: this.loginUser,
				}}
			>
				<div className='App' style={{ minWidth: "1100px", maxWidth: "1200px" }}>
					{loggedIn ? <Header /> : null}
					<Routes />
				</div>
				<MePopup />
			</UserContext.Provider>
		);
	}
}

export default App;
