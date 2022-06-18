import React, { useEffect, useState, lazy, Suspense } from 'react';


//i18n
import { useTranslation } from 'react-i18next';

//axios
import axios from 'axios';


//MATERIAL DESIGN
//Components
import Container			from '@mui/material/Container';
import Grid					from '@mui/material/Grid';
import Typography			from '@mui/material/Typography';
import ImageList			from '@mui/material/ImageList';
import IconButton			from '@mui/material/IconButton';
//Icons
import FilterAltIcon		from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon	from '@mui/icons-material/FilterAltOff';


//Custom components
import FilterLabels		from './FilterLabels';
import ProductsSkeleton from './ProductsSkeleton';
const	 Products = lazy( () => import('./Products') );

//Main component content
const ProductsListMobile = (props) => {

	//Translations
	const [ t ] = useTranslation("global");

	
	//List of fetched products
	const [ products, setProducts ] = useState([]);
	const [ auxiliaryProducts, setAuxiliaryProducts ] = useState([]); //An auxiliary that save original array
	//Defines if filters will render or not
	const [ filterStatus, setFilterStatus ] = useState(false);
	//List of filters
	const [ filtersList, setFiltersList ] = useState([]);
	//Current active filters (its label and index)
	const [ activeFilters, setActiveFilters ] = useState({
		index: [],
		labels: []
	});


	//Fetch data
	useEffect( () => {
		axios.get(`${props.uri}.json`)
			.then( response => {
				const fetchedProducts = response.data;

				//Make a temporal list to save manufacturers as filters
				let tempFiltersList = [];
				for( let i=0; i<fetchedProducts.length; i++ ){
					tempFiltersList.push( fetchedProducts[i].manufacturer );
				}

				tempFiltersList = [...new Set(tempFiltersList)]; //Remove duplicates by temporal declaring as Set
				tempFiltersList.sort(); //Sort by alphabet

				//Save state
				setFiltersList(tempFiltersList);
				setAuxiliaryProducts(fetchedProducts);
				setProducts(fetchedProducts);	
			} )
			.catch( error => console.log(error) );
	}, [] ); //Do once

	//When activeFilters has an update...
	useEffect( () => {
		//Grab auxiliary all products.
		let newProducts = auxiliaryProducts;

		//If there is no filter, reset products listing
		if( activeFilters.labels.length === 0 ){
			setProducts(newProducts);
			return;
		}

		//Filter all products with active filters
		newProducts = newProducts.filter( product => activeFilters.labels.some( label => product.manufacturer === label ));

		//Update state 
		setProducts(newProducts);
	}, [activeFilters] );

	//Enable/Disable filters labels render
	const filterButtonHandler = () => {
		setFilterStatus(!filterStatus);
	};

	const updateActiveFilters = (newIndex, newLabel) => {
		setActiveFilters({
			index: newIndex,
			labels: newLabel
		});
	};

	//Component render
	return (
		<Container maxWidth="lg" component="main">
			<Grid container spacing={0} paddingTop="1.25em" paddingBottom="1em" >
				<Grid item xs={10} display="flex" alignItems="center" justifyContent="flex-start" >
					<Typography variant="h5" >{t(`${props.uri}.label`)}</Typography>
				</Grid>
				<Grid item xs={2} display="flex" alignItems="center" justifyContent="flex-end" >
					<IconButton onClick={filterButtonHandler} >
						<FilterAltIcon
							sx={{
								//If filters are not rendered, color it 'white', if not, color it 'magenta'
								color: filterStatus ? "var(--magenta)" : "var(--white-2)" 
							}}
						/>
					</IconButton>
				</Grid>
				{filterStatus && (
					<>
						<Grid item xs={12}>
							<Typography variant="subtitle1" >{t("manufacturer")}</Typography>
						</Grid>
						<Grid item container xs={12}>
							<FilterLabels 
								filters={filtersList} 
								activeFilters={activeFilters} 
								updateActiveFilters={updateActiveFilters}
							/>
						</Grid>
					</>
				)}
			</Grid>
			<ImageList>
				<Suspense fallback={<ProductsSkeleton />} >
					<Products products={products} />
				</Suspense>
			</ImageList>
		</Container>
	);
};


export default ProductsListMobile; //Export main component
