import React from 'react';


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


	//Component render
	return (
		<ImageListItem key={product.id} >
			<img src={product.img} alt={product.name} loading="lazy" />

			<ImageListItemBar
				title={product.name}
				subtitle={ language==="en" ? `\$${product.price} USD` : `\$${(product.price * 19.50)} MXN` }

				actionIcon={
					<StyledButton>
						<InfoIcon />
					</StyledButton>
				}
			/>
		</ImageListItem>
	);
};


export default Product; //Export main component
