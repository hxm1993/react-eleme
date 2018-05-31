import React, {Component} from "react";
require("./index.sass")
class Seller extends Component {
	render() {
		return(
			<div className="seller">
				<div className="sellerView">
					<h2>商家实景</h2>
					<div className="sellerView-img">

						<img src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180" alt="" />
					</div>
				</div>
				<div className="sellerInfo">
					<h2>商家信息</h2>
					<ul className="infoBox">
						<li>contet</li>
						<li>contet</li>
						<li>contet</li>
					</ul>
				</div>
			</div>

		)
	}
}

export default Seller;