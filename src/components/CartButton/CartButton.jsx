import React from 'react';


//Redux
import { useSelector } from 'react-redux';


//React router
import { NavLink } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import IconButton	from '@mui/material/IconButton';
import Badge		from '@mui/material/Badge';
//Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


//Main component content
const CartButton = () => {


	//Get array length of objects
	const cartContent = useSelector(state => state.cart.length);

	
	//Component render
	return (
		<NavLink to="cart">
			{({isActive}) => (
				<IconButton>
					<Badge 
						badgeContent={cartContent} 
						max={9} 
						sx={{
							"& .BaseBadge-badge": {
								backgroundColor: "var(--magenta)",
								color: "var(--white-2)"
							},
							"& .MuiSvgIcon-root": { 
								color: isActive ? "var(--cyan)" : "var(--white-2)" 
							}
						}}
					>
						<ShoppingCartIcon />
					</Badge>
				</IconButton>
			)}
		</NavLink>
	);
};


export default CartButton; //Export main component
