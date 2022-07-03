import React, { useState, useEffect, Suspense, lazy } from 'react';


//axios
import axios from 'axios';


//MATERIAL DESIGN
//Components
import Box			from '@mui/material/Box';
import Typography	from '@mui/material/Typography';
import IconButton	from '@mui/material/IconButton';
import ImageList	from '@mui/material/ImageList';
import Drawer		from '@mui/material/Drawer';
//Icons
import FilterAltIcon from '@mui/icons-material/FilterAlt';


//Custom components
import ItemSkeleton	from './ItemSkeleton';
import FiltersDrawer	from './FiltersDrawer';
const Item = lazy( () => import('./Item') );


//Main component content
const ProductsList = (props) => {

	//Array of products
	const [ componentsList, setComponentsList ] = useState([]); //Auxiliary array
	const [ filteredList, setFilteredList ] = useState([]); //Array in use

	//Filters
	const [ filters, setFilters ] = useState({
		prices: {
			max: 0,
			min: 0,
			actual: [0, 0],
			minDistance: 0
		},
		manufacturers: {
			index: [],
			label: [],
			active: []
		}
	});

	//Status of filters drawer
	const [ filtersDrawerStatus, setFiltersDrawerStatus ] = useState(false);

	//Before page loads...
	useEffect( () => {
		document.title = `Gamering - ${props.label}`;

		axios.get('/database.json')
			.then( response => {

				const data = response.data;

				//Array of components of requested category
				const components = data.filter( component => component.category === props.category );

				//Filters
				const minPrice =  Math.floor(Math.min(...components.map( component => component.price )));
				const maxPrice =  Math.ceil(Math.max(...components.map( component => component.price )));

				const tempManufacturers = [...new Set(components.map( component => component.manufacturer ))].sort();


				setFilters({
					...filters,
					prices: {
						...filters.prices,
						min: minPrice,
						max: maxPrice,
						actual: [minPrice, maxPrice],
						minDistance: maxPrice/4
					},
					manufacturers: {
						...filters.manufacturers,
						label: tempManufacturers
					}
				});
				setComponentsList(components);
				setFilteredList(components);
			} )
			.catch( error => console.log(error) );
	}, [] );

	//When filters are required...
	useEffect( () => {

		//Save price ranges
		const ranges = filters.prices.actual;
		const manufacturers = filters.manufacturers.active;

		//Create a new temporary list
		let newList = componentsList.filter( component => component.price >= ranges[0] && component.price <= ranges[1] );

		//If there are at least one manufacturer as filter, filter the list
		if( manufacturers.length !== 0 ){
			newList = newList.filter( component => manufacturers.some( manufacturer => component.manufacturer == manufacturer ) );
		}


		//Update list state
		setFilteredList( newList );

	}, [filtersDrawerStatus] );


	//Close filters drawer
	const closeFiltersDrawer = () => {
		setFiltersDrawerStatus(false);
	};

	//Open filters drawer
	const openFiltersDrawer = () => {
		setFiltersDrawerStatus(true);
	};


	//Update manufacturers filter
	const manufacturersFilterHandler = (newManufacturersIndex, newManufacturersLabel) => {
		setFilters({
			...filters,
			...filters.prices,
			manufacturers: {
				...filters.manufacturers,
				index: newManufacturersIndex,
				active: newManufacturersLabel
			}
		})
	};

	//Update price range filter 
	const priceRangeHandlers = (event, newValue, activeThumb) => {
		
		if( !Array.isArray(newValue) ){
			return;
		}

		let newRange = [];

		//If user is using left thumb...
		if( activeThumb === 0 ){
			
			newRange = [Math.min( newValue[0], filters.prices.actual[1] - filters.prices.minDistance ), filters.prices.actual[1]];			
		} else {
			newRange = [ filters.prices.actual[0], Math.max( newValue[1], filters.prices.actual[0] + filters.prices.minDistance ) ];
		}

		setFilters({
			...filters,
			prices: {
				...filters.prices,
				actual: newRange
			}
		});

	};

	//Component render
	return (
		<>
			<Box display="flex" justifyContent="space-between" alignItems="center" paddingBottom="0.75em" >
				<Typography variant="h5" >{props.label}</Typography>
				<IconButton sx={{ color: filtersDrawerStatus ? "var(--magenta)" : "var(--white-2)" }} onClick={openFiltersDrawer} >
					<FilterAltIcon />
				</IconButton>
			</Box>
			{filteredList.length > 0 ? (
				<ImageList>
					{filteredList.map( (component, index) => (
						<Suspense key={index} fallback={<ItemSkeleton />} >
							<Item component={component} />
						</Suspense>
					) )}
				</ImageList>
			) : (
				<Typography variant="h4" textAlign="center" >
					No matches found
				</Typography>
			)}
			<Drawer 
				open={filtersDrawerStatus}
				onClose={closeFiltersDrawer}
				
				anchor="bottom"

				sx={{
					"& .MuiPaper-root":{
						backgroundColor: "var(--black-3)",
						color: "var(--white-2)",
						borderRadius: "0.5em 0.5em 0 0",
						padding: "0.75em"
					}
				}}
			>
				<FiltersDrawer 
					closeDrawer={closeFiltersDrawer} 
					filters={filters}
					
					onPriceRangeChange={priceRangeHandlers}
					onManufacturersChange={manufacturersFilterHandler}
				/>
			</Drawer>
		</>
	);
};


export default ProductsList; //Export main component
