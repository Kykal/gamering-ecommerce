import React from 'react';


//MATERIAL DESIGN
//Hooks
import useMediaQuery from '@mui/material/useMediaQuery';


//Custom components
import {
	HeaderDesktop,
	HeaderMobile
} from '../../components/Header';


//Main component content
const PeripheralsPage = () => {

	const isDesktop = useMediaQuery('(min-width: 600px)');


	//Component render
	return (
		<>
			{ isDesktop && <HeaderDesktop	/>}
			{!isDesktop && <HeaderMobile	/>}
			<p style={{ color:"var(--white-1)" }} >Peripherals</p>
		</>
	);
};


export default PeripheralsPage; //Export main component
