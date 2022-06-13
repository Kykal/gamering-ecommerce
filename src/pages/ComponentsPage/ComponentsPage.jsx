import React from 'react';


//MATERIAL DESIGN
//Hooks
import useMediaQuery from '@mui/material/useMediaQuery';


//Custom components
import {
	HeaderDesktop,
	HeaderMobile
} from '../../components/Header';
import {
	ItemsShowDesktop,
	ItemsShowMobile,
} from '../../components/ItemsShow';


//Main component content
const ComponentsPage = () => {

	const isDesktop = useMediaQuery( '(min-width: 600px)' );


	//Component render
	return (
		<>

			{ isDesktop && (
				<>
					<HeaderDesktop		/>
					<ItemsShowDesktop />
				</>
			)}

			{!isDesktop && (
				<>
					<HeaderMobile		/>
					<ItemsShowMobile	/>
				</>
			)}
		</>
	);
};


export default ComponentsPage; //Export main component
