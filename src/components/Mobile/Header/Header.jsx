import React from 'react';


//Assets
import logo from '../../../assets/img/logo/logo.png';


//React router
import { Outlet, NavLink, Link } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import AppBar		from '@mui/material/AppBar';
import Badge		from '@mui/material/Badge';
import Grid			from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Container	from '@mui/material/Container';
//Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon			from '@mui/icons-material/Menu';
//Style
import { styled }	from '@mui/material/styles';


//Custom components
import MenuDrawer from './MenuDrawer';


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


	//Component render
	return (
		<>
			<AppBar sx={{ backgroundColor: "var(--black-1)" }} position="sticky" >
				<Grid container spacing={0} height="4em">
					<HeaderSection id="cart-container" xs={2} >
						<NavLink to="cart">
							{({isActive}) => (
								<IconButton>
									<Badge 
										badgeContent={1} 
										max={9} 
										sx={{
											"& .BaseBadge-badge": {
												backgroundColor: "var(--magenta)",
												color: "var(--white-2)"
											},
											"& .MuiSvgIcon-root": { 
												color: isActive ? "var(--cyan)" : "var(--white-2)" 
											}
										}}
									>
										<ShoppingCartIcon />
									</Badge>
								</IconButton>
							)}
						</NavLink>
					</HeaderSection>
					<HeaderSection id="logo-container" xs={8} >
						<Link to="/">
							<Logo src={logo} alt="Gamering logo" />
						</Link>
					</HeaderSection>
					<HeaderSection id="menu-container" xs={2} >
						<IconButton sx={{ color:"var(--white-2)" }} >
							<MenuIcon />
						</IconButton>
					</HeaderSection>
				</Grid>
			</AppBar>
			<Container maxWidth="lg" sx={{ paddingTop: "1.25em", paddingBottom:"1.25em" }}  >
				<Outlet />
			</Container>
		</>
	);
};


export default Header; //Export main component
