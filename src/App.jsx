import React, { useEffect } from 'react';


//Redux
import { 
	fetchCartContentFromLocalStorage, 
	fetchCartLengthFromLocalStorage 
} from './features/cart';
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
	ProductInfo,
	ProductPage,
	SearchPage
} from './pages';


//Main component content
const App = () => {

	const dispatch = useDispatch();
	

	//Once dispatch updates its value, execute...
	useEffect( () => {
		dispatch( fetchCartContentFromLocalStorage() );
		dispatch( fetchCartLengthFromLocalStorage() );
	}, [dispatch] );


	//Component render
	return (
		<Routes>
			<Route path="/"					element={<HomePage							/>}	/>
			<Route path="components"		element={<ComponentsPage					/>}	/>
			<Route path="accessories"		element={<AccessoriesPage					/>}	/>
			<Route path="peripherals"		element={<PeripheralsPage					/>}	/>
			<Route path="search"				element={<SearchPage							/>}	/>
			<Route path="cart"				element={<CartPage							/>}	/>
			<Route path="product" exact	element={<ProductPage						/>}	>
				<Route path=":productId"	element={<ProductInfo 						/>}	/>
			</Route>
			<Route path="*"					element={<Navigate to="/" replace		/>}	/>
		</Routes>
	);
};


export default App; //Export main component
