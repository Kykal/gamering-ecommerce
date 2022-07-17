import React, { Suspense, lazy, useEffect } from 'react';


//Hooks
import { transformPrice } from '../../../hooks/priceHooks';


//Redux
import { useSelector } from 'react-redux';


//React router
import { useNavigate } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import Box			from '@mui/material/Box';
import Button		from '@mui/material/Button';
import Grid			from '@mui/material/Grid';
import Typography	from '@mui/material/Typography';
//Styles
import { styled } from '@mui/material/styles';


//Custom components
import ItemSkeleton from './ItemSkeleton';
const Item = lazy( () => import('./Item') );



//Styled components
const StyledButton = styled(Button)({
	backgroundColor: "var(--magenta)",
	color: "var(--white-2)",
	borderColor: "var(--black-3)",

	"&:hover": {
		backgroundColor: "var(--magenta)",
		borderColor: "var(--black-3)",
	},

	"&:disabled": {
		backgroundColor: "rgba( var(--magenta-rgb), 0.3 )",
		color: "rgb( var(--white-2-rgb), 0.3 )"
	}
});


//Main component content
const CartPage = () => {

	const navigate = useNavigate();


	//Fetch data from Redux
	const cart = useSelector(state => state.cart);


	//Turn array of products into an array of prices, then add up all of them to obtain total in price
	const finalCost = cart.length > 0 ? cart.map( product => product.price*product.quantity ).reduce( (prevProduct, currentProduct) => prevProduct + currentProduct, 0 ) : 0;


	useEffect( () => {
		document.title = "Gamering - My Cart";
	}, [] );


	//Send user to payout page
	const payoutButtonHandler = () => {
		navigate("/payout");
	};

	//Component render
	return (
		<>
			<Box display="flex" justifyContent="space-between" alignItems="center" paddingBottom="1.25em" >
				<Typography variant="h5">Your cart</Typography>
				<Typography variant="h6" sx={{ color: "var(--magenta)" }} >US$ {transformPrice(finalCost)}</Typography>
			</Box>
			<Box 
				paddingBottom="1.5em" 
				position="sticky" 
				top="4.25em"
				zIndex="10"
			>
				<StyledButton
					fullWidth
					variant="contained"
					disabled={
						cart.length === 0 ? true : false
					}

					onClick={payoutButtonHandler}
				>
					Payout
				</StyledButton>
			</Box>
			{cart.length > 0 ? (
				<Grid container spacing={1} >
					{cart.map( (product, index) => (
						<Suspense key={index} fallback={<ItemSkeleton/>} >
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
