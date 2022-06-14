import React from 'react';

//MATERIAL DESIGN
//Components
import ImageListItem from '@mui/material/ImageListItem';
import Skeleton from '@mui/material/Skeleton';
//Styles
import { styled } from '@mui/material/styles';


const WhiteSkeleton = styled(Skeleton)({
	backgroundColor: "var(--black-3)",
});

//Main component content
const ProductsSkeleton = () => {


	//Component render
	return (
		<>
			{[...Array(8)].map( (item, index) => (
				<ImageListItem key={index} >
					<WhiteSkeleton variant="rectangular" width="100%" height="175px" />
				</ImageListItem>
			) )}
		</>
	);
};


export default ProductsSkeleton; //Export main component
