import { createSlice } from "@reduxjs/toolkit";

//Cart hooks
import { getLocalStorageItems, addItemToCart } from "../../hooks/cartHooks";


export const cartSlice = createSlice({
	name: 'cart',
	initialState: getLocalStorageItems(),
	
	reducers: {
		addItemRedux: (state, actions) => {
			
			const newItem = actions.payload;
			
			state.push(newItem); //Update state

			addItemToCart(newItem); //Update localStorage
		}
	}
});


export const { addItemRedux } = cartSlice.actions;

export default cartSlice.reducer;