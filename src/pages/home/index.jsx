import React, {Component} from "react";
import Header from "components/header";
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';
require("./index.sass");
class Home extends Component {
	renderShopGuide() {
		return (
			<div className="shopGuide">
				<div className="show-guide-conten">
					<div className="show-guide-conten-left">
						<img src="//shadow.elemecdn.com/faas/desktop/media/img/shop-bg.0391dd.jpg" />
						<p>
							<span className="show-guide-conten-left-name">名字</span>
							<span className="show-guide-conten-left-rate">星星</span>
						</p>
					</div>
					<div className="show-guide-conten-right">
						<span>
							<em>起送价</em>
							<em>20元</em>
						</span>
						<span>
							<em>配送费</em>
							<em>优惠配送费¥3</em>
						</span>
						<span>
							<em>平均送达速度</em>
							<em>20元</em>
						</span>
						<span className="favorite">
							<a href="javascript">xxx</a>
							<span>收藏</span>
						</span>
					</div>
				</div>
			</div>
		)
	}
	
	renderShopNav() {
		return(
			<div className="container">
				<div className="navLeft">
					<ul>
						<li><a href="javascript:;">所有商品</a></li>
						<li>评价</li>
						<li>商家资质</li>
					</ul>
					<ul>
						<li className="active">默认排序<i className="fa fa-arrow-down" aria-hidden="true"></i></li>
						<li>评分<i className="fa fa-arrow-down" aria-hidden="true"></i></li>
						<li>销量<i className="fa fa-arrow-down" aria-hidden="true"></i></li>
						<li>价格<i className="fa fa-arrow-down" aria-hidden="true"></i></li>
						<li><i className="active fa fa-th-large" aria-hidden="true"></i> | <i className="fa fa-th-list" aria-hidden="true"></i></li>
					</ul>
				</div>
				<div className="navRight">
					<input type="search" placeholder="search" />
				</div>
			</div>
		)
	}

	render() {
		let shopguide = this.renderShopGuide();
		let shopNav = this.renderShopNav();
		return(
			<div className="home">
				<Header />
				<div>
					<div>{shopguide}</div>
					<div className="showNav">{shopNav}</div>

					// <Route path="/product" component={Product} />
					// <Route path="/rate" component={Rate} />
					// <Route path="/seller" component={Seller} />
				</div>
			</div>
		)
	}
}

export default Home;