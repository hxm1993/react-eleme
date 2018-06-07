import * as types from "../types";

const initialState = {
	goods: [],
	addToCart: []
}

export default function product(state=initialState, action) {
	switch(action.type) {
		case types.GET_PRODUCT:
			return Object.assign({},state,{
				goods: action.data.data.goods
			});
		case types.ADD_TO_CART:
			let tempFood = {};
			let index = 0;
			let tempFlag = 0;
			state.addToCart.forEach((food,i) => {
				if(food.name === action.data) {
					index = i;
					tempFlag = 1;
				}
			})
			state.goods.forEach(good => {
					good.foods.forEach((food,i) => {
						if(food.name === action.data) {
							tempFood = food;
						}
					})
			})
			if(!tempFlag) {
				tempFood.buyCount = 1;
				return Object.assign({},state,{
					addToCart: [...state.addToCart, tempFood]
				});
			}else {
				tempFood.buyCount ++;
				return Object.assign({},state,{
					addToCart: [...state.addToCart.splice(0,index), tempFood, ...state.addToCart.splice(index+1)]
				});
			}
			
		case types.OPTION_COUNT:
			let temp= {};
			let foodIndex = 0;
			let flag = 1;
			state.addToCart.forEach((food,i) => {
				if(food.name === action.data.name) {
					temp = food;
					if(action.data.option === 'reduce') {
						flag = --temp.buyCount === 0 ? 0 : 1;
					}else {
						temp.buyCount ++;
					}
					foodIndex = i;
				}
			})
			let temp1 = null;
			if(flag) {
				temp1 = Object.assign({},state,{
					addToCart: [...state.addToCart.splice(0,foodIndex), temp, ...state.addToCart.splice(foodIndex+1)]
				})
			}else {
				temp1 = Object.assign({},state,{
					addToCart: [...state.addToCart.splice(0,foodIndex),  ...state.addToCart.splice(foodIndex+1)]
				})
			}
			
			console.log(temp1)
			return temp1;
		default:
			return state;
	}
}