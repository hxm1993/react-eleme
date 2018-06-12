import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as homeAction from "../../redux/actions/home";
require("./index.sass")
class Seller extends Component {

	renderSellerView() {
		let seller = this.props.seller;
		let dom = [];
		seller.pics && seller.pics.forEach(s => {
			dom.push(<img src={s} />)
		})
		return dom;
	}

	renderSellerInfos() {
		let seller = this.props.seller;
		let dom  = [];
		seller.infos && seller.infos.forEach(info => {
			dom.push(<li>{info}</li>)
		})
		return dom;
	}

	render() {
		console.log(this.props.seller)
		let sellerView = this.renderSellerView();
		let infos = this.renderSellerInfos();
		return(
			<div className="seller">
				<div className="sellerView">
					<h2>商家实景</h2>
					<div className="sellerView-img">
						{sellerView}
					</div>
				</div>
				<div className="sellerInfo">
					<h2>商家信息</h2>
					<ul className="infoBox">
						{infos}
					</ul>
				</div>
			</div>

		)
	}
}

const mapStateToProps = state => {
	return {
		seller: state.home.seller
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(homeAction,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Seller);