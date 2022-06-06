import React, { useEffect } from 'react';


//Redux
import { fetchCartContentFromLocalStorage, fetchCartLengthFromLocalStorage } from './redux/slices/cart';
import { useDispatch } from 'react-redux';


//React router
import {
	Route,
	Routes,
	Navigate
} from 'react-router-dom';


//Pages
import {
	AccessoriesPage,
	CartPage,
	ComponentsPage,
	HomePage,
	PeripheralsPage,
	SearchPage
} from './pages';


//Main component content
const App = () => {

	const dispatch = useDispatch();
	

	//Before page loads, runs...
	useEffect( () => {
		dispatch( fetchCartContentFromLocalStorage() );
		dispatch( fetchCartLengthFromLocalStorage() );
	}, [dispatch] );


	//Component render
	return (
		<Routes>
			<Route path="/"				element={<HomePage						/>}	/>
			<Route path="components"	element={<ComponentsPage				/>}	/>
			<Route path="accessories"	element={<AccessoriesPage				/>}	/>
			<Route path="peripherals"	element={<PeripheralsPage				/>}	/>
			<Route path="search"			element={<SearchPage						/>}	/>
			<Route path="cart"			element={<CartPage						/>}	/>
			<Route path="*"				element={<Navigate to="/" replace	/>}	/>
		</Routes>
	);
};


export default App; //Export main component
