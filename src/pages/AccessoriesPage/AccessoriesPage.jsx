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
	const [ t, i18n ] = useTranslation("global");

	//To store fetched data from web
	const [ data, setData ] = useState([]);
	const [ filteredData, setFilteredData ] = useState([]);
	const [ filtersLabels, setFiltersLabels ] = useState([]);

	//Web responsivement
	const isDesktop = useMediaQuery('(min-width: 600px)');

	useEffect( () => {
		axios.get('accessories.json')
			.then( response => {
				
				//Save products from response data
				const products = response.data;

				let filters = [];

				for( let i=0; i<products.length; i++ ){
					const manufacturer = products[i].manufacturer;
					filters.push(manufacturer);
				}

				filters = [...new Set(filters)];
				filters.sort();
				
				
				//Update state
				setData(response.data);
				setFiltersLabels(filters);
			} )
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
							filteredProducts={filteredData}
							filtersLabels={filtersLabels}
							label={t("accessories.label")}
							language={i18n.language}
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
							filteredProducts={filteredData}
							filtersLabels={filtersLabels}
							label={t("accessories.label")}
							language={i18n.language}
						/>
					</Container>
				</>
			)}
		</>
	);
};


export default AccessoriesPage; //Export main component
