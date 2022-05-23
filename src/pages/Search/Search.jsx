import React, { lazy, Suspense } from 'react';





//MATERIAL DESIGN
//Components
import Box from '@mui/material/Box';


//Custom components
import Header from '../../components/Header';
const SearchContainer = lazy( () => import('./SearchContent') );

//Main component content
const Search = () => {


	//Component render
	return (
		<>
			<Header />
			<Suspense fallback={ <Box color="var(--cyan)" >Loading...</Box> } >
				<SearchContainer />
			</Suspense>
		</>
	);
};


export default Search; //Export main component
