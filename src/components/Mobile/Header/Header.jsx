import React, { useState } from 'react';


//Assets
import logo from '../../../assets/img/logo/logo.png';


//React router
import { Outlet, Link } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import AppBar		from '@mui/material/AppBar';
import Container	from '@mui/material/Container';
import Drawer		from '@mui/material/Drawer';
import Grid			from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
//Icons
import MenuIcon			from '@mui/icons-material/Menu';
//Style
import { styled }	from '@mui/material/styles';


//Custom components
import MenuDrawer	from './MenuDrawer';
import CartButton	from '../../CartButton';


const HeaderSection = (props) => {
	return (
		<Grid item id={props.id} xs={props.xs} display="flex" justifyContent="center" alignItems="center" >
			{props.children}
		</Grid>
	)
}

const Logo = styled('img')({
	width: "100%",
	maxWidth: "10em",
	height: "auto"
});


//Main component content
const Header = () => {

	const [ drawerStatus, setDrawerStatus ] = useState(false);


	//Open the drawer
	const openDrawer = () => {
		setDrawerStatus(true);
	};

	//Close the drawer
	const closeDrawer = () => {
		setDrawerStatus(false);
	};


	//Component render
	return (
		<>
			<AppBar sx={{ backgroundColor: "var(--black-1)" }} position="sticky" >
				<Grid container spacing={0} height="4em">
					<HeaderSection id="cart-container" xs={2} >
						<CartButton />
					</HeaderSection>
					<HeaderSection id="logo-container" xs={8} >
						<Link to="/">
							<Logo src={logo} alt="Gamering logo" />
						</Link>
					</HeaderSection>
					<HeaderSection id="menu-container" xs={2} >
						<IconButton onClick={openDrawer} size="large" sx={{ color:"var(--white-2)" }} >
							<MenuIcon fontSize="inherit" />
						</IconButton>
					</HeaderSection>
				</Grid>
			</AppBar>
			<Container maxWidth="lg" sx={{ paddingTop: "1.25em", paddingBottom:"1.25em" }} component="main" >
				<Outlet />
			</Container>
			<Drawer open={drawerStatus} onClose={closeDrawer} anchor="right">
				<MenuDrawer closeDrawer={closeDrawer} />
			</Drawer>
		</>
	);
};


export default Header; //Export main component
