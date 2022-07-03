import React, { Suspense, lazy } from 'react';


//MATERIAL DESIGN
//Hooks
import useMediaQuery from '@mui/material/useMediaQuery'; //For responsiveness


//Custom 
import AppSuspense from './components/AppSuspense';
const AppDesktop	= lazy( () => import('./AppDesktop') );
const AppMobile	= lazy( () => import('./AppMobile') );


//Main component content
const App = () => {

	//To know if user is on desktop or mobile device
	const isDesktop = useMediaQuery( '(min-width: 768px)' );

	//Component render
	return (
		<Suspense fallback={<AppSuspense />}>
			{ isDesktop && <AppDesktop /> }
			{!isDesktop && <AppMobile /> }
		</Suspense>
	);
};


export default App; //Export main component
