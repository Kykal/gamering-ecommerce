import { createSlice } from "@reduxjs/toolkit";

//Cart hooks
import { getLocalStorageItems, addItemToCart } from "../../hooks/cartHooks";

export const cartSlice = createSlice({
	name: 'cart',
	initialState: getLocalStorageItems(),
	
	reducers: {
		addItem: (state, actions) => {
			
			const newItem = actions.payload;
			
			state.push(newItem);

			addItemToCart(newItem);
		}
	}
});


export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;