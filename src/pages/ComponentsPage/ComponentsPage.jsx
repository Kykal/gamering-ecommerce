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
	const [ filteredData, setFilteredData ] = useState([]);
	//Filters list
	const [ filtersLabels, setFiltersLabels ] = useState([]);

	//Web responsivement
	const isDesktop = useMediaQuery( '(min-width: 600px)' );

	
	useEffect( () => {
		axios.get('components.json')
		.then( response => {
			//Save response data
			const products = response.data;
						
			let filters = [];
			//Push manufacturer names into filters array
			for( let i=0; i<products.length; i++ ){
				const manufacturer = products[i].manufacturer;
				filters.push(manufacturer);
			}

			filters = [...new Set(filters)]; //Turn temporary filters array into a Set to remove duplicates.
			filters.sort(); //Sort in alpabetical order

			//Update states
			setData(products);
			setFilteredData(products)
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
					<ProductsListDesktop 
						products={data} 
						filteredProducts={filteredData}
						filtersLabels={filtersLabels} 
						label={t("components.label")}
						language={i18n.language}
					/>
				</>
			)}

			{!isDesktop && (
				<>
					<HeaderMobile />
					<Container maxWidth="lg" component="main" >
						<ProductsListMobile	
							products={data} 
							filteredProducts={filteredData}
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
