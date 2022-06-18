import React, { useEffect, useState } from 'react';


//Utils
import { decodeURL } from '../../utils/queryUtils';

//i18n
import { useTranslation } from 'react-i18next';


//axios
import axios from 'axios';

//React router
import { useParams } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import Container		from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';

//Custom components
import Mobile	from './Mobile';
import Desktop	from './Desktop';


//Main component content
const ProductInfo = () => {	

	//Responsiveness
	const isDesktop = useMediaQuery( '(min-width: 600px)' );
	
	//Translations
	const [ t ] = useTranslation("global");

	//Get data from URL
	const { productId } = useParams();
	//Product data
	const [ product, setProduct ] = useState({});

	//Read all items from database
	useEffect( () => {
		axios.get('/database.json')
			.then( response => {
				//All fetched products
				const products = response.data;
				//Product name from URL
				const urlProduct = decodeURL(productId);

				//Get product data filtering all fetched products
				const product = products.filter( product => product.fullName === urlProduct )[0];
				
				//Save product data
				setProduct(product);
			} )
			.catch( error => console.log( error ) )
	}, [] );

	//Component render
	return (
		<Container maxWidth="lg" sx={{ paddingTop: "1.25em" }} component="main" >
			{ isDesktop && <Desktop product={product} t={t}	/>}
			{!isDesktop && <Mobile product={product} t={t}	/>}
		</Container>
	);
};


export default ProductInfo; //Export main component
