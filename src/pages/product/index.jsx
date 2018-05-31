import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as proAction from "../../redux/actions/product";

require("./index.sass")
class Product extends Component {

	renderSearchNav() {
		return(
			<div className="searchNav">
				<a href="javascript:;">热销</a>
				<a href="javascript:;">热销1</a>
				<a href="javascript:;">热销2</a>
				<a href="javascript:;">热销3</a>
				<a href="javascript:;">热销4</a>
				<a href="javascript:;">热销5</a>
				<a href="javascript:;">热销6</a>
			</div>
		)
	}

	renderItems() {
		return(
			<div className="items">
				<div className="item clearfix">
					<span className="proImage"><a href="javascript:;"><img src="//fuss10.elemecdn.com/f/49/28a540d4274eb00f3b8820b160d7djpeg.jpeg" alt=""/></a></span>
					<div className="description">
						<h3 className="name">名字</h3>
						<p className="info">自带黑珍珠哦</p>
						<p className="rate"><span>星星</span> <span>月售</span></p>
					</div>
					<span className="price">
						<em>￥</em>
						<em>18</em>
						<em>起</em>
					</span>
					<span className="toCart">加入购物车</span>
				</div>
				<div className="item clearfix">
					<span className="proImage"><a href="javascript:;"><img src="//fuss10.elemecdn.com/f/49/28a540d4274eb00f3b8820b160d7djpeg.jpeg" alt=""/></a></span>
					<div className="description">
						<h3 className="name">名字</h3>
						<p className="info">自带黑珍珠哦</p>
						<p className="rate"><span>星星</span> <span>月售</span></p>
					</div>
					<span className="price">
						<em>￥</em>
						<em>18</em>
						<em>起</em>
					</span>
					<span className="toCart">加入购物车</span>
				</div>
			</div>
		)
	}

	renderProductMenu() {
		let productItems = this.renderItems();
		return(
			<div className="productMenu">
				<div className="list">
					<div className="title">热销啊</div>
					{productItems}

				</div>
			</div>
		)
	}


	render() {
		console.log(this.props)
		let searchNav = this.renderSearchNav();
		// let productList = this.productList();
		let productMenu = this.renderProductMenu();
		return(
			<div className="product">
				{searchNav}
				{productMenu}
				<div className="cart">
					<div className="title"><span>购物车</span><span>[清空]</span></div>
					<ul className="buyProduct">
						<li>
							<span className="name">product1</span>
							<span className="count">
								<em>-</em>
								<em>1</em>
								<em>+</em>
							</span>
							<span className="price">￥25</span>
						</li>
						<li>
							<span className="name">product1</span>
							<span className="count">
								<em>-</em>
								<em>1</em>
								<em>+</em>
							</span>
							<span className="price">￥25</span>
						</li>
					</ul>
					<div className="pay">
						<div className="pay-info">
							<span className="cart-icon">
								<i>图标</i>
								<em>2</em>
							</span>
							<span className="total-money"><em>￥</em><em>26</em></span>
							<span className="send-money">配送费3元</span>
						</div>
						<div className="pay-button">20起送</div>
					</div>
				</div>
			</div>

		)
	}
}

const mapStateToProps = state => {
	return {
		products: state.product.products
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(proAction,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Product);