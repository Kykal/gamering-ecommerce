import React, { useState, useEffect, Suspense, lazy } from 'react';


//Hooks
import { unparseURL } from '../../../hooks/queryHooks';

//Axios
import axios from 'axios';


//React router
import { useParams } from 'react-router-dom';


//Custom components
import ProductSkeleton from './ProductSkeleton';
const Product = lazy( () => import('./Product') );


//Main component content
const ProductPage = () => {
	
	const { productId } = useParams();
	const [ product, setProduct ] = useState({});

	useEffect( () => {
		document.title = `Gamering - ${unparseURL(productId)}`;
	}, [] );


	useEffect( () => {
		axios.get('/database.json')
			.then( response => {
				const key = unparseURL(productId);
				let result = response.data;

				result = result.filter( product => product.fullName === key );

				setProduct(...result);
			} )
	}, [productId] );



	//Component render
	return (
		<>
			<Suspense fallback={<ProductSkeleton />} >
				<Product
					product={product}
				/>
			</Suspense>
		</>
	);
};


export default ProductPage; //Export main component
