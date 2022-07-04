import React from 'react';


//Hooks
import { parseURL } from '../../../hooks/queryHooks';
import { transformPrice } from '../../../hooks/priceHooks';


//Redux
import { useDispatch } from 'react-redux';
import { addOneItemRedux, removeOneItemRedux, removeItemRedux } from '../../../features/cart/cartSlice';

//React router
import { useNavigate } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import Grid				from '@mui/material/Grid';
import Paper			from '@mui/material/Paper';
import Typography		from '@mui/material/Typography';
import Button			from '@mui/material/Button';
import ButtonGroup	from '@mui/material/ButtonGroup';
//Icons
import DeleteIcon from '@mui/icons-material/Delete';
//Styles
import { styled } from '@mui/material/styles';


const Image = styled('img')({
	width: "100%",
	height: "100%",
	borderRadius: "0.25em",
	cursor: "pointer"
});

const StyledButton = styled(Button)({
	backgroundColor: "var(--magenta)",
	color: "var(--white-2)",
	borderColor: "var(--black-3)",

	"&:hover": {
		backgroundColor: "var(--magenta)",
		borderColor: "var(--black-3)",
	}
});

//Main component content
const Item = ({product}) => {

	const productName = product.fullName;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	//Send user to product page
	const toProductPage = () => {
		navigate(`/product/${parseURL(productName)}`)
	};

	//Description. What does this?
	const addOneItem = () => {
		dispatch(addOneItemRedux(productName));
	};

	//Remove only one item from product
	const removeOneItem = () => {
		dispatch(removeOneItemRedux(productName));
	};

	//Remove whole product
	const removeItem = () => {
		dispatch(removeItemRedux(productName));
	};

	//Component render
	return (
		<Grid item xs={12}>
			<Paper sx={{ backgroundColor: "var(--black-3)", color: "var(--white-2)" }} >
				<Grid container item xs={12} >
					<Grid item xs={4}>
						<Image
							src={product.img} 
							alt={productName} 

							onClick={ toProductPage }
						/>
					</Grid>
					<Grid container item xs={8} padding="0.45em" >
						<Grid item xs={12} >
							<Typography variant="subtitle2" >
								{ productName.length > 50 ? (
									<>
										{productName.substring(0, 50)}...
									</>
								) : productName }
							</Typography>
						</Grid>
						<Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center" >
							<Typography variant="subtitle1" >
								<strong>
									US$ {transformPrice(product.price)}
								</strong>
							</Typography>
							<Typography variant="subtitle1" >
								<strong>
									Qty.: {product.quantity}
								</strong>
							</Typography>
						</Grid>
						<Grid item xs={6} display="flex" justifyContent="flex-start" alignItems="center" >
							<ButtonGroup size="small" >
								<StyledButton size="small" onClick={ product.quantity === 1 ? removeItem : removeOneItem } >
									{product.quantity === 1 ? <DeleteIcon fontSize="small" /> : "-1"}
								</StyledButton>
								<StyledButton size="small" onClick={addOneItem} >
									+1
								</StyledButton>
							</ButtonGroup>
						</Grid>
						<Grid item xs={6} display="flex" justifyContent="flex-end" alignItems="center" >
							<Button 
								fullWidth 
								variant="contained" 
								size="small"
								onClick={removeItem}
								sx={{ 
									backgroundColor: "var(--magenta)",
									"&:hover": {
										backgroundColor: "rgba(var(--magenta-rgb), 1.5)"
									}
								}}
							>
								REMOVE
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};


export default Item; //Export main component
