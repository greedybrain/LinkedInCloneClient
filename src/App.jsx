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
		allPosts: [],
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

	getAllPosts = async () => {
		const token = localStorage.getItem("token");
		try {
			const { data } = await axios("/posts", {
				headers: { Authorization: `Bearer ${token}` },
			});
			data.reverse();
			this.setState({ allPosts: data });
		} catch (error) {
			console.log(error.message);
		}
	};

	async componentDidMount() {
		this.getCurrentUser();
		this.getAllPosts();
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
		this.setState({ loggedIn: false, user: {}, showMePopup: false });
		localStorage.removeItem("token");
	};

	addNewPost = (post) => {
		this.setState((prevState) => ({
			allPosts: [post, ...prevState.allPosts],
		}));
	};

	render() {
		const {
			loggedIn,
			user,
			allPosts,
			showMePopup,
			showCreatePostPopup,
		} = this.state;
		return (
			<UserContext.Provider
				value={{
					loggedIn,
					user,
					allPosts,
					showMePopup,
					showCreatePostPopup,
					loginUser: this.loginUser,
					logoutUser: this.logoutUser,
					toggleMePopup: this.toggleMePopup,
					toggleCreatePostPopup: this.toggleCreatePostPopup,
					handlePopupLeave: this.handlePopupLeave,
					addNewPost: this.addNewPost,
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
