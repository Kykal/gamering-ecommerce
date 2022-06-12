import React from 'react';


//Redux
import { useSelector } from 'react-redux';


//React router
import { NavLink } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
//Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//Styles
import { styled } from '@mui/material/styles';


const StyledBadge = styled(Badge)({
	"& .BaseBadge-badge": { 
		backgroundColor: "var(--magenta)",
		color: "var(--white-1)"
	},
});


//Main component content
const CartButton = () => {

	
	//Get cart length from stored cart
	const cartLength = useSelector(state => state.cart.length);


	//Component render
	return (
		<NavLink to="/cart" >
			{({isActive}) => (
				<IconButton>
					<StyledBadge 
						badgeContent={cartLength}
						max={9} 
						sx={{ 
							"& .MuiSvgIcon-root": {
								color: isActive ? "var(--cyan)" : "var(--white-1)"
							}
						}}
					>
						<ShoppingCartIcon />
					</StyledBadge>
				</IconButton>
			)}
		</NavLink>
	);
};


export default CartButton; //Export main component