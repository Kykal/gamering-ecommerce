import React, { useEffect, useState } from 'react';


//Hooks
import { unparseQueryURL } from '../../../hooks/queryHooks';

//axios
import axios from 'axios';


//React router
import { useSearchParams } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';


//Custom components
import Item from '../../../components/Mobile/ProductsList/Item';


//Main component content
const SearchPage = () => {

	const [ results, setResults ] = useState([]);

	const [ params ] = useSearchParams();

	useEffect( () => {
		axios.get('/database.json')
			.then( response => {
				let coincidences = response.data;
				const query = unparseQueryURL(params.get('query'));

				coincidences = coincidences.filter( product => {
					const name = product.fullName.toLowerCase();
					const description = product.descriptionEN.toLowerCase();

					const isNameFound = query.some( key => name.includes(key) );
					const isDescriptionFound = query.some( key => description.includes(key) );

					return isNameFound || isDescriptionFound;
				} );
				
				setResults(coincidences);
			} )
			.catch( error => console.log( error ) )
	}, [params] );



	//Component render
	return (
		<>
			<Box display="flex" justifyContent="flex-start" alignItems="center" paddingBottom="1.25em" >
				<Typography variant="h5" >Search results</Typography>
			</Box>
			{results.length > 0 ? (
				<ImageList>
					{results.map( (product, index) => (
						<Item key={index}
							component={product}
						/>
					) )}
				</ImageList>
			) : (
				<Typography variant="h6" textAlign="center" paddingTop="1em" >
					No matches found
				</Typography>
			)}
		</>
	);
};


export default SearchPage; //Export main component
