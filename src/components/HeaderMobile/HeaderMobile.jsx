import React, { useState } from 'react';


//Logo
import logo from '../../assets/img/logo.png';

//React router
import { Link } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//Icons
import MenuIcon from '@mui/icons-material/Menu';
//Styles
import { styled } from '@mui/material/styles';


//Custom components
import DrawerList from './DrawerList';


const Menu = styled(IconButton)({
	color: "var(--white-1)",
});


//Main component content
const HeaderMobile = () => {

	const [ drawerStatus, setDrawerStatus ] = useState(false);

	//Open drawer
	const openDrawer = () => {
		setDrawerStatus(true);
	};

	//Close drawer
	const closeDrawer = () => {
		setDrawerStatus(false);
	};

	
	//Component render
	return (
		<>
			<Grid
				container 
				spacing={0} 
				bgcolor="var(--black-3)"
				
				component="header"
				color="var(--white-1)"

				height="3.5em"
			>
				<Grid item xs={2} />
				<Grid item xs={8}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Link to="/">
						<img
							src={logo}
							alt="Gamering logo"
							
							style={{
								width: "100%",
								maxWidth: "11em",
								height: "auto"	
							}}
						/>
					</Link>
				</Grid>
				<Grid item xs={2}
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Menu
						onClick={openDrawer}
						size="large"
					>
						<MenuIcon fontSize="inherit" />
					</Menu>
				</Grid>
			</Grid>
			<Drawer
				anchor="right"
				open={drawerStatus}
				onClose={closeDrawer}				
			>
				<DrawerList />
			</Drawer>
		</>
	);
};


export default HeaderMobile; //Export main component
