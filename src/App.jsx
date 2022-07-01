import React from 'react';



//Hooks
import { getLocalStorageItems } from './hooks/cartHooks';


//Redux
import { useSelector } from 'react-redux';


//MATERIAL DESIGN
//Hooks
import useMediaQuery from '@mui/material/useMediaQuery'; //For responsiveness


//Custom components
import AppDesktop	from './AppDesktop';
import AppMobile	from './AppMobile';


//Main component content
const App = () => {

	const cartState = useSelector( state => state.cart );

	//To know if user is on desktop or mobile device
	const isDesktop = useMediaQuery( '(min-width: 768px)' );

	//Component render
	return (
		<>
			{ isDesktop && <AppDesktop /> }
			{!isDesktop && <AppMobile /> }
		</>
	);
};


export default App; //Export main component
