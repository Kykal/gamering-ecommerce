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
const ComponentsPage = () => {

	const isDesktop = useMediaQuery('(min-width: 600px)');


	//Component render
	return (
		<>
			{ isDesktop && (
				<>
					<HeaderDesktop	/>
					<ProductsListDesktop
						uri="components"
					/>
				</>
			)}
			{!isDesktop && (
				<>
					<HeaderMobile	/>
					<ProductsListMobile
						uri="components"
					/>
				</>
			)}
		</>
	);
};


export default ComponentsPage; //Export main component
