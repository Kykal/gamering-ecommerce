import React, { useState } from 'react';


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

//STYLED COMPONENTS
const StyledLIT = styled(ListItemText)({
	"& .MuiListItemText-primary": {
		textAlign: "center",
	},
});


const StyledDialog = styled(Dialog)({
	"& .MuiDialog-paper": {
		backgroundColor: "var(--black-2)",
		color: "var(--white-1)"
	},
});


//Main component content
const MobileDrawer = ({closeDrawer}) => {
	
	const [ t ] = useTranslation("global");
	
	const [ dialogStatus, setDialogStatus ] = useState(false);
	
	//Options array
	const drawerOptions = [
		t("header.nav.components"),
		t("header.nav.accessories"),
		t("header.nav.peripherals")
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
				{drawerOptions.map( (element, index) => (
					<ListItem  key={index} alignItems="center" >
						<ListItemButton >
							<StyledLIT primary={element} />
						</ListItemButton>
					</ListItem>
				) )}
				<ListItem disablePadding alignItems="center">
					<ListItemButton onClick={openLanguageDialog} >
						<StyledLIT primary={t("header.language")} sx={{ color:"var(--magenta)" }} />
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
