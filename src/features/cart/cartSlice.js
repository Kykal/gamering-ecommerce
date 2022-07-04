import { createSlice } from "@reduxjs/toolkit";

//Cart hooks
import { 
	getLocalStorageItems, 
	addItemToCart, 
	removeItemLocalStorage, 
	updateLocalStorage
} from "../../hooks/cartHooks";


export const cartSlice = createSlice({
	name: 'cart',
	initialState: getLocalStorageItems(),
	
	reducers: {
		addItemRedux: (state, actions) => {

			//Save locally localStorage products list
			let currentList = Array(...getLocalStorageItems());

			let newItem = actions.payload;

			newItem = {
				fullName: newItem.fullName,
				img: newItem.img,
				price: newItem.price,
				quantity: 1
			}

			const findProduct = currentList.find( product => product.fullName === newItem.fullName );
			
			const itemFoundIndex = currentList.indexOf( findProduct );

			if( itemFoundIndex !== -1 ){
				currentList[itemFoundIndex].quantity += 1;
				updateLocalStorage(currentList);
				return state = currentList;
			}
			
			state.push(newItem); //Update state
			addItemToCart(newItem); //Update localStorage

		},

		//Add only one item from product
		addOneItemRedux: (state, actions) => {
			const productName = actions.payload;

			let currentList = getLocalStorageItems();

			const productFoundIndex = currentList.indexOf(currentList.find( product => product.fullName === productName ));
	
			
			currentList[productFoundIndex].quantity += 1;
			
			updateLocalStorage(currentList);
			return state = currentList;
		},

		//Remove whole product
		removeItemRedux: (state, actions) => {
			const itemName = actions.payload;

			const itemIndex = state.indexOf(state.find( product => product.fullName === itemName ));

			state.splice( itemIndex, 1 );
			removeItemLocalStorage(itemIndex);
		},

		//Remove only one item from product
		removeOneItemRedux: (state, actions) => {
			const productName = actions.payload;

			let currentList = getLocalStorageItems();

			const productFoundIndex = currentList.indexOf(currentList.find( product => product.fullName === productName ));
	
			
			currentList[productFoundIndex].quantity -= 1;
			
			updateLocalStorage(currentList);
			return state = currentList;
		},



		/////// DO NOT USE IN PRODUCTION ///////
		clearCartRedux: (state) => {
			localStorage.setItem('cart', '[]');
			return state = [];
		}
		/////// DO NOT USE IN PRODUCTION ///////
	}
});


export const { 
	addItemRedux,
	addOneItemRedux,
	clearCartRedux,
	removeItemRedux,
	removeOneItemRedux
} = cartSlice.actions;

export default cartSlice.reducer;
