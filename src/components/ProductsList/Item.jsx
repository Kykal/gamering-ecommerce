import React from 'react';


//Hooks
import { parseURL } from '../../hooks/queryHooks';


//React router
import { useNavigate, Link } from 'react-router-dom';


//Redux
import { useDispatch } from 'react-redux';
import { addItemRedux } from '../../features/cart/cartSlice';


//MATERIAL DESIGN
//Components
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
//Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


//Main component content
const Item = (props) => {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	//Add item to cart
	const addItem = () => {
		const newItem = {
			fullName: props.component.fullName,
			img: props.component.img,
			price: props.component.price
		}
		dispatch( addItemRedux(newItem) );
	};

	//Send user to product page
	const sendToProductPage = () => {
		navigate(`/product/${parseURL(props.component.fullName)}`);
	};

	//Component render
	return (
		<ImageListItem sx={{ cursor: "pointer" }} >
			<img 
				src={props.component.img} 
				alt={props.component.fullName} 
				onClick={sendToProductPage}
			/>
			<ImageListItemBar
				title={props.component.fullName}
				subtitle={`US$ ${props.component.price}`}

				actionIcon={
					<IconButton onClick={addItem} sx={{ color: "var(--cyan)" }} >
						<AddShoppingCartIcon />
					</IconButton>
				}
			/>
		</ImageListItem>
	);
};


export default Item; //Export main component
