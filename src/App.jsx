//! Core modules
import React, { Component } from "react";

//! NPM Modules
import axios from "./utils/axios_configs";

//! Custom Modules/ Components
import Header from "./Header/Header";
import Routes from "./Routes";
import UserContext from "./Context/userContext";

class App extends Component {
	state = {
		loggedIn: false,
		user: {},
		allUsers: [],
		showMePopup: false,
		showCreatePostPopup: false,
	};

	getAllUsers = async () => {
		const token = localStorage.getItem("token");
		try {
			const { data } = await axios("/users", {
				headers: { Authorization: `Bearer ${token}` },
			});
			this.setState({
				allUsers: data,
			});
		} catch (error) {
			console.log(error.message);
		}
	};

	getCurrentUser = async () => {
		const token = localStorage.getItem("token");
		try {
			const { data } = await axios("/users/me", {
				headers: { Authorization: `Bearer ${token}` },
			});
			if (data.data._id)
				this.setState({
					loggedIn: true,
					user: data.data,
				});
		} catch (error) {
			console.log(error.message);
		}
	};

	async componentDidMount() {
		await this.getAllUsers();
		await this.getCurrentUser();
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
			await axios.post("/users/logout");
		} catch (error) {
			console.log(error.message);
		}
		this.setState({
			loggedIn: false,
			user: {},
			usersPosts: [],
			showMePopup: false,
		});
		localStorage.removeItem("token");
	};

	render() {
		const {
			loggedIn,
			user,
			allUsers,
			showMePopup,
			showCreatePostPopup,
			showUserPostOptions,
		} = this.state;
		const value = {
			loggedIn,
			user,
			allUsers,
			showMePopup,
			showCreatePostPopup,
			showUserPostOptions,
			loginUser: this.loginUser,
			logoutUser: this.logoutUser,
			toggleMePopup: this.toggleMePopup,
			toggleCreatePostPopup: this.toggleCreatePostPopup,
			handlePopupLeave: this.handlePopupLeave,
		};
		return (
			<UserContext.Provider value={value}>
				<div
					className='App'
					style={{
						height: "100vh",
					}}
				>
					{loggedIn ? <Header /> : null}
					<Routes />
				</div>
			</UserContext.Provider>
		);
	}
}

export default App;
