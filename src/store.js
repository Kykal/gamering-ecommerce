//Redux
import { configureStore } from "@reduxjs/toolkit";


//Import reducers
import cartReducer from "./features/cart/cartSlice";

//Set all slices in reducer class property
export const store = configureStore({
	reducer: {
		cart: cartReducer
	}
});
