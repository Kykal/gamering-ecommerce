import React from 'react';


//MATERIAL DESIGN
//Components
import Typography from '@mui/material/Typography';
//Hooks
import useMediaQuery from '@mui/material/useMediaQuery';


//Custom components
import { HeaderMobile } from '../../components/Header';


//Main component content
const AccessoriesPage = () => {

	const isDesktop = useMediaQuery('(min-width: 600px)');

	//Component render
	return (
		<>
			{isDesktop && <Typography variant="h5" textAlign="center" color="var(--white-2)" >Accessories page. Only available on <strong color="var(--cyan)" >mobile</strong>, at the moment.</Typography>}
			{!isDesktop && (
				<>
					<HeaderMobile />
					<Typography variant="h6" textAlign="center" color="var(--white-2)" >
						Accessories page
					</Typography>
				</>
			)}
		</>
	);
};


export default AccessoriesPage; //Export main component
