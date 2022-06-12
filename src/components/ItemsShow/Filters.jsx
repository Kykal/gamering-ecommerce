import React from 'react';


//MATERIAL DESIGN
//Components
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

//Main component content
const Filters = ({filters}) => {


	//Component render
	return (
		<>
			{filters.map( (filter, index) => (
				<Chip 
					key={index}
					label={filter} 
					variant="filled"
					size="small"
				/>
			) )}
		</>
	);
};


export default Filters; //Export main component
