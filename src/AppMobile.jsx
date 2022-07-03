import React from 'react';


//React router
import { 
	Routes, 
	Route, 
	Navigate
} from 'react-router-dom';


//Custom components
import Header from './components/Mobile/Header';
//Pages
import AccessoriesPage	from './pages/Mobile/AccessoriesPage/AccessoriesPage';
import CartPage			from './pages/Mobile/CartPage';
import ComponentsPage	from './pages/Mobile/ComponentsPage';
import PeripheralsPage	from './pages/Mobile/PeripheralsPage';


//Main component content
const AppMobile = () => {


	//Component render
	return (
		<Routes>
			<Route path="/" element={<Header />} >
				<Route path="/"				element={<button onClick={() => localStorage.setItem('cart', '[]')} >CLEAR LOCALSTORAGE</button>} />
				<Route path="components"	element={<ComponentsPage		/>} />
				<Route path="cart"			element={<CartPage				/>} />
				<Route path="accessories"	element={<AccessoriesPage		/>} />
				<Route path="peripherals"	element={<PeripheralsPage		/>} />
				<Route path="product" element={<Navigate to="/" replace	/>} />
				<Route path="product/:productId" element={<span>Product page</span>} />
			</Route>
			{/*<Route path="*" element={<Navigate to="/" replace />} />*/}
		</Routes>
	);
};


export default AppMobile; //Export main component
