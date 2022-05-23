import React from 'react';

//i18n
import { useTranslation } from 'react-i18next';


//MATERIAL DESIGN
//Components
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

//Main component content
const MainLoading = () => {

	const [ t ] = useTranslation("global");


	//Component render
	return (
		<Box 
			height="100vh" 
			display="flex" 
			justifyContent="center" 
			alignItems="center"
			color="var(--cyan)"
			bgcolor="var(--black-2)"
		>
			<Box textAlign="center" >
				<CircularProgress style={{ color:"var(--cyan)" }} />
				<Typography variant="subtitle1" color="var(--cyan)" >
					{t("suspense")}
				</Typography>
			</Box>
		</Box>
	);
};


export default MainLoading; //Export main component
