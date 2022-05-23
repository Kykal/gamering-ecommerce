import React, { useState } from 'react';


//Utils
import {
	changeLocalStorageLanguage,
	checkLanguage
} from '../../utils/languageUtils';


//MATERIAL DESIGN
//Components
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//Icons
import LanguageIcon		from '@mui/icons-material/Language';
//Styles
import { styled } from '@mui/material/styles';


//i18
import { useTranslation } from 'react-i18next';

//Styled icon button
const Icon = styled(IconButton)({
	color: "var(--white-1)",

	"&:hover .MuiSvgIcon-root": {
		color: "var(--magenta)"
	},

	"& .MuiBadge-badge": {
		backgroundColor: "var(--magenta)"
	},
});

const StyledMenu = styled(Menu)({
	"& .MuiMenu-paper": {
		backgroundColor: "var(--black-1)",
		color: "var(--white-2)",
	},

	"& li:hover": {
		color: "var(--magenta)",
	},
});

//Main component content
const LanguageItem = () => {

	//i18
	const [ t, i18n ] = useTranslation("global");

	const [ anchorEl, setAnchorEl ] = useState(null);
	const [ language, setLanguage ] = useState(`${checkLanguage().toString()}`);

	const open = Boolean(anchorEl);


	const OpenLanguageMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const CloseLanguageMenu = () => {
		setAnchorEl(null);
	};

	//Change language
	const ChangeLanguage = (event) => {
		
		const newLanguage = event.target.getAttribute("value"); //Get value from menu item
		
		setAnchorEl(null); //Close menu
		setLanguage(newLanguage); //Change visual language 
		i18n.changeLanguage(newLanguage); //Change global language
		changeLocalStorageLanguage(newLanguage); //Change local storage language
	};

	//Component render
	return (
		<>
			<Icon size="large" onClick={OpenLanguageMenu} >
				<Badge badgeContent={language} >
					<LanguageIcon fontSize="inherit" />
				</Badge>
			</Icon>
			<StyledMenu
				anchorEl={anchorEl}
				open={open}
				onClose={CloseLanguageMenu}
			>
				<MenuItem onClick={ChangeLanguage} value="es" >Español</MenuItem>
				<MenuItem onClick={ChangeLanguage} value="en" >English</MenuItem>
			</StyledMenu>
		</>
	);
};


export default LanguageItem; //Export main component
