import React from 'react';


//MATERIAL DESIGN
//Components
import Typography from '@mui/material/Typography';
//Hooks
import useMediaQuery from '@mui/material/useMediaQuery';


//Custom components
import {
	HeaderDesktop,
	HeaderMobile
} from '../../components/Header';


//Main component content
const ComponentsPage = () => {

	const isDesktop = useMediaQuery( '(min-width: 600px)' );


	//Component render
	return (
		<>
			{ isDesktop && <HeaderDesktop	/>}
			{!isDesktop && <HeaderMobile	/>}
			<Typography variant="h4" textAlign="center" color="var(--white-2)" >Components page</Typography>			
		</>
	);
};


export default ComponentsPage; //Export main component
