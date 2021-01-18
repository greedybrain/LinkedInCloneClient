import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "./Home/Home";
import UserContext from "./Context/userContext";

const Routes = () => {
	const userData = useContext(UserContext);
	return (
		<Switch>
			<Route
				exact
				path='/signup'
				render={(routerProps) =>
					userData.loggedIn ? <Redirect to='/' /> : <Signup {...routerProps} />
				}
			/>
			<Route
				exact
				path='/login'
				render={(routerProps) =>
					userData.loggedIn ? <Redirect to='/' /> : <Login {...routerProps} />
				}
			/>
			<Route
				exact
				path='/feed'
				render={(routerProps) =>
					!userData.loggedIn ? (
						<Redirect to='/login' />
					) : (
						<Home {...routerProps} />
					)
				}
			/>
			<Redirect from='/' to='/feed' />
		</Switch>
	);
};

export default Routes;
