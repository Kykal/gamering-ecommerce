import React, { Suspense, lazy } from 'react';

//MATERIAL DESIGN
//Hooks
import { useMediaQuery } from '@mui/material'; //Media queries

//Custom components
import Header from '../../components/Header';
import HeaderMobile from '../../components/HeaderMobile';


//Main component content
const Home = () => {

	//Is bigger than 850px?
	const isDesktop = useMediaQuery('(min-width: 768px)');

	//Component render
	return (
		<>
			{  isDesktop && <Header /> }
			{ !isDesktop && <HeaderMobile /> }
			<main>
				<span style={{ color: "white" }}>Texto cualquiera</span>
			</main>
		</>
	);
};


export default Home; //Export main component
