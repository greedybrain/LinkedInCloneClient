import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Entry/Login";
import Signup from "./Entry/Signup";
import Home from "./Home/Home";

const Routes = () => {
	return (
		<Switch>
			<Route
				exact
				path='/signup'
				render={(routerProps) => <Signup {...routerProps} />}
			/>
			<Route
				exact
				path='/login'
				render={(routerProps) => <Login {...routerProps} />}
			/>
			<Route
				exact
				path='/'
				render={(routerProps) => <Home {...routerProps} />}
			/>
		</Switch>
	);
};

export default Routes;
