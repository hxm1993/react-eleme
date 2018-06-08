import React, {Component} from "react";
require("./index.sass")
class Star extends Component {
	constructor(props) {
		super(props)
		this.state = {
			score: 0
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			score: nextProps.score
		})
	}

	renderStar() {
		let score = this.state.score;
		let intScore = Math.floor(score);
		let dom = [];
		for(var i = 0; i < intScore; i++) {
				dom.push(<img src="src/images/star.png" />)
		}
		if(score !== intScore) {
			dom.push(<img src="src/images/star_half.png" />)
		}
		return dom;
	}

	render() {
		let star = this.renderStar()
		return(
			<span className="show-guide-conten-left-rate">{star}</span>
		)
	}
}

export default Star;