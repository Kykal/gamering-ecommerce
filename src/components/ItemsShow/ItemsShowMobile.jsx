import React, { useState, useEffect, Suspense, lazy } from 'react';

//axios
import axios from 'axios';

//i18
import { useTranslation } from 'react-i18next';


//MATERIAL DESIGN
//Components
import Container 			from '@mui/material/Container';
import Grid					from '@mui/material/Grid';
import IconButton			from '@mui/material/IconButton';
import ImageList			from '@mui/material/ImageList';
import List					from '@mui/material/List';
import ListItem			from '@mui/material/ListItem';
import ListItemButton	from '@mui/material/ListItemButton';
import ListItemIcon		from '@mui/material/ListItemIcon';
import ListItemText		from '@mui/material/ListItemText';
import Checkbox			from '@mui/material/Checkbox';
import Typography			from '@mui/material/Typography';
//Icons
import FilterListIcon	from '@mui/icons-material/FilterList';
//Styles
import { styled } from '@mui/material/styles';


//Custom components
import Filters				from './Filters';
import LoadingProducts	from './LoadingProducts';
const ProductsList = lazy( () => import('./ProductsList') );


const Icon = styled(IconButton)({
	"& .MuiSvgIcon-root": {
		fill: "var(--white-2)",
	}
});


//Main component content
const ItemsShowMobile = () => {

	//Translations
	const [ t ] = useTranslation("global");

	//To save fetched data
	const [ fetchData, setFetchData ] = useState([]);

	//Filter button status
	const [ filterButtonStatus, setFilterButtonStatus ] = useState(false);

	//User filter list
	const [ activeFilters, setActiveFilters ] = useState([
		
	]);

	const [ activeFiltersIndex, setActiveFiltersIndex ] = useState([]);


	useEffect( () => {
		//'Fetch' data from web
		axios.get('/components.json')
			.then( response => setFetchData(response.data) )
			.catch( error => console.log( error ) )

	}, [] );

	//Description. What does this?
	const filterButtonHandler = () => {
		setFilterButtonStatus(!filterButtonStatus);
	};

	//Description. What does this?
	const filtersOptionsHandler = (value, element) => () => {
		//For index
		const currentIndex = activeFiltersIndex.indexOf(value);
		const newChecked = [...activeFiltersIndex];
		//For label
		const newLabel = [...activeFilters];

		if( currentIndex === -1 ){
			newChecked.push(value);
			newLabel.push(element);
		} else {
			newChecked.splice(currentIndex, 1);
			newLabel.splice(currentIndex, 1);
		}

		setActiveFilters(newLabel);
		setActiveFiltersIndex(newChecked);
	};

	//Component render
	return (
		<Container component="main" sx={{ paddingTop: "1.25em", paddingBottom: "1.25em" }} >
			<Grid container spacing={0} paddingBottom="1em" >
				<Grid item xs={10} display="flex" justifyContent="flex-start" alignItems="center" >
					<Typography variant="h5" color="var(--white-2)" >Components</Typography>
				</Grid>
				<Grid item xs={2} display="flex" justifyContent="flex-end" alignItems="center" >
					<Icon onClick={filterButtonHandler} >
						<FilterListIcon />
					</Icon>
				</Grid>
				{filterButtonStatus && (
					<Grid item container xs={12} display="flex" justifyContent="flex-start" alignItems="center" >
						<Grid item xs={4} >
							<Typography variant="subtitle2" color="var(--white-2)" >{t("components.manufacturer")}</Typography>
							<List dense disablePadding >
								{['AMD', 'Intel', 'PNY'].map( (element, index) => (
									<ListItem key={index} dense disableGutters disablePadding >
										<ListItemButton dense onClick={filtersOptionsHandler(index, element)} >
											<ListItemIcon >
												<Checkbox
													name={element}
													checked={activeFiltersIndex.indexOf(index) !== -1 }
													sx={{ 
														color:"var(--white-2)",
														"&.Mui-checked": {
															color: "var(--magenta)"
														},
													}}
													edge="start"
													disableRipple
													tabIndex={-1}
												/>
											</ListItemIcon>
											<ListItemText primary={element} />
										</ListItemButton>
									</ListItem>
								) )}
							</List>
						</Grid>
						<Grid item xs={4} ></Grid>
						<Grid item xs={4} ></Grid>
					</Grid>
				)}
			</Grid>
			<Suspense fallback={ <LoadingProducts /> } >
				<ImageList cols={2} >
					<ProductsList products={fetchData} filters={activeFilters} />
				</ImageList>
			</Suspense>
		</Container>
	);
};


export default ItemsShowMobile; //Export main component
