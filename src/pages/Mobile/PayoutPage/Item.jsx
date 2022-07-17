import React from 'react';


//MATERIAL DESIGN
//Components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Content = ({label, xs, text}) => {

	return (
		<Grid 
			item 
			xs={xs}
			display="flex" 
			alignItems="center" 
			justifyContent={text}  
		>
			<Typography 
				variant="subtitle2" 
				textAlign={text} 
			>
				{label}
			</Typography>
		</Grid>
	);
};

//Main component content
const Item = ({product}) => {

	const subTotal = product.price * product.quantity;

	//Component render
	return (
		<>
			<Content
				label={product.quantity}
				xs={1}
				text="center"
			/>
			<Content
				label={product.fullName}
				xs={7}
				text="left"
			/>
			<Content
				label={`US$ ${product.price}`}
				xs={2}
				text="center"
			/>
			<Content
				label={subTotal}
				xs={2}
				text="center"
			/>
		</>
	);
};


export default Item; //Export main component
