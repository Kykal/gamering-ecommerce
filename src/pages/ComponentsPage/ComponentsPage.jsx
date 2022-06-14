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
	ProductsListMobile
} from '../../components/ProductsList';


//Main component content
const ComponentsPage = () => {

	//Translations
	const [ t, i18n ] = useTranslation("global");

	//To store fetched data from web
	const [ data, setData ] = useState([]);

	//Web responsivement
	const isDesktop = useMediaQuery( '(min-width: 600px)' );

	//Filters list
	const filtersLabels = [
		"AMD",
		"ASUS",
		"Cooler Master",
		"Corsair",
		"GIGABYTE",
		"Intel",
		"PNY"
	];

	useEffect( () => {
		axios.get('components.json')
			.then( response => setData(response.data) )
			.catch( error => console.log( error ) )
	}, [] );

	
	//Component render
	return (
		<>

			{ isDesktop && (
				<>
					<HeaderDesktop	/>
					<ProductsListDesktop 
						products={data} 
						filtersLabels={filtersLabels} 
						label={t("components.label")}
						language={i18n.language}
					/>
				</>
			)}

			{!isDesktop && (
				<>
					<HeaderMobile />
					<Container maxWidth="lg" >
						<ProductsListMobile	
							products={data} 
							filtersLabels={filtersLabels} 
							label={t("components.label")}
							language={i18n.language}
						/>
					</Container>
				</>
			)}
		</>
	);
};


export default ComponentsPage; //Export main component
