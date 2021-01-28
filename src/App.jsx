//! Core modules
import React, { Component } from "react";

//! NPM Modules
import faker from "faker";

//! Custom Modules/ Components
import Header from "./Header/Header";
import Routes from "./Routes";
import UserContext from "./Context/userContext";
import getAllPostsService from "./services/get_all_posts";
import getAllUsersService from "./services/get_users";
import getCurrentUserService from "./services/get_current_user";
import logoutService from "./services/logout";

class App extends Component {
	state = {
		loggedIn: false,
		user: {},
		allUsers: [],
		allPosts: [],
		showMePopup: false,
		showCreatePostPopup: false,
		avatar: faker.random.image(),
	};

	componentDidMount = async () => {
		await this.getAllPostsAction();
		await this.getCurrentUserAction();
		await this.getAllUsersAction();
	};

	getAllPostsAction = async () => {
		const data = await getAllPostsService();
		if (!data) return;
		data.reverse();
		this.setState({ allPosts: data });
	};

	getAllUsersAction = async () => {
		const data = await getAllUsersService();
		this.setState({ allUsers: data });
	};

	getCurrentUserAction = async () => {
		const data = await getCurrentUserService();
		if (!data) return;
		this.setState({
			loggedIn: true,
			user: data.data,
		});
	};

	loginAction = (user) => {
		this.setState({ loggedIn: true, user });
	};

	signupAction = (user) => {
		this.setState({ loggedIn: true, user });
	};

	logoutAction = async () => {
		await logoutService();
		localStorage.removeItem("token");
		this.setState({
			loggedIn: false,
			user: {},
			allUsers: [],
			allPosts: [],
			showMePopup: false,
			showCreatePostPopup: false,
		});
	};

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

	render() {
		const {
			loggedIn,
			user,
			allUsers,
			showMePopup,
			showCreatePostPopup,
			showUserPostOptions,
			allPosts,
			avatar,
		} = this.state;
		const value = {
			actions: {
				loginAction: this.loginAction,
				signupAction: this.signupAction,
				logoutAction: this.logoutAction,
				toggleMePopup: this.toggleMePopup,
				toggleCreatePostPopup: this.toggleCreatePostPopup,
				handlePopupLeave: this.handlePopupLeave,
			},
			get: {
				loggedIn,
				user,
				allUsers,
				showMePopup,
				showCreatePostPopup,
				showUserPostOptions,
				allPosts,
				avatar,
			},
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
