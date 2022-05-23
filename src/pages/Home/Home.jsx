import React, { Suspense, lazy } from 'react';

//MATERIAL DESIGN
//Components
import Box from '@mui/material/Box';


//Custom components
import Header from '../../components/Header';


//Main component content
const Home = () => {

	//Component render
	return (
		<>
			<Header />
			<main>
				<span style={{ color: "white" }}>Texto cualquiera</span>
			</main>
		</>
	);
};


export default Home; //Export main component
