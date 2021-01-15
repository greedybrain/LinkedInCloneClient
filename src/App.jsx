//! Core modules
import React, { Component } from "react";

//! NPM Modules
import axios from "./utils/axios_configs";

//! Custom Modules/ Components
import Header from "./Header/Header";
import Routes from "./Routes";
import UserContext from "./Context/userContext";
import CreatePostPopup from "./CreatePostPopup";

class App extends Component {
	state = {
		loggedIn: false,
		user: {},
		showMePopup: false,
		showCreatePostPopup: false,
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

	toggleMePopup = () => {
		this.setState((prevState) => ({
			showMePopup: !prevState.showMePopup,
		}));
	};

	toggleCreatePostPopup = () => {
		this.setState((prevState) => ({
			showCreatePostPopup: !prevState.showCreatePostPopup,
		}));
	};

	handlePopupLeave = () => {
		this.setState({
			showMePopup: false,
		});
	};

	loginUser = (user) => {
		this.setState({ loggedIn: true, user });
	};

	logoutUser = async () => {
		try {
			const { data } = await axios.post("/users/logout");
			console.log(data);
		} catch (error) {
			console.log(error.message);
		}
		this.setState({ loggedIn: false, user: {}, showMePopup: false });
		localStorage.removeItem("token");
	};

	render() {
		const { loggedIn, user, showMePopup, showCreatePostPopup } = this.state;
		return (
			<UserContext.Provider
				value={{
					loggedIn,
					user,
					showMePopup,
					showCreatePostPopup,
					loginUser: this.loginUser,
					logoutUser: this.logoutUser,
					toggleMePopup: this.toggleMePopup,
					toggleCreatePostPopup: this.toggleCreatePostPopup,
					handlePopupLeave: this.handlePopupLeave,
				}}
			>
				<div
					className='App'
					style={{
						height: "100vh",
					}}
				>
					{loggedIn ? <Header /> : null}
					<Routes />
					{showCreatePostPopup ? <CreatePostPopup /> : null}
				</div>
			</UserContext.Provider>
		);
	}
}

export default App;
