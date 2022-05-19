import React from 'react';

//MATERIAL DESIGN
//Components
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
//Styles
import { styled } from '@mui/material/styles';

const Item = styled(Button)({

	color: "var(--white-1)",
	height: "100%",
	width: "100%",
	borderRadius: "0",

	"&:hover": {
		color: "var(--magenta)",
		backgroundColor: "var(--black-3)"
	}
});


//Main component content
const HeaderItem = ({children}) => {


	//Component render
	return (
		<Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
			<Item >
				{children}
			</Item>
		</Grid>
	);
};


export default HeaderItem; //Export main component
