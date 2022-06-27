import React from 'react';


//MATERIAL DESIGN
//Hooks
import useMediaQuery from '@mui/material/useMediaQuery';


//Custom components
import {
	HeaderDesktop,
	HeaderMobile
} from '../../components/Header';
import {
	ProductsListDesktop,
	ProductsListMobile,
} from '../../components/ProductsList';


//Main component content
const PeripheralsPage = () => {

	const isDesktop = useMediaQuery('(min-width: 600px)');

	//Component render
	return (
		<>
			{ isDesktop && (
				<>
					<HeaderDesktop	/>
					<ProductsListDesktop
						uri="peripherals"
					/>
				</>
			)}
			{!isDesktop && (
				<>
					<HeaderMobile	/>
					<ProductsListMobile
						uri="peripherals"
					/>
				</>
			)}
		</>
	);
};


export default PeripheralsPage; //Export main component
