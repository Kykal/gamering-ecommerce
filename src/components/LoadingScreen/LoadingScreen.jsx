import React from 'react';

//i18
import {
	useTranslation
} from 'react-i18next';


//MATERIAL DESIGN
//Components
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
//Style
import { styled } from '@mui/material/styles';


const Spinner = styled(CircularProgress)({
	color: "var(--cyan)",
});


//Main component content
const LoadingScreen = () => {
	
	//To use preferred language
	const [ t ] = useTranslation("global");
	

	//Component render
	return (
		<Box 
			display="flex" 
			justifyContent="center" 
			alignItems="center" 
			height="100vh" 
			bgcolor="var(--black-2)"
		>
			<Box textAlign="center" color="var(--cyan)" >
				<Spinner color="inherit" />
				<Typography color="inherit" variant="subtitle1" >
					{t("loadingScreen")}
				</Typography>
			</Box>
		</Box>
	);
};


export default LoadingScreen; //Export main component
