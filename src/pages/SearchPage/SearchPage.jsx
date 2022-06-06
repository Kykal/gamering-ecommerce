import React from 'react';


//React router
import { useSearchParams } from 'react-router-dom';


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
		</>
	);
};


export default SearchPage; //Export main component
