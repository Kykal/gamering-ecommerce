import React, { useState, lazy, Suspense } from 'react';

//Translations
import { useTranslation } from 'react-i18next';


//MATERIAL DESIGN
//Components
import Grid						from '@mui/material/Grid';
import List						from '@mui/material/List';
import ListItem				from '@mui/material/ListItem';
import ListItemButton		from '@mui/material/ListItemButton';
import ListItemIcon			from '@mui/material/ListItemIcon';
import ListItemText			from '@mui/material/ListItemText';
import Checkbox				from '@mui/material/Checkbox';
import IconButton				from '@mui/material/IconButton';
import ImageList				from '@mui/material/ImageList';
import Typography				from '@mui/material/Typography';
//Icons
import FilterListIcon		from '@mui/icons-material/FilterList';
import FilterListOffIcon	from '@mui/icons-material/FilterListOff';
//Styles
import { styled }				from '@mui/material/styles';


//Custom components
import ProductsSkeleton from './ProductsSkeleton';
const Products = lazy( () => import('./Products') );


const StyledButton = styled(IconButton)({
	"& .MuiSvgIcon-root": {
		color: "var(--white-2)"
	}
});


//Main component content
const ProductsListMobile = ({ products, filteredProducts, filtersLabels, label, language }) => {

	//Translation
	const [ t ] = useTranslation("global");


	const [ activeFilters, setActiveFilters ] = useState([]);
	const [ showFilters, setShowFilters ] = useState(false);

	//Renders filters list
	const filterButtonHandler = () => {
		setShowFilters( !showFilters );
	};

	const filtersLabelsHalfLength = Math.ceil(filtersLabels.length/2); //Get a half number of array
	const filtersFirstHalf	= filtersLabels.slice( 0, filtersLabelsHalfLength ); //Slice from beginning to half
	const filtersSecondHalf	= filtersLabels.slice( -(filtersLabelsHalfLength-1) ); //Slice the rest (from half to end)

	


	//Manages checkbox states
	const filtersToggleHandler = (value) => () => {
		const currentIndex = activeFilters.indexOf(value);
		const newChecked = [...activeFilters];

		if( currentIndex === -1 ){
			newChecked.push(value);
		}else{
			newChecked.splice(currentIndex, 1);
		}

		setActiveFilters(newChecked);
	};

	//Component render
	return (
		<>
			<Grid container spacing={0} paddingTop="1em" paddingBottom="1em" >
				<Grid item xs={10} display="flex" justifyContent="flex-start" alignItems="center" >
					<Typography variant="h5" >{label}</Typography>
				</Grid>
				<Grid item xs={2} display="flex" justifyContent="flex-end" alignItems="center" >
					<StyledButton onClick={filterButtonHandler} >
						{showFilters ? <FilterListOffIcon /> : <FilterListIcon /> }
					</StyledButton>
				</Grid>
				{showFilters &&				
					<Grid item container xs={12} spacing={0}>
						<Grid item xs={12} >
							<Typography variant="subtitle1" >{t("manufacturer")}</Typography>
						</Grid>
						<Grid item xs={6}>
							<List>
								{filtersFirstHalf.map( (filter, index) => (
									<ListItem key={index} disablePadding >
										<ListItemButton role={undefined} dense onClick={ filtersToggleHandler(index) } >
											<ListItemIcon>
												<Checkbox
													edge="start"
													checked={activeFilters.indexOf(index) !== -1}
													tabIndex={-1}
													disableRipple
													sx={{
														color: "var(--white-2)",
														"&.Mui-checked": {
															color: "var(--magenta)"
														}
													}}
												/>
											</ListItemIcon>
											<ListItemText primary={filter} />
										</ListItemButton>
									</ListItem>
								) )}
							</List>
						</Grid>
						<Grid item xs={6}>
							<List>
								{filtersSecondHalf.map( (filter, index) => (
									<ListItem key={index} disablePadding >
										<ListItemButton role={undefined} dense onClick={ filtersToggleHandler((index+filtersLabelsHalfLength)) } >
											<ListItemIcon>
												<Checkbox
													edge="start"
													checked={ activeFilters.indexOf((index+filtersLabelsHalfLength)) !== -1 }
													tabIndex={-1}
													disableRipple
													sx={{
														color: "var(--white-2)",
														"&.Mui-checked": {
															color: "var(--magenta)"
														}
													}}
												/>
											</ListItemIcon>
											<ListItemText primary={filter} />
										</ListItemButton>
									</ListItem>
								) )}
							</List>
						</Grid>
					</Grid>
				}
			</Grid>
			<ImageList cols={2} >
				<Suspense fallback={<ProductsSkeleton />} >
					<Products products={products} language={language} />
				</Suspense>
			</ImageList>
		</>
	);
};


export default ProductsListMobile; //Export main component
