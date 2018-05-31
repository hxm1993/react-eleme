import React, {Component} from "react";
require("./index.sass");
class Rate extends Component {

	render() {
		return(
			<div className="rate">
				<div className="tab">
					<a className="active" href="javascript:;">全部</a>
					<a href="javascript:;">推荐</a>
					<a href="javascript:;">吐槽</a>
				</div>
				<ul className="rateList">
					<li className="item">
						<span className="userImg"><img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt=""/></span>
						<p className="username">3*******c</p>
						<p className="rateTime">2018-2-2</p>
						<p className="rateContent"><span>zan</span><span>content</span></p>
					</li>
				</ul>
			</div>

		)
	}
}

export default Rate;