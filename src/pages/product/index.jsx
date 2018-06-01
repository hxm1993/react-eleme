import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as homeAction from "../../redux/actions/home";


require("./index.sass")
class Product extends Component {
// description:"咸粥"
// icon:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
// image:"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
// info:"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足"
// name:"皮蛋瘦肉粥"
// oldPrice:""
// price:10
// rating:100
	getDomFromProps() {
		let goods = this.props.goods;
		let dom = {search:[],items:[]};
		goods && goods.forEach(good => {
			dom.search.push(<a href="javascript:;">{good.name}</a>)
			good.foods.forEach(food => {
				dom.items.push(
					<div className="item clearfix">
						<span className="proImage"><a href="javascript:;"><img src={food.icon} alt=""/></a></span>
						<div className="description">
							<h3 className="name">{food.name}</h3>
							<p className="info">{food.description}</p>
							<p className="rate"><span>星星</span> <span>月售</span></p>
						</div>
						<span className="price">
							<em>￥</em>
							<em>{food.price}</em>
							{food.oldPrice ?<del>￥{food.oldPrice}</del> : ""}
							
						</span>
						<span className="toCart">加入购物车</span>
					</div>
				)
			})
		})
		return dom;
	}

	renderSearchNav() {
		return(
			<div className="searchNav">
				{this.getDomFromProps().search}
			</div>
		)
	}

	renderItems() {
		return(
			<div className="items">
				{this.getDomFromProps().items}
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
		console.log("Product-------------------")
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
		seller: state.home.seller,
		goods: state.home.goods
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(homeAction,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Product);