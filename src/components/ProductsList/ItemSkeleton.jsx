import React from 'react';


//MATERIAL DESIGN
//Components
import Skeleton from '@mui/material/Skeleton';
//Styles
import { styled } from '@mui/material/styles';


const LoadingItem = styled(Skeleton)({
	backgroundColor: "var(--black-3)",
	height: "12.25em"
});


//Main component content
const ItemSkeleton = () => {


	//Component render
	return (
		<LoadingItem variant="rectangular" />
	);
};


export default ItemSkeleton; //Export main component
