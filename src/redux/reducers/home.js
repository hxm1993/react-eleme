import * as types from "../types";

const initialState = {
	seller: [],
	goods: [],
	ratings: []

}

export default function home(state=initialState, action) {
	switch(action.type) {
		case types.GET_SHOPMSG:
			console.log(action.data)
			return Object.assign({},state,{
				seller: action.data.seller,
				goods: action.data.goods,
				ratings: action.data.ratings
			})
		default:
			return state;
	}
}