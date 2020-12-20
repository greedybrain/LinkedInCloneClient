import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'

const Routes = () => {
        return (
                <Switch>
                        <Route
                                exact
                                path='/'
                                render={routerProps => <Home {...routerProps} />}
                        />
                </Switch>
        )
}

export default Routes
