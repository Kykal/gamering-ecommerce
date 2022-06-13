import React from 'react';


//React router
import { useSearchParams } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//Hooks
import useMediaQuery from '@mui/material/useMediaQuery';


//Custom components
import {
	HeaderDesktop,
	HeaderMobile
} from '../../components/Header';


//Main component content
const SearchPage = () => {

	const isDesktop = useMediaQuery( '(min-width: 600px)' );

	const [ searchParams ] = useSearchParams();

	const query = searchParams.get('query');

	//Component render
	return (
		<>
			{ isDesktop && <HeaderDesktop	/>}
			{!isDesktop && <HeaderMobile	/>}
			<Typography variant="h5" textAlign="center" color="var(--white-2)" >
				Search - {query}
			</Typography>
			<Box display="flex" alignItems="center" justifyContent="center" height="25vh" >
				<Button
					variant="contained"
					sx={{ 
						backgroundColor: "var(--black-3)", 
					}}
					
					onClick={ () => {
						console.log( "test" );
					} }
				>
					ADD ITEM TO CART
				</Button>
			</Box>
		</>
	);
};


export default SearchPage; //Export main component
