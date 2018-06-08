import React, {Component} from "react";
import Header from "components/header";
import { BrowserRouter, HashRouter, Switch, Route, Redirect, Link} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as homeAction from "../../redux/actions/home";

import Product from "../product";
import Rate from "../rate";
import Seller from "../seller";
import Star from "../../components/star";

require("./index.sass");
class Home extends Component {
	scrollHandler = this.handleScroll.bind(this);
	componentDidMount() {
      window.addEventListener('scroll', this.scrollHandler);
    }
    handleScroll(event) {
        let scrollTop = event.srcElement.documentElement.scrollTop;
        if(scrollTop >= 300) {
        	document.getElementsByClassName("searchNav")[0].style.position = 'fixed';
        	document.getElementsByClassName("searchNav")[0].style.top = '0';
        	document.getElementsByClassName("searchNav")[0].style.zIndex = '1110';
        }else {
        	document.getElementsByClassName("searchNav")[0].style.position = 'unset';
        }
    }

	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.actions.getShopMsg()
	}
	renderShopGuide() {
		let seller = this.props.seller;
		return (
			<div className="shopGuide">
				<div className="show-guide-conten">
					<div className="show-guide-conten-left">
						<img src={seller.avatar} />
						<p>
							<span className="show-guide-conten-left-name">{seller.name}</span>
							<Star score={seller.score}></Star>
						</p>
					</div>
					<div className="show-guide-conten-right">
						<span>
							<em>起送价</em>
							<em>{seller.minPrice}元</em>
						</span>
						<span>
							<em>配送费</em>
							<em>优惠配送费¥{seller.deliveryPrice}</em>
						</span>
						<span>
							<em>送达速度</em>
							<em>{seller.deliveryTime}分钟</em>
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
	
	testClick() {
		this.refs.testChild.test()
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
					
				</div>
				<div className="navRight">
					<input type="search" placeholder="search" />
				</div>
			</div>
		)
	}

	renderSupports() {
		let seller = this.props.seller;
		let supports = [];
		seller.supports && seller.supports.forEach((support,index) => {
			supports.push(<p className="gonggao" key={index}>{support.description}</p>)
		})
		return supports;
	}

	render() {
		console.log(this.props)
		let shopguide = this.renderShopGuide();
		let shopNav = this.renderShopNav();

		
		let support = this.renderSupports();

		return(
			<div className="home">
				<Header />
				<div>
					<div>{shopguide}</div>
					<div className="showNav">{shopNav}</div>

					<div className="main">
						<div className="main-left">
							<Route path="/product" component={Product}/>
							<Route path="/rate" component={Rate} />
							<Route path="/seller" component={Seller} />
							<Redirect from="" to="/product" />
						</div>
						<div className="main-right">
							<div className="title">商家公告</div>
							<div className="container">
								<div className="content">
									{support}
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

const mapStateToProps = state => {
	return {
		seller: state.home.seller,
		goods: state.home.goods,
		ratings: state.home.ratings
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(homeAction,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);