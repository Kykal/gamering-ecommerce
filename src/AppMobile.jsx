import React from 'react';


//React router
import { Routes, Route, Navigate } from 'react-router-dom';


//Custom components
import Header from './components/Mobile/Header';
//Pages
import ComponentsPage from './pages/Mobile/ComponentsPage';
import CartPage from './pages/Mobile/CartPage';


//Main component content
const AppMobile = () => {


	//Component render
	return (
		<Routes>
			<Route path="/" element={<Header />} >
				<Route path="/"				element={<span>HOME PAGE</span>} />
				<Route path="components"	element={<ComponentsPage	/>} />
				<Route path="cart"			element={<CartPage			/>} />
				<Route path="accessories"	element={<span>Accessories page</span>} />
				<Route path="peripherals"	element={<span>Peripherals page</span>} />
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};


export default AppMobile; //Export main component
