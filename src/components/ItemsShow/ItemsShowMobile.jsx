import React, { useState, useEffect, Suspense, lazy } from 'react';

//axios
import axios from 'axios';


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

	//To save fetched data
	const [ fetchData, setFetchData ] = useState([]);

	//Filter button status
	const [ filterButtonStatus, setFilterButtonStatus ] = useState(false);

	//User filter list
	const [ activeFilters, setActiveFilters ] = useState([
		"Intel", "AMD", "PNY"
	]);


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
							<Typography variant="subtitle2" color="var(--white-2)" >Manufacturer</Typography>
							<List dense disablePadding >
								{['AMD', 'Intel', 'Nvidia'].map( (element, index) => (
									<ListItem key={index} dense disableGutters disablePadding >
										<ListItemButton role={undefined} dense>
											<ListItemIcon>
												<Checkbox edge="start"  />
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
