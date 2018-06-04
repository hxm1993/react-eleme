import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as homeAction from "../../redux/actions/home";

require("./index.sass");
class Rate extends Component {
	constructor(props) {
		super(props);
		this.state = {
            currentTab: 'all',
            support: 0,
            oppose: 0
        }

        
	}
// avatar:"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
// deliveryTime:30
// rateTime:1469281964000
// rateType:0
// recommend:Array(5)
// 0:"南瓜粥"
// 1:"皮蛋瘦肉粥"
// 2:"扁豆焖面"
// 3:"娃娃菜炖豆腐"
// 4:"牛肉馅饼"

// score:5
// text:"不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐."
// username:"3******c"
// 
	componentWillReceiveProps(nextProps) {
		let ratings = nextProps.ratings;
		let support = ratings && ratings.filter(rating => {
				return rating.rateType === 0
		})
		let oppose = ratings && ratings.filter(rating => {
				return rating.rateType !== 0
		})
		this.setState({
			support: support.length,
			oppose: oppose.length
		})
	}
	formatTime(time) {
		let date = new Date(time);
		let year = date.getFullYear(),
			month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1),
			day = date.getDate() > 9 ? date.getDate() : date.getDate() + 1,
			hour = date.getHours(),
			minutes = date.getMinutes(),
			second = date.getSeconds();
		return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + second;
	}

	renderRecommend(recommend) {
		let recommends = [];
		recommend.forEach(rec => {
			recommends.push(<p>{rec}</p>)
		})
		return recommends;
	}

	renderRatings(str) {
		let ratings = this.props.ratings;
		let dom = [];
		ratings && ratings.forEach(rating => {
			if(str === "all") {
					dom.push(
						<li className="item">
								<span className="userImg"><img src={rating.avatar} alt=""/></span>
								<p className="username">{rating.username}</p>
								<p className="rateTime">{this.formatTime(rating.rateTime)}</p>
								<p className="rateContent">
									<span>
										{
											rating.rateType ? <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
														  : <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>										
										}
									</span>
									<span>{rating.text}</span>
								</p>
								<div className="recommend">
									<p>推荐：</p>
									{this.renderRecommend(rating.recommend)}
								</div>
						</li>
					)
			}else if(parseInt(str) === rating.rateType) {
					dom.push(
						<li className="item">
								<span className="userImg"><img src={rating.avatar} alt=""/></span>
								<p className="username">{rating.username}</p>
								<p className="rateTime">{this.formatTime(rating.rateTime)}</p>
								<p className="rateContent">
									<span>
										{
											rating.rateType ? <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
														  : <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>										
										}
									</span>
									<span>{rating.text}</span>
								</p>
						</li>
					)
			}

			
		})
		
		return dom;
		
	}
	
	changeTab(tab) {
		this.setState({
			currentTab: tab
		})
	}

	render() {
		let currentTab = this.state.currentTab;
		console.log("rrrrrrrrrrrrrrrrrrrrrr")
		console.log(this.state)
		return(
			<div className="rate">
				<div className="tab">
					<a className={currentTab === "all" ? "active" : ""} href="javascript:;" onClick={this.changeTab.bind(this,"all")}>全部 ({this.state.support + this.state.oppose})</a>
					<a className={currentTab === "0" ? "active" : ""} href="javascript:;" onClick={this.changeTab.bind(this,"0")}>推荐 ({this.state.support})</a>
					<a className={currentTab === "1" ? "active" : ""} href="javascript:;" onClick={this.changeTab.bind(this,"1")}>吐槽 ({this.state.oppose})</a>
				</div>
				<ul className="rateList">
					{this.renderRatings(this.state.currentTab)}
				</ul>
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

export default connect(mapStateToProps,mapDispatchToProps)(Rate);