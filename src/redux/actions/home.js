import * as types from "../types";
import api from "../api";


function returnShopMsg(data) {
	return {
		type: types.GET_SHOPMSG,
		data: data.data
	}
}

export function getShopMsg() {
	return (dispatch) => {
		api.getShopMsg(function(res) {
			dispatch(returnShopMsg(res))
		})
	}
}