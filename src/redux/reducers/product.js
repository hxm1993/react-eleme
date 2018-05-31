import * as types from "../types";

const initialState = {
	products: []
}

export default function product(state=initialState, action) {
	switch(action.type) {
		case types.GET_PRODUCT:
			return Object.assign({},state,{
				products: action.data
			})
		default:
			return state;
	}
}