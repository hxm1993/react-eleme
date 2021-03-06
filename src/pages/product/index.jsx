import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as productAction from "../../redux/actions/product";
import Star from "../../components/star";

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
	
	constructor(props) {
		super(props);
		this.props.actions.getProduct();
		this.state = {
			currentFilter: 'default',
			displayMethod: 'list',
			goods: [],
			goodForCart: []
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			goods: nextProps.goods,
			goodForCart: nextProps.goodForCart
		})
	}

	addToCart(name) {
		this.props.actions.addToCart(name);
	}

	clearCart() {
		this.props.actions.clearCart();
	}

	getItems(name,nextName="") {
		let dom = [];
		let goods = this.state.goods;
		let displayMethod = this.state.displayMethod;
		goods && goods.forEach(good => {
			if(good.name ===name){
				let length = good.foods.length;
				good.foods.forEach((food,i) => {

					dom.push(
						<div id={i === length-1 ? nextName : ""} className={displayMethod==='list' ? 'item clearfix' : 'menu clearfix'}>
						
							<span className="proImage"><a href="javascript:;"><img src={food.icon} alt=""/></a></span>
							<div className="description">
								<h3 className="name">{food.name}</h3>
								<p className="info">{food.description}</p>
								<p className="rate"><span>好评率{food.rating}%  </span> <span>月售{food.sellCount}份</span></p>
							</div>
							<span className="price">
								<em>￥</em>
								<em>{food.price}</em>
								{food.oldPrice ?<del>￥{food.oldPrice}</del> : ""}
								
							</span>
							<span className="toCart" onClick={this.addToCart.bind(this,food.name)}>加入购物车</span>
						</div>
					)
				})
			}
			
		})
		return dom;
	}
	scrollToAnchor = (anchorName) => {
	    if (anchorName) {
	        let anchorElement = document.getElementById(anchorName);
	        if(anchorElement) { anchorElement.scrollIntoView(); }
	    }
	}
	getDomFromProps() {
		// let goods = this.props.goods;
		let goods = this.state.goods;
		let dom = {search:[],items:[]};
		let displayMethod = this.state.displayMethod;
		goods && goods.forEach((good,i) => {
			dom.search.push(<a onClick={()=>this.scrollToAnchor(good.name)}>{good.name}</a>)
			
			dom.items.push(<div>
				<a name={good.name}></a>
				<a className="title" id={i==0 ? good.name : ""}>{good.name}</a>
				<div>
					{i != goods.length - 1 ? this.getItems(good.name,goods[i+1].name) : this.getItems(good.name)}
				</div>
			</div>)
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
					{productItems}
				</div>
			</div>
		)
	}

	changeFilter(filter) {
		
		if(filter === 'menu' || filter === 'list'){
			this.setState({
				displayMethod: filter
			})
		}else {
			this.setState({
				currentFilter: filter
			})
			if(filter === "default") {
				this.setState({
					goods: this.props.goods
				})
			}else {
				var tempGoods = JSON.parse(JSON.stringify(this.state.goods));			

				tempGoods.forEach(g => {
					g.foods.sort((a,b) => {return a[filter] - b[filter]})
				})
				this.setState({
					goods: tempGoods
				})
			}

		}
	}
	
	changeCount(name, str) {
		this.props.actions.optionCount(name,str);
	}

	renderCart() {
		let goods = [];
		let goodForCart = this.props.addToCart;
		goodForCart && goodForCart.forEach(good => {
			goods.push(
				<li>
					<span className="name">{good.name}</span>
					<span className="count">
								<em onClick={this.changeCount.bind(this,good.name,'reduce')}>-</em>
								<em>{good.buyCount}</em>
								<em onClick={this.changeCount.bind(this,good.name,'add')}>+</em>
					</span>
					<span className="price">￥{good.price}</span>
				</li>
			)
		})
		return goods;
	}

	render() {
		let searchNav = this.renderSearchNav();
		// let productList = this.productList();
		let productMenu = this.renderProductMenu();
		let currentFilter = this.state.currentFilter;
		let displayMethod = this.state.displayMethod;
		let cart = this.renderCart();
		return(
			<div className="product">
				<ul className="filter">
						<li onClick={this.changeFilter.bind(this,'default')} 
							className={currentFilter === 'default' ? "active" : ""}
						>默认排序<i className="fa fa-arrow-down" aria-hidden="true"></i></li>
						<li onClick={this.changeFilter.bind(this,'rating')}
							className={currentFilter === 'rating' ? "active" : ""}>评分<i className="fa fa-arrow-down" aria-hidden="true"></i></li>
						<li onClick={this.changeFilter.bind(this,'sellCount')}
							className={currentFilter === 'sellCount' ? "active" : ""}>销量<i className="fa fa-arrow-down" aria-hidden="true"></i></li>
						<li onClick={this.changeFilter.bind(this,'price')}
							className={currentFilter === 'price' ? "active" : ""}>价格<i className="fa fa-arrow-down" aria-hidden="true"></i></li>
						<li>
							<i 
								className={displayMethod === 'menu' ? "active fa fa-th-large" : "fa fa-th-large"}
								aria-hidden="true" onClick={this.changeFilter.bind(this,'menu')} >
							</i> |  <i 
								className={displayMethod === 'list' ? "active fa fa-th-list" : "fa fa-th-list"}
								aria-hidden="true" onClick={this.changeFilter.bind(this,'list')}>
							</i>
						</li>
				</ul>
				{searchNav}
				{productMenu}
				<div className="cart">
					<div className="title"><span>购物车</span><span onClick={this.clearCart.bind(this)}>[清空]</span></div>
					<ul className="buyProduct">
						{cart}
					</ul>
					<div className="pay">
						<div className="pay-info">
							<span className="cart-icon">
								<i><i class="fa fa-shopping-cart" aria-hidden="true"></i></i>
								<em>{this.props.addToCart.length}</em>
							</span>
							<span className="total-money"><em>￥</em><em>{this.props.totalPrice}</em></span>
							<span className="send-money">配送费{this.props.seller.deliveryPrice}元</span>
						</div>
						{this.props.totalPrice >= 20 ? 
							<div className="pay-button canPay" onClick={()=>{window.alert("您需支付金额为：" + (this.props.totalPrice + this.props.seller.deliveryPrice) + "元")}}>
								支付
							</div>
							:
							<div className="pay-button">
								20起送
							</div>
						}
					</div>
				</div>
			</div>

		)
	}
}

const mapStateToProps = state => {
	return {
		seller: state.home.seller,
		goods: state.product.goods,
		addToCart: state.product.addToCart,
		totalPrice: state.product.totalPrice
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(productAction,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Product);