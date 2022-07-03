import React from 'react';


//React router
import { Routes, Route } from 'react-router-dom';

//Main component content
const AppDesktop = () => {


	//Component render
	return (
		<Routes>
			<Route path="/" element={""} >
				<Route path="cart" element={""} />
			</Route>
		</Routes>
	);
};


export default AppDesktop; //Export main component
