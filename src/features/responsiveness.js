//Redux
import { createSlice } from "@reduxjs/toolkit";

export const responsivenessSlice = createSlice({
	name: "responsiveness",

	initialState: {
		isDesktop: true
	},

	reducers: {
		setDesktopValue: (state, action) => {
			state.content = action.payload
		}
	}
});

export const {
	setDesktopValue
} = responsivenessSlice.actions;

export default responsivenessSlice.reducer;