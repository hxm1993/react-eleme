import * as types from "../types";
import api from "../api";

function returnProduct(data) {
	return {
		type: types.getProduct,
		data: data
	}
}

export function getProduct() {
	return (dispatch) => {
		api.getProduct(function(res) {
			dispatch(returnProduct(res))
		})
	}
}