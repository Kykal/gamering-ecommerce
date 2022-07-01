import React from 'react';


//Redux
import { useSelector, useDispatch } from 'react-redux';


//MATERIAL DESIGN
//Components
import Typography from '@mui/material/Typography';


//Main component content
const CartPage = () => {

	//Fetch data from Redux
	const cart = useSelector(state => state.cart);

	
	//Component render
	return (
		<>
			<Typography variant="h5">YOUR CART</Typography>
		</>
	);
};


export default CartPage; //Export main component
