import React from 'react';


//MATERIAL DESIGN
//Components
import ImageListItem	from '@mui/material/ImageListItem';
import Skeleton		from '@mui/material/Skeleton';

//Main component content
const LoadingProducts = () => {

	//Component render
	return (
		<>
			{[...Array(6)].map( (element, index) => (
				<ImageListItem key={index} >
					<Skeleton sx={{ backgroundColor: "var(--black-3)" }} variant="rectangular" height={190} />
				</ImageListItem>
			))}
		</>
	);
};


export default LoadingProducts; //Export main component
