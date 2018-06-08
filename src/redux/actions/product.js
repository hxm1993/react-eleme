import * as types from "../types";
import api from "../api";

function returnClearCart() {
	return {
		type: types.CLEAR_CART
	}
}

function returnReduceCount(data) {
	return {
		type: types.OPTION_COUNT,
		data: data
	}
}

function returnProduct(data) {
	return {
		type: types.GET_PRODUCT,
		data: data
	}
}

function returnAddToCart(name) {
	return {
		type: types.ADD_TO_CART,
		data: name
	}
}

export function getProduct() {
	return (dispatch) => {
		api.getShopMsg(function(res) {
			dispatch(returnProduct(res))
		})
	}
}

export function addToCart(name) {
	return (dispatch) => {
		dispatch(returnAddToCart(name))
	}
}

export function optionCount(name,opt) {
	return (dispatch) => {
		dispatch(returnReduceCount({name:name,option:opt}))
	}
}

export function clearCart() {
	return (dispatch) => {
		dispatch(returnClearCart())
	}
}