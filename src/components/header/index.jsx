import React, {Component} from "react";
require("./index.sass")

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header-content">
					<div className="header-nav">
						<ul className="clearfix">
							<li>首页</li>
							<li>首页</li>
							<li>首页</li>
							<li>首页</li>
						</ul>
					</div>
					<div className="rule_mobile_login">
						<div className="rule_mobile">
							<span>规则</span>
							<span>手机</span>
						</div>
						<div className="loginReg">
							<span>
								<a href="javascript:;">登录</a>
								/
								<a href="javascript:;">注册</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;