import React, { useState } from 'react';


//Hooks
import { parseURL } from '../../../hooks/queryHooks';


//React router
import { useNavigate } from 'react-router-dom';


//Redux
import { useDispatch } from 'react-redux';
import { addItemRedux } from '../../../features/cart/cartSlice';


//MATERIAL DESIGN
//Components
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
//Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


//Main component content
const Item = (props) => {


	//Defines when the image is fully loaded
	const [ isImageLoaded, setIsImageLoaded ] = useState(false);

	const navigate = useNavigate(); //To browse between pages
	const dispatch = useDispatch(); //Redux

	//Add item to cart
	const addItem = () => {
		const newItem = {
			fullName: props.component.fullName,
			img: props.component.img,
			price: props.component.price,
			quantity: 1
		}
		dispatch( addItemRedux(newItem) );
	};

	//Send user to product page
	const sendToProductPage = () => {
		navigate(`/product/${parseURL(props.component.fullName)}`);
	};

	//To update state
	const imageLoadHandler = () => {
		setIsImageLoaded(true);
	};

	//Component render
	return (
		<ImageListItem
			sx={{
				cursor: "pointer",
				opacity: isImageLoaded ? "1" : "0",
				transition: "0.25s opacity",
			}}
		>
			<img 
				src={props.component.img} 
				alt={props.component.fullName} 
				onClick={sendToProductPage}

				onLoad={imageLoadHandler}
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
