import React, { useState, useEffect } from 'react';


//axios
import axios from 'axios';

//MATERIAL DESIGN
//Components
import Box			from '@mui/material/Box';
import Typography	from '@mui/material/Typography';
import IconButton	from '@mui/material/IconButton';
import ImageList	from '@mui/material/ImageList';
//Icons
import FilterAltIcon from '@mui/icons-material/FilterAlt';


//Main component content
const ComponentsPage = () => {

	const [ list, setList ] = useState([]);

	useEffect( () => {
		document.title = "Gamering - Components";

		axios.get('/components.json')
			.then( response => setList(response.data) )
			.catch( error => console.log(error) );
	}, [] );

	//Component render
	return (
		<>
			<Box display="flex" justifyContent="space-between" alignItems="center" >
				<Typography variant="h5" >Components</Typography>
				<IconButton sx={{ color: "var(--white-2)" }} >
					<FilterAltIcon />
				</IconButton>
			</Box>
		</>
	);
};


export default ComponentsPage; //Export main component
