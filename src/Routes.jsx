//! Core Modules
import React, { useContext } from "react";

//! NPM Modules
import { Redirect, Route, Switch } from "react-router-dom";

//! Custom Modules
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "./Home/Home";
import MyNetwork from "./MyNetwork";
import Jobs from "./Jobs";
import Messaging from "./Messaging";
import Notifications from "./Notifications";
import UserContext from "./Context/userContext";

const Routes = () => {
	const { get } = useContext(UserContext);
	return (
		<Switch>
			<Route
				exact
				path='/notifications'
				render={(routerProps) =>
					!get.loggedIn ? (
						<Redirect to='/login' />
					) : (
						<Notifications {...routerProps} />
					)
				}
			/>
			<Route
				exact
				path='/messaging'
				render={(routerProps) =>
					!get.loggedIn ? (
						<Redirect to='/login' />
					) : (
						<Messaging {...routerProps} />
					)
				}
			/>
			<Route
				exact
				path='/jobs'
				render={(routerProps) =>
					!get.loggedIn ? <Redirect to='/login' /> : <Jobs {...routerProps} />
				}
			/>
			<Route
				exact
				path='/my_network'
				render={(routerProps) =>
					!get.loggedIn ? (
						<Redirect to='/login' />
					) : (
						<MyNetwork {...routerProps} />
					)
				}
			/>
			<Route
				exact
				path='/signup'
				render={(routerProps) =>
					get.loggedIn ? <Redirect to='/feed' /> : <Signup {...routerProps} />
				}
			/>
			<Route
				exact
				path='/login'
				render={(routerProps) =>
					get.loggedIn ? <Redirect to='/feed' /> : <Login {...routerProps} />
				}
			/>
			<Route
				exact
				path='/feed'
				render={(routerProps) =>
					!get.loggedIn ? <Redirect to='/login' /> : <Home {...routerProps} />
				}
			/>
			<Redirect from='/' to='/feed' />
		</Switch>
	);
};

export default Routes;
