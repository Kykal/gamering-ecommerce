import React, { useState, useEffect } from 'react';


//Translations
import { useTranslation } from 'react-i18next';


//axios
import axios from 'axios';


//MATERIAL DESIGN
//Components
import Container from '@mui/material/Container';
//Hooks
import useMediaQuery from '@mui/material/useMediaQuery';


//Custom components
import {
	HeaderDesktop,
	HeaderMobile
} from '../../components/Header';
import {
	ProductsListDesktop,
	ProductsListMobile,
} from '../../components/ProductsList';


//Main component content
const AccessoriesPage = () => {

	//Translations
	const [ t ] = useTranslation("global");

	//To store fetched data from web
	const [ data, setData ] = useState([]);

	//Filter lists
	const filterLabels = [
		"NEEWER",
		"LyxPro",
		"Redlemon"
	];

	//Web responsivement
	const isDesktop = useMediaQuery('(min-width: 600px)');

	useEffect( () => {
		axios.get('accessories.json')
			.then( response => setData(response.data) )
			.catch( error => console.log( error ) )
	}, [] );
	

	//Component render
	return (
		<>
			{ isDesktop && (
				<>
					<HeaderDesktop	/>
					<Container maxWidth="lg">
						<ProductsListDesktop
							products={data}
							filterLabels={filterLabels}
							label={t("accessories.label")}
						/>
					</Container>
				</>
			)}
			
			{!isDesktop && (
				<>
					<HeaderMobile	/>
					<Container maxWidth="lg">
						<ProductsListMobile
							products={data}
							filterLabels={filterLabels}
							label={t("accessories.label")}
						/>
					</Container>
				</>
			)}
		</>
	);
};


export default AccessoriesPage; //Export main component
