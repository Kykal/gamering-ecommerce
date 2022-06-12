import React from 'react';



//React router
import { Outlet } from 'react-router-dom';


//MATERIAL DESIGN
//Hook
import useMediaQuery from '@mui/material/useMediaQuery';



//Custom components
import {
	HeaderDesktop,
	HeaderMobile
} from '../../components/Header';



//Main component content
const ProductPage = () => {

	const isDesktop = useMediaQuery( '(min-width: 600px)' );

	//Component render
	return (
		<>
			{ isDesktop && <HeaderDesktop /> }
			{!isDesktop && <HeaderMobile /> }
		</>
	);
};


export default ProductPage; //Export main component
