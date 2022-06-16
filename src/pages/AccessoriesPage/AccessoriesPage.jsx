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
const AccessoriesPage = () => {

	const isDesktop = useMediaQuery('(min-width: 600px)');


	//Component render
	return (
		<>
			{ isDesktop && (
				<>
					<HeaderDesktop	/>
					<ProductsListDesktop
						uri="accessories"
					/>
				</>
			)}
			{!isDesktop && (
				<>
					<HeaderMobile	/>
					<ProductsListMobile
						uri="accessories"
					/>
				</>
			)}
		</>
	);
};


export default AccessoriesPage; //Export main component
