import React, { useEffect } from 'react';

//MATERIAL DESIGN
//Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
//Styles
import { styled } from '@mui/material/styles';


//React router
import { Link } from 'react-router-dom';

//Default section style
const Item = styled(Box)({	
	height: "100%",
	width: "100%",

	"& .MuiButton-root": {
		height: "100%",
		width: "100%",
		color: "var(--white-1)",
		borderRadius: "0",
	},

	"& .MuiButton-root:hover": {
		height: "100%",
		width: "100%",
		color: "var(--magenta)",
		backgroundColor: "var(--black-3)"
	},
});

//If current section is active (route), set its color to magenta and set cyan when hovered
const ItemActive = styled(Box)({
	height: "100%",
	width: "100%",

	"& .MuiButton-root": {
		height: "100%",
		width: "100%",
		color: "var(--magenta)",
		borderRadius: "0",
	},

	"& .MuiButton-root:hover": {
		height: "100%",
		width: "100%",
		color: "var(--cyan)",
		backgroundColor: "var(--black-3)"
	},
});

//Main component content
const HeaderItem = ({children, to, actual=null}) => {

	//Component render
	return (
		<Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
			{actual ? (
				<ItemActive>
					<Link to={to}>
						<Button>
							{children}
						</Button>
					</Link>
				</ItemActive>
			) : (
				<Item>
					<Link to={to}>
						<Button>
							{children}
						</Button>
					</Link>
				</Item>
			)}
		</Grid>
	);
};


export default HeaderItem; //Export main component
