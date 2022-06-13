import React from 'react';

//i18
import { useTranslation } from 'react-i18next';


//React router
import { Link } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import IconButton			from '@mui/material/IconButton';
import ImageListItem		from '@mui/material/ImageListItem';
import ImageListItemBar	from '@mui/material/ImageListItemBar';
//Icons
import InfoIcon			from '@mui/icons-material/Info';
//Styles
import { styled }			from '@mui/material/styles';
import { useEffect } from 'react';


//Styled components
const Icon = styled(IconButton)({
	"& .MuiSvgIcon-root": {
		fill: "var(--white-2)",
	}
});


//Main component content
const ProductsList = ({products, filters}) => {

	//Translations
	const [ t, i18n ] = useTranslation("global");

	//Filter our products if some of them has an active filter value on its name.
	let filteredProducts = products.filter( product => filters.some( filter => product.name.includes(filter) ));

	//If there are no filters, then filtered products as products
	if( filters.length === 0 ){
		filteredProducts = products;
	}
	

	//Component render
	return (
		<>
			{filteredProducts.map( element => (
				<ImageListItem key={element.id} >
					<img src={element.img} alt={`${element.name}`} loading="lazy" />

					<ImageListItemBar
						title={element.name}
						subtitle={
							i18n.language === "en" ? 
							`\$${(element.price).toFixed(2)} USD` : `\$${(element.price * 20).toFixed(2)} MXN`
						}
						position="bottom"

						actionIcon={
							<Link to={`/product/${element.name}`} >
								<Icon >
									<InfoIcon />
								</Icon>
							</Link>
						}

						sx={{
							color: "var(--white-2)"
						}}
					/>
				</ImageListItem>
			) )}
		</>
	);
};


export default ProductsList; //Export main component
