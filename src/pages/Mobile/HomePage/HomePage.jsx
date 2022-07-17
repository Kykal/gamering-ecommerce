import React, { useEffect } from 'react';


//Assets
import component	from '../../../assets/img/HomePage/asus_rog_strix_b450f.png';
import peripheral from '../../../assets/img/HomePage/corsair_k55_rgb_pro.png';
import accessory	from '../../../assets/img/HomePage/trvaago_large_rgb_gaming_mouse_pad.png';


//React router
import { Link } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import Box			from '@mui/material/Box';
import Typography	from '@mui/material/Typography';
import Grid			from '@mui/material/Grid';
import Paper		from '@mui/material/Paper';
//Styles
import { styled } from '@mui/material/styles';


const Image = styled('img')({
	width: "100%",
	height: "auto",
	aspectRatio: "16/9"
});


//Main component content
const HomePage = () => {

	useEffect( () => {
		document.title = "Gamering";
	}, []);

	//Component render
	return (
		<>
			<Box>
				<Paper>
					<Image
						src={accessory}
					/>
				</Paper>
			</Box>
		</>
	);
};


export default HomePage; //Export main component
