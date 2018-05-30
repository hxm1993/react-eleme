import React from "react";
import ReactDOM from "react-dom";
import RouteDOM from "./router/index.jsx";
import {AppContainer} from 'react-hot-loader';

require("./styles/reset.sass")
require("./styles/icon/less/font-awesome.less")

ReactDOM.render(
	<div><RouteDOM /></div>,
	document.getElementById("app")
)
