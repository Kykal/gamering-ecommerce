import React, { useState } from 'react';


//React router
import { useNavigate } from 'react-router-dom';


//Redux
import { useSelector, useDispatch	} from 'react-redux';
import { clearCartRedux					} from '../../../features/cart/cartSlice';


//MATERIAL DESIGN
//Components
import Alert		from '@mui/material/Alert';
import Box			from '@mui/material/Box';
import Button		from '@mui/material/Button';
import Divider		from '@mui/material/Divider';
import Paper		from '@mui/material/Paper';
import Typography	from '@mui/material/Typography';
import Snackbar	from '@mui/material/Snackbar';
//Styles
import { styled } from '@mui/material/styles';


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

//Custom components
const Text = ({children}) => {

	return (
		<Typography variant="subtitle1" >
			{children}
		</Typography>
	);
};


//Main component content
const PayoutPage = () => {

	const [ snackbarStatus, setSnackbarStatus ] = useState(false);

	//React router
	const navigate = useNavigate();

	//Redux
	const cart = useSelector( state => state.cart );
	const dispatch = useDispatch();
	
	
	const totalProductsCost = cart.map( product => product.price * product.quantity ).reduce(
		(prevProduct, actualProduct) => prevProduct+actualProduct, 0
	).toFixed(2);
	const shippingCost = (totalProductsCost*0.10).toFixed(2);

	const totalCost = (parseFloat(totalProductsCost+shippingCost)).toFixed(2);

	const todayDate = new Date();




	//"Finalize payout" and send user to landing page
	const finalizePayout = () => {
		setSnackbarStatus(true);

		setTimeout( () => {
			navigate("/");
			dispatch( clearCartRedux() );
		}, 1100 );
	};

	//Close snackbar
	const closeSnackbar = () => {
		setSnackbarStatus(false);
	};

	//Component render
	return (
		<>
			<Typography variant="h5" paddingBottom="0.85em" >
				Payout
			</Typography>
			<Box paddingBottom="1.5em" >
				<StyledButton fullWidth onClick={finalizePayout} >
					Finalize payout
				</StyledButton>
			</Box>
			<Paper
				sx={{
					backgroundColor: "var(--black-3)",
					"& h6": {
						color: "var(--white-2)"
					}
				}}
			>
				<Box padding="0.75em" >
					<Text>
						Send to: <Typography component="span"><strong>Your name here</strong></Typography>
					</Text>
					<Text>
						Delivery date: <Typography component="span" sx={{ color: "var(--magenta)" }} ><strong>{todayDate.toLocaleDateString('en', { weekday: "long", day:"2-digit", month: "long", year: "2-digit" })}</strong></Typography>
					</Text>
				</Box>
				<Divider sx={{ backgroundColor: "rgba( var(--white-2-rgb), 0.5 )" }} />
				<Box padding="0.75em" >
					<Box
						display="flex"
						alignItems="center"
						justifyContent="space-between"
					>
						<Text>
							Products:
						</Text>
						<Text>
							US$ {totalProductsCost}
						</Text>
					</Box>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="space-between"
					>
						<Text>
							Shipping:
						</Text>
						<Text>
							US$ {shippingCost}
						</Text>
					</Box>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="space-between"
					>
						<Typography variant="h6" sx={{ color: "var(--white-1)" }} >
							<strong>
								Total (with TAX if applicable)
							</strong>
						</Typography>
						<Typography variant="h6" sx={{ color: "var(--magenta) !important" }} >
							<strong>
								US$&nbsp;{totalCost}
							</strong>
						</Typography>
					</Box>
				</Box>
			</Paper>
			<Snackbar open={snackbarStatus} autoHideDuration={1000} onClose={closeSnackbar} >
				<Alert severity="success" sx={{ width: "100%" }} >
					Thank you for your purchase!
				</Alert>
			</Snackbar>
		</>
	);
};


export default PayoutPage; //Export main component
