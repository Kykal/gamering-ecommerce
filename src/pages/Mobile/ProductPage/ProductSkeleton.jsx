import React from 'react';


//MATERIAL DESIGN
//Components
import Box			from '@mui/material/Box';
import Divider		from '@mui/material/Divider';
import Skeleton	from '@mui/material/Skeleton';
//Styles
import { styled } from '@mui/material/styles';


//Styled components
const TextSkeleton = styled(Skeleton)({
	backgroundColor: "var(--black-3)",
	height: "3em"
});

const ImageSkeleton = styled(Skeleton)({
	backgroundColor: "var(--black-3)",
	height: "20em"
});

const IconSkeleton = styled(Skeleton)({
	backgroundColor: "var(--black-3)",
	width: "2.5em",
	height: "2.5em"
});

//Main component content
const ProductSkeleton = () => {


	//Component render
	return (
		<>
			<TextSkeleton variant="text"/>
			<ImageSkeleton variant="rectangular" />
			<Box display="flex" justifyContent="space-between" alignItems="center" paddingTop="0.5em" >
				<TextSkeleton variant="text" sx={{ width: "45%" }} />
				<IconSkeleton variant="circular" />
			</Box>
			<Divider sx={{ backgroundColor: "var(--grey)", marginTop: "1em", marginBottom: "1em" }} />
			<TextSkeleton variant="text" sx={{ width: "45%" }} />
			<TextSkeleton variant="text" />
			<Divider sx={{ backgroundColor: "var(--grey)", marginTop: "1em", marginBottom: "1em" }} />
			<TextSkeleton variant="text" sx={{ width: "45%" }} />
			<TextSkeleton variant="text" />
		</>
	);
};


export default ProductSkeleton; //Export main component
