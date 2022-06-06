import React from 'react';


//MATERIAL DESIGN
//Components
import Typography from '@mui/material/Typography';
//Hooks
import useMediaQuery from '@mui/material/useMediaQuery';


//Custom component
import {
	HeaderDesktop,
	HeaderMobile
} from '../../components/Header'


//Main component content
const CartPage = () => {

	const isDesktop = useMediaQuery('(min-width: 600px)');

		
	//Component render
	return (
		<>
			{ isDesktop && <HeaderDesktop	/> }
			{!isDesktop && <HeaderMobile	/> }
			<Typography variant="h5" textAlign="center" color="var(--white-1)" >
				Cart page
			</Typography>
		</>
	);
};


export default CartPage; //Export main component
