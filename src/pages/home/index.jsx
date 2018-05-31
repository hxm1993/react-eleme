import React, {Component} from "react";
import Header from "components/header";
import { BrowserRouter, HashRouter, Switch, Route, Redirect, Link} from 'react-router-dom';

import Product from "../product";
import Rate from "../rate";
import Seller from "../seller";

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
						<li><Link to="/product">所有商品</Link></li>
						<li><Link to="/rate">评价</Link></li>
						<li><Link to="/seller">商家资质</Link></li>
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

					<div className="main">
						<div className="main-left">
							<Route path="/product" component={Product} />
							<Route path="/rate" component={Rate} />
							<Route path="/seller" component={Seller} />
							<Redirect from="" to="/product" />
						</div>
						<div className="main-right">
							<div className="title">商家公告</div>
							<div className="container">
								<div className="content">
									<p className="deliveryTitle">配送说明</p>
									<p className="deliveryContent">配送内容</p>
								</div>
								<div className="shopcomplaint">
									<a href="javascript:;">举报商家</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;