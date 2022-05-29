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
const HomePage = () => {

	const isDesktop = useMediaQuery('(min-width: 600px)');

	//Component render
	return (
		<>
			{isDesktop	&& <HeaderDesktop />}
			{!isDesktop && <HeaderMobile	/>}
		</>
	);
};


export default HomePage; //Export main component
