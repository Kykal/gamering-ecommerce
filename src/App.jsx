import React from 'react';


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
	PageNotFound,
	PeripheralsPage,
	SearchPage
} from './pages';


//Main component content
const App = () => {


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
