import React, { useState, useEffect } from 'react';
import axios from 'axios';

//React router
import {
	useSearchParams,
} from 'react-router-dom';


//MATERIAL DESIGN
//Components
import Box from '@mui/material/Box';

//Main component content
const SearchContent = () => {
	
	const [ data, setData ] = useState([]);

	//Fetch data when page loads
	useEffect( () => {
		axios.get('https://my-json-server.typicode.com/Kykal/temp-db/db')
			.then( res => {
				setData(res.data.patients)
			} )
			.catch( error => console.log( error ) );
	}, [] );

	let item;
	
	//Get URL params
	const [ params ] = useSearchParams();
	item = params.get("query"); //Get item key from URL params

	//Component render
	return (
		<main>
			{data.map( (element, index) => (
				<Box key={index} color="var(--white-1)" >
					{element.name}
				</Box>
			) )}
		</main>
	);
};


export default SearchContent; //Export main component
