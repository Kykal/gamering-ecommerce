import React, { Suspense, lazy } from 'react';


//Hooks
import { transformPrice } from '../../../hooks/priceHooks';


//Redux
import { useSelector } from 'react-redux';


//MATERIAL DESIGN
//Components
import Box			from '@mui/material/Box';
import Grid			from '@mui/material/Grid';
import Typography	from '@mui/material/Typography';

//Custom components
const Item = lazy( () => import('./Item') );


//Main component content
const CartPage = () => {

	//Fetch data from Redux
	const cart = useSelector(state => state.cart);


	//Turn array of products into an array of prices, then add up all of them to obtain total in price
	const finalCost = cart.length > 0 ? cart.map( product => product.price*product.quantity ).reduce( (prevProduct, currentProduct) => prevProduct + currentProduct, 0 ) : 0;


	//Component render
	return (
		<>
			<Box display="flex" justifyContent="space-between" alignItems="center" paddingBottom="1.25em" >
				<Typography variant="h5">Your cart</Typography>
				<Typography variant="h6" sx={{ color: "var(--magenta)" }} >US$ {transformPrice(finalCost)}</Typography>
			</Box>
			{cart.length > 0 ? (
				<Grid container spacing={1} >
					{cart.map( (product, index) => (
						<Suspense key={index} fallback={""} >
							<Item
								product={product}
							/>
						</Suspense>
					) )}
				</Grid>
			) : (
				<Typography variant="h6" textAlign="center" paddingTop="1em" >
					Your cart is empty
				</Typography>
			)}
		</>
	);
};


export default CartPage; //Export main component
