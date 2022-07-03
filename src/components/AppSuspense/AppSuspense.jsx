import React from 'react';

//Assets
import Gamering from '../../assets/img/logo/logo.png';


//MATERIAL DESIGN
//Components
import Box from '@mui/material/Box';
//Styles
import { styled } from '@mui/material/styles';


const Logo = styled('img')({
	width: "50%",
	height: "auto",
});


//Main component content
const AppSuspense = () => {


	//Component render
	return (
		<Box display="flex" justifyContent="center" alignItems="center" height="100vh" >
			<Logo src={Gamering} alt="Gamering" />
		</Box>
	);
};


export default AppSuspense; //Export main component
