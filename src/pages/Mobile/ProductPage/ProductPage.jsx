import React, { useState, useEffect } from 'react';


//Hooks
import { unparseURL		} from '../../../hooks/queryHooks';
import { transformPrice	} from '../../../hooks/priceHooks';

//Axios
import axios from 'axios';


//React router
import { useParams } from 'react-router-dom';


//Redux
import { useDispatch		} from 'react-redux';
import { addItemRedux	} from '../../../features/cart/cartSlice';


//MATERIAL DESIGN
//Components
import Box			from '@mui/material/Box';
import Button		from '@mui/material/Button';
import Divider		from '@mui/material/Divider';
import IconButton	from '@mui/material/IconButton';
import Typography	from '@mui/material/Typography';
import Paper		from '@mui/material/Paper';
import Grid			from '@mui/material/Grid';
//Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//Styles
import { styled } from '@mui/material/styles';

const Image = styled('img')({
	width: "100%"
});

const FavButton = styled(IconButton)({
	color: "var(--magenta)"
})



const Label = ({label}) => {
	return(
		<Grid item xs={4} display="flex" justifyContent="flex-end" alignItems="center" >
			<Typography variant="subtitle1" sx={{ color: "var(--magenta)" }} textAlign="right" >
				<strong>
					{label}
				</strong>
			</Typography>
		</Grid>
	)
};

const Info = ({info}) => {
	return(
		<Grid item xs={8} display="flex" justifyContent="flex-start" alignItems="center"  >
			<Typography variant="subtitle1" sx={{ color:"var(--white-2)" }} >
				{info}
			</Typography>
		</Grid>
	)
};



//Main component content
const ProductPage = () => {
	
	const dispatch = useDispatch();
	const { productId } = useParams();
	const [ isFav, setIsFav ] = useState(false);
	const [ product, setProduct ] = useState({});
	const [ showMore, setShowMore ] = useState(false);

	useEffect( () => {
		axios.get('/database.json')
			.then( response => {
				const key = unparseURL(productId);
				let result = response.data;

				result = result.filter( product => product.fullName === key );

				setProduct(...result);
			} )
	}, [productId] );

	//Description. What does this?
	const favButtonHandler = () => {
		setIsFav( prevState => !prevState);
	};

	//Description. What does this?
	const showMoreHandler = () => {
		setShowMore(true);
	};

	//Description. What does this?
	const addItem = () => {
		dispatch( addItemRedux(product) );
	};

	//Component render
	return (
		<>
			<Typography variant="h5" paddingBottom="0.75em" >{product.fullName}</Typography>
			<Image 
				src={product.img} 
				alt={product.fullName} 
			/>
			<Box display="flex" alignItems="center" justifyContent="space-between" >
				<Typography variant="h5" sx={{ color: "var(--magenta)" }} >
					US$ {transformPrice(product?.price)}
				</Typography>
				<FavButton size="medium" onClick={favButtonHandler} >
					{isFav ? <FavoriteIcon fontSize='inherit' /> : <FavoriteBorderIcon fontSize='medium' /> }
				</FavButton>
			</Box>
			<Button 
				fullWidth 
				variant="contained" 
				sx={{ 
					marginTop:"1em", 
					marginBottom: "0.5em", 
					backgroundColor: "var(--magenta)",
					"&:active,&:hover,&:active": {
						backgroundColor: "var(--magenta)",
					}
				}}
				onClick={addItem}
			>
				ADD TO CART
			</Button>
			<Divider sx={{ backgroundColor: "var(--grey)", marginTop: "1em", marginBottom: "1em" }} />
			<Typography variant="h6" sx={{ color:"var(--magenta)" }} paddingBottom="0.25em" >Product description</Typography>
			<Typography textAlign="justify" variant="subtitle1" >
				{showMore === false && product.descriptionEN?.length > 255 ? (
					<>
						{product.descriptionEN.substring(0, 255).trim()}... <Typography component="span" variant="subtitle1" onClick={showMoreHandler} sx={{ color: "var(--magenta)", cursor: "pointer" }} ><strong>Show more</strong></Typography>
					</>
				) : (
					product.descriptionEN
				)}
			</Typography>
			<Divider sx={{ backgroundColor: "var(--grey)", marginTop: "1em", marginBottom: "1em" }} />
			<Typography variant="h6" sx={{ color:"var(--magenta)" }} paddingBottom="0.25em" >Product information</Typography>
			<Paper sx={{ padding: "0.4em", backgroundColor: "var(--black-3)" }} >
				<Grid container spacing={1}>
					<Label label="Manufacturer" />
					<Info info={product.manufacturer} />

					<Label label="Item model number" />
					<Info info={product.itemModelNumber} />

					<Label label="Weight" />
					<Info info={product.weightEN} />

					<Label label="Size" />
					<Info info={product.sizeEN} />

				</Grid>
			</Paper>
		</>
	);
};


export default ProductPage; //Export main component
