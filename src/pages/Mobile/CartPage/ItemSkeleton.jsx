import React from 'react';


//MATERIAL DESIGN
//Components
import Skeleton from '@mui/material/Skeleton';

//Main component content
const ItemSkeleton = () => {


	//Component render
	return (
		<Skeleton
			variant="rectangular"

			sx={{
				height:"2.5em",
				backgroundColor:"var(--white-2)"
			}}
		/>
	);
};


export default ItemSkeleton; //Export main component
