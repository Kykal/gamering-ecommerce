import React from 'react';


//MATERIAL DESIGN
//Components
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//Hooks
import useMediaQuery from '@mui/material/useMediaQuery';


//Custom components
import {
	HeaderDesktop,
	HeaderMobile
} from '../../components/Header';


//Main component content
const HomePage = () => {

	const isDesktop = useMediaQuery( '(min-width: 600px)' );

	//Component render
	return (
		<>
			{ isDesktop	&& <HeaderDesktop />}
			{!isDesktop && <HeaderMobile	/>}
			<Typography variant="h5" textAlign="center" color="var(--white-2)" >
				Home page
			</Typography>
			<Box textAlign="center" >
				<Button variant="contained" onClick={() => localStorage.clear()} >
					Clear localStorage
				</Button>
			</Box>
		</>
	);
};


export default HomePage; //Export main component
