import React, { useState } from 'react';


//MATERIAL DESIGN
//Components
import Button		from '@mui/material/Button';
import Box			from '@mui/material/Box';
import Grid			from '@mui/material/Grid';
import Typography	from '@mui/material/Typography';

const ProductTitle = ({title}) => {
	return (
		<>
			<Grid item xs={4} display="flex" justifyContent="flex-start" alignItems="center" >
				<Typography variant="subtitle1" color="var(--magenta)" >
					<strong>
						{title}
					</strong>
				</Typography>
			</Grid>
		</>
	);
};

const ProductValue = ({value}) => {
	return (
		<>
			<Grid item xs={8} display="flex" justifyContent="flex-start" alignItems="center" >
				<Typography variant="subtitle1" >
					{value}
				</Typography>
			</Grid>
		</>
	);
};

//Main component content
const Mobile = ({product, t, lang}) => {

	const [ showMore, setShowMore ] = useState(false);

	let price = parseInt(product.price);
	let cents = 0;
	const prefix = lang==="en" ? "US$" : "$";
	const postfix = lang==="es" && "MXN";
	const descr = lang ==="en" ? product.descriptionEN : product.descriptionES;

	//Round to "two decimals"
	if( cents === 0 ){
		cents = "00";
	}else if ( cents < 10 && cents> 0 ){
		cents = `0${cents}`;
	}

	//If user has webapp language set as 'Spanish' calculate its exchange rate (Mexican Peso - MXN) .
	if( lang==="es" ){
		price = (price*20);
	}

	//Only two decimals
	price = parseFloat( price.toFixed(2) );

	//If price is higher or equal than 10 000, set a thousand separator.
	if( price >= 10_000 ){
		price = price.toLocaleString("en").replace(',', ' ')
	}

	//Enable show more text description
	const showMoreHandler = () => {
		setShowMore( prevState => !prevState );
	};

	//Component render
	return (
		<>
			<Typography variant="h6" paddingBottom="0.75em" >
				{product.fullName}
			</Typography>
			<img src={product.img} alt={product.fullName} width="100%" />
			<Typography variant="h4" paddingTop="0.5em" paddingBottom="0.5em" color="var(--magenta)" >
				{prefix} {price}<sup style={{ fontSize: "large" }} >{cents}</sup> {postfix}
			</Typography>
			<Typography variant="subtitle1" textAlign="justify">
				{(descr?.length > 255 && !showMore) ? (
					<>
						{descr.substring(0, 255)}...&nbsp;
						<Typography 
							variant="subtitle1" 
							component="span" 
							color="var(--magenta)" 
							onClick={ showMoreHandler } 
							sx={{ cursor: "pointer" }} 
						>
							<strong>
								{t("showMore")}
							</strong>
						</Typography>
					</>
				) : (
					descr
				)}
			</Typography>
			<Box display="flex" alignItems="center" justifyContent="center" paddingTop="1em" paddingBottom="3em" >
				<Button
					variant="contained"
					fullWidth
					sx={{
						backgroundColor: "var(--magenta)",
						"&:hover ": {
							backgroundColor: "var(--magenta)"
						},
					}}

				>
					{t("addToCart")}
				</Button>
			</Box>
			<Grid container spacing={1} bgcolor="var(--black-3)" paddingBottom="0.5em" borderRadius="0.2em" paddingLeft="0.25em" >
				<Grid item xs={12}>
					<Typography variant="h6" >
						{t("productData")}
					</Typography>
				</Grid>

				<ProductTitle title={t("manufacturer")}		/>
				<ProductValue value={product.manufacturer}	/>


				<ProductTitle title={t("product.itemModelNumber")} />
				<ProductValue value={product.itemModelNumber}	/>


				<ProductTitle title={t("product.size")}		/>
				{lang === "en" ? (
					<ProductValue value={product.sizeEN}	/>
				) : (
					<ProductValue value={product.sizeES}	/>
				)}


				<ProductTitle title={t("product.weight")} />
				{lang === "en" ? (
					<ProductValue value={product.weightEN}	/>
				) : (
					<ProductValue value={product.weightES}	/>
				)
				}
			</Grid>
		</>
	);
};


export default Mobile; //Export main component
