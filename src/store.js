//Redux
import { configureStore } from "@reduxjs/toolkit";


//Import reducers
import cart from "./features/cart";


//Set all slices in reducer class property
export const store = configureStore({
	reducer: {
		cart
	},
});