//Redux
import { createSlice } from "@reduxjs/toolkit";

//Utils
import { checkCart, getCartLength } from "../../utils/cartUtils";


export const cartSlice = createSlice({
	name: 'cart',
	
	
	initialState: {
		content: [],
		length: 0,
	},


	reducers: {
		setCartContent:	(state, action) => {
			state.content = action.payload
		},
		setCartLength:		(state, action) => {
			state.length = action.payload
		},
	},
});


//Export actions to use somewhere else
export const { setCartContent, setCartLength } = cartSlice.actions;


//Export reducer to declare in store.js
export default cartSlice.reducer;


//Get data cart content from localStorage
export const fetchCartContentFromLocalStorage = () => (dispatch) => {
	const cartContent = checkCart();
	
	dispatch( setCartContent(cartContent) );
};

//Get data cart length from localStorage
export const fetchCartLengthFromLocalStorage = () => (dispatch) => {
	const cartLength = getCartLength();

	dispatch( setCartLength(cartLength) );
};