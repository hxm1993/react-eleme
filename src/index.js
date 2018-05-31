import React from "react";
import ReactDOM from "react-dom";
import RouteDOM from "./router/index.jsx";
import {AppContainer} from 'react-hot-loader';
import {Provider} from "react-redux";
import store from "./redux";


require("./styles/reset.sass")
require("./styles/icon/less/font-awesome.less")

ReactDOM.render(
	<Provider store={store}><RouteDOM /></Provider>,
	document.getElementById("app")
)
