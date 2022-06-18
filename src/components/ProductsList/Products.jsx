import React from 'react';


//Utils
import { validateURL } from '../../utils/queryUtils';


//React router
import { useNavigate } from 'react-router-dom';

//i18n
import { useTranslation } from 'react-i18next';


//MATERIAL DESIGN
//Components
import IconButton from '@mui/material/IconButton';
import ImageListItem		from '@mui/material/ImageListItem';
import ImageListItemBar	from '@mui/material/ImageListItemBar';
//Icons
import InfoIcon from '@mui/icons-material/Info';


//Main component content
const Products = (props) => {

	//React router - To move between URLs.
	const navigate = useNavigate();
	//Translation
	const [ t, i18n ] = useTranslation("global");
	const lang = i18n.language;

	//Send user to this URL
	const navigateTo = (url) => () => {
		url = validateURL(url);

		navigate(`/product/${url}`);
	};

	//Component render
	return (
		<>
			{props.products.map( product => {

				const productFullName = product.fullName;
				let price = product.price;

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

				return (
					<ImageListItem key={product.id} >
						<img src={product.img} alt={productFullName} />
					
						<ImageListItemBar
							title={productFullName}
							subtitle={ lang === 'en' ? `US\$${price}` : `\$${price} MXN` }

							actionIcon={
								<IconButton sx={{color: "var(--white-2)"}} onClick={navigateTo(productFullName)} >
									<InfoIcon />
								</IconButton>
							}

						/>
					</ImageListItem>
				);
			})}
		</>
	);
};


export default Products; //Export main component
