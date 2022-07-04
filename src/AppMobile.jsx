import React from 'react';


//Redux
import { useDispatch } from 'react-redux';
import { clearCartRedux } from './features/cart/cartSlice';


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
import SearchPage			from './pages/Mobile/SearchPage/SearchPage';
import ProductPage		from './pages/Mobile/ProductPage/ProductPage';


//Main component content
const AppMobile = () => {

	const dispatch = useDispatch();

	//Component render
	return (
		<Routes>
			<Route path="/" element={<Header />} >
				<Route path="/"						element={<button onClick={() => dispatch(clearCartRedux())} >CLEAR LOCALSTORAGE</button>} />
				<Route path="accessories"			element={<AccessoriesPage				/>} />
				<Route path="cart"					element={<CartPage						/>} />
				<Route path="components"			element={<ComponentsPage				/>} />
				<Route path="peripherals"			element={<PeripheralsPage				/>} />
				<Route path="search"					element={<SearchPage						/>} />
				<Route path="product"				element={<Navigate to="/" replace	/>} />
				<Route path="product/:productId" element={<ProductPage					/>} />
			</Route>
			{/*<Route path="*" element={<Navigate to="/" replace />} />*/}
		</Routes>
	);
};


export default AppMobile; //Export main component
