import React, { useState, lazy, Suspense } from 'react';


//MATERIAL DESIGN
//Components
import Grid						from '@mui/material/Grid';
import IconButton				from '@mui/material/IconButton';
import ImageList				from '@mui/material/ImageList';
import ImageListItem			from '@mui/material/ImageListItem';
import ImageListItemBar		from '@mui/material/ImageListItemBar';
import ListSubheader			from '@mui/material/ListSubheader';
import Typography				from '@mui/material/Typography';
//Icons
import FilterListIcon		from '@mui/icons-material/FilterList';
import FilterListOffIcon	from '@mui/icons-material/FilterListOff';
import InfoIcon				from '@mui/icons-material/Info';
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
const ProductsListMobile = ({ products, filtersLabels, label, language }) => {

	const [ showFilters, setShowFilters ] = useState(false);

	//Description. What does this?
	const filterButtonHandler = () => {
		setShowFilters( !showFilters );
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
					<Grid item container xs={12}>
						Filters
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
