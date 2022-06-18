import React from 'react';


//MATERIAL DESIGN
//Components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//Styles
import { styled } from '@mui/material/styles';

const Label = styled('strong')({
	color: "var(--cyan)"
});

//Main component content
const Mobile = ({product, t}) => {

	//Component render
	return (
		<>
				<Typography variant="h5" color="var(--magenta)" >
					{product.fullName}
				</Typography>
				<Grid container spacing={0} paddingTop="0.75em" >
					<Grid item container spacing={0} xs={8} md={7} >
						<Grid item xs={12}>
							<Typography variant="subtitle1" >
								<strong>{t("manufacturer")}:</strong> {product.manufacturer}
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={4} md={5} >
						<img
							src={product.img} 
							alt={product.fullName} 
							width="100%"
							height="auto"
						/>
					</Grid>
				</Grid>
		</>
	);
};


export default Mobile; //Export main component
