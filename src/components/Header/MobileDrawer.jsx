import React, { useState } from 'react';


//React router
import { NavLink } from 'react-router-dom';


//react-i18next
import { useTranslation } from 'react-i18next'; //To use internationalized strings


//MATERIAL DESIGN
//Components
import Box					from '@mui/material/Box';
import List 				from '@mui/material/List';
import ListItem 			from '@mui/material/ListItem';
import ListItemButton	from '@mui/material/ListItemButton';
import ListItemText		from '@mui/material/ListItemText';
import IconButton 		from '@mui/material/IconButton';
import Dialog				from '@mui/material/Dialog';
//Icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
//Styles
import { styled } from '@mui/material/styles';


//Custom components
import SearchBar					from '../SearchBar';
import MobileLanguageDialog	from './MobileLanguageDialog';


const StyledDialog = styled(Dialog)({
	"& .MuiDialog-paper": {
		backgroundColor: "var(--black-2)",
		color: "var(--white-1)"
	},
});

const StyledNavLink = styled(NavLink)({
	width: "100%"
});


//Main component content
const MobileDrawer = ({closeDrawer}) => {
	
	const [ t ] = useTranslation("global");
	
	const [ dialogStatus, setDialogStatus ] = useState(false);


	//Options array
	const drawerOptionsLabel = [
		t("header.nav.components.label"),
		t("header.nav.accessories.label"),
		t("header.nav.peripherals.label")
	];

	const drawerOptionsURL = [
		t("header.nav.components.url"),
		t("header.nav.accessories.url"),
		t("header.nav.peripherals.url")
	];

	const openLanguageDialog = () => {
		setDialogStatus(true)
	};

	const closeLanguageDialog = () => {
		setDialogStatus(false)
	};

	//Component render
	return (
		<>
			<Box display="flex" justifyContent="flex-start" alignItems="center" >
				<IconButton onClick={closeDrawer} color="inherit" size="large" >
					<ChevronRightIcon fontSize="inherit" />
				</IconButton>
			</Box>
			<List>
				<ListItem>
					<SearchBar />
				</ListItem>
				{drawerOptionsLabel.map( (element, index) => (
					<ListItem  key={index} alignItems="center" >
						<StyledNavLink to={`${drawerOptionsURL[index]}`} >
							{({isActive}) => (
								<ListItemButton sx={{ color: isActive ? "var(--cyan)" : "var(--white-1)", textAlign: "center" }}  >
									<ListItemText primary={element} />
								</ListItemButton>
							)}
						</StyledNavLink>
					</ListItem>
				) )}
				<ListItem disablePadding alignItems="center">
					<ListItemButton onClick={openLanguageDialog} sx={{ color:"var(--magenta)", textAlign: "center" }} >
						<ListItemText primary={t("header.language")} />
					</ListItemButton>
				</ListItem>
			</List>
			<StyledDialog
				open={dialogStatus}
				onClose={closeLanguageDialog}
			>
				<MobileLanguageDialog closeDialog={closeLanguageDialog} />
			</StyledDialog>
		</>
					
	);
};


export default MobileDrawer; //Export main component
