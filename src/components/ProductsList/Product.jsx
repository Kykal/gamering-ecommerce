import React from 'react';


//Utils
import { validateURL } from '../../utils/queryUtils';


//React router
import { useNavigate } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import ImageListItem			from '@mui/material/ImageListItem';
import ImageListItemBar		from '@mui/material/ImageListItemBar';
import IconButton				from '@mui/material/IconButton';
//Icons
import InfoIcon				from '@mui/icons-material/Info';
//Styled
import { styled }				from '@mui/material/styles';


const StyledButton = styled(IconButton)({
	"& .MuiSvgIcon-root": {
		color: "var(--white-2)"
	}
});

//Main component content
const Product = ({product, language}) => {

	//React router - To send to another URL
	const navigate = useNavigate();

	//Send user to products page (URL)
	const sendToProduct = () => {
		//Change blank spaces with plus signs
		const url = validateURL(`${product.manufacturer} ${product.name}`);
		navigate(`/product/${url}`)
	};

	//Component render
	return (
		<ImageListItem key={product.id} >
			<img src={product.img} alt={product.name} loading="lazy" />

			<ImageListItemBar
				title={`${product.manufacturer} ${product.name}`}
				subtitle={ language==="en" ? `\$${product.price} USD` : `\$${(product.price * 19.50)} MXN` }

				actionIcon={
					<StyledButton onClick={sendToProduct} >
						<InfoIcon />
					</StyledButton>
				}
			/>
		</ImageListItem>
	);
};


export default Product; //Export main component
