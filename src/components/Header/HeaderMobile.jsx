import React, { useState } from 'react';


//Gamering logo
import logo from '../../assets/img/logo/logo.png';


//React router
import {
	Link
} from 'react-router-dom';


//MATERIAL DESIGN
//Components
import AppBar		from '@mui/material/AppBar';
import Drawer		from '@mui/material/Drawer';
import Grid			from '@mui/material/Grid';
import IconButton	from '@mui/material/IconButton';
//Icons
import MenuIcon from '@mui/icons-material/Menu';
//Styles
import { styled } from '@mui/material/styles';


//Custom components
import CartButton		from './CartButton';
import MobileDrawer	from './MobileDrawer';


const Header = styled(AppBar)({
	backgroundColor: "var(--black-1)",
});


const MenuButton = styled(IconButton)({
	color: "var(--white-1)",
});

const StyledDrawer = styled(Drawer)({
	"& .MuiDrawer-paperAnchorRight": {
		width: "100%",
		backgroundColor: "var(--black-2)",
		color: "var(--white-1)",
	},
})


//Main component content
const HeaderMobile = () => {

	//Defines if drawer is open or not
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
			<Header position="sticky">
				<Grid container spacing={0} height="4em" >
					<Grid item xs={2} display="flex" justifyContent="center" alignItems="center" >
						<CartButton />
					</Grid>
					<Grid item xs={8} display="flex" justifyContent="center" alignItems="center" >
						<Link to="/">
							<img
								src={logo}
								alt="Gamering logo"
								style={{
									width: "100%",
									maxWidth: "10em",

									height: "auto"
								}}
							/>
						</Link>
					</Grid>
					<Grid item xs={2} display="flex" justifyContent="center" alignItems="center" >
						<MenuButton size="large" onClick={openDrawer} >
							<MenuIcon fontSize="inherit" />
						</MenuButton>
					</Grid>
				</Grid>
			</Header>
			<StyledDrawer
				anchor="right"
				open={drawerStatus}
				onClose={closeDrawer}
			>
				<MobileDrawer closeDrawer={closeDrawer} />
			</StyledDrawer>
		</>
	);
};


export default HeaderMobile; //Export main component
