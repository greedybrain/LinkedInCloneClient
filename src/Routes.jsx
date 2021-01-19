import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "./Home/Home";
import UserContext from "./Context/userContext";
import Notifications from "./Notifications";
import Messaging from "./Messaging";
import Jobs from "./Jobs";
import MyNetwork from "./MyNetwork";

const Routes = () => {
	const user = useContext(UserContext);
	return (
		<Switch>
			<Route
				exact
				path='/notifications'
				render={(routerProps) => <Notifications {...routerProps} />}
			/>
			<Route
				exact
				path='/messaging'
				render={(routerProps) => <Messaging {...routerProps} />}
			/>
			<Route
				exact
				path='/jobs'
				render={(routerProps) => <Jobs {...routerProps} />}
			/>
			<Route
				exact
				path='/my_network'
				render={(routerProps) => <MyNetwork {...routerProps} />}
			/>
			<Route
				exact
				path='/signup'
				render={(routerProps) =>
					user.loggedIn ? <Redirect to='/' /> : <Signup {...routerProps} />
				}
			/>
			<Route
				exact
				path='/login'
				render={(routerProps) =>
					user.loggedIn ? <Redirect to='/' /> : <Login {...routerProps} />
				}
			/>
			<Route
				exact
				path='/feed'
				render={(routerProps) =>
					!user.loggedIn ? <Redirect to='/login' /> : <Home {...routerProps} />
				}
			/>
			<Redirect from='/' to='/feed' />
		</Switch>
	);
};

export default Routes;
