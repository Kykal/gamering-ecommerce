import React, { useState, useEffect } from 'react';

//Logo
import logo from '../../assets/img/logo.png';


//Utils
import { checkLanguage } from '../../utils/languageUtils';


//React router
import { Link } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import Badge		from '@mui/material/Badge';
import Box			from '@mui/material/Box';
import Grid			from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
//Icons
import SearchIcon			from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//Styles
import { styled } from '@mui/material/styles';


//Custom components
import HeaderItem			from './HeaderItem';
import SearchContainer	from './SearchContainer';
import LanguageItem		from './LanguageItem';

//i18
import { useTranslation } from 'react-i18next';


//Custom Language icon
const Icon = styled(IconButton)({
	color: "var(--white-1)",

	"&:hover svg": {
		color: "var(--magenta)"
	},
	"& .MuiBadge-badge": {
		backgroundColor: "var(--magenta)"
	},
});


//Main component content
const Header = ({actual}) => {

	const [ t, i18 ] = useTranslation("global"); 
	const [ isSearching, setIsSearching ] = useState(false);

	useEffect( () => {
		i18.changeLanguage(checkLanguage());
	}, [] );

	//Shows search bar
	const isSearchingHandler = () => {
		//Change bool status
		setIsSearching( prevState => !prevState );
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

				position="relative"
			>
				<Grid item container xs={12} height="4.5em">
					<Grid item xs={3} display="flex" justifyContent="flex-start" alignItems="center" minWidth="4.5em" >
						<LanguageItem />
						<Box flexGrow={1} display="flex" justifyContent="center" alignItems="center" height="100%" >
							<Link to="/" >
								<img
									src={logo}
									alt="Gamering logo"
									
									style={{
										width: "100%",
										maxWidth: "12.5em",
										height: "auto"	
									}}
								/>
							</Link>
						</Box>
					</Grid>
					<Grid component="nav" item container xs={6}>
						<HeaderItem to="/components" actual={ actual==="components" ? true : false } >
							{t("header.components")}
						</HeaderItem>
						<HeaderItem to="/accesories" actual={ actual==="accesories" ? true : false } >
							{t("header.accesories")}
						</HeaderItem>
						<HeaderItem to="/peripherals" actual={ actual==="peripherals" ? true : false } >
							{t("header.peripherals")}
						</HeaderItem>
					</Grid>
					<Grid item xs={3} display="flex" justifyContent="space-evenly" alignItems="center" >
						<Icon size="large" onClick={isSearchingHandler} >
							<SearchIcon fontSize="inherit" />
						</Icon>
						<Icon size="large" >
							<Badge badgeContent={4} >
								<ShoppingCartIcon fontSize="inherit" />
							</Badge>
						</Icon>
					</Grid>
				</Grid>
				{isSearching && <SearchContainer onCloseSearchBar={isSearchingHandler} /> } {/* When search icon is pressed, this component will render */}
			</Grid>
		</>
	);
};


export default Header; //Export main component
