import React, {Component} from "react";
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();
let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;

import Home from "../pages/home";

class RouteDOM extends Component {
	render() {
		return(
			<Router history={history}>
				<Switch>
					<Route path="/" component={Home} />
					<Redirect from="" to="/" />
				</Switch>
			</Router>
		)
	}
}

export default RouteDOM;