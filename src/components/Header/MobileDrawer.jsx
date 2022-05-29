import React from 'react';


//react-i18next
import { useTranslation } from 'react-i18next'; //To use internationalized strings


//MATERIAL DESIGN
//Components
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
//Icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
//Styles
import { styled } from '@mui/material/styles';


//Custom components
import SearchBar from '../SearchBar';


//STYLED COMPONENTS
const StyledLIT = styled(ListItemText)({
	"& .MuiListItemText-primary": {
		textAlign: "center",
	},
});


//Main component content
const MobileDrawer = ({closeDrawer}) => {

	const [ t ] = useTranslation("global");

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
				{[t("header.nav.components"), t("header.nav.accessories"), t("header.nav.peripherals") ].map( (element, index) => (
					<ListItem  key={index} alignItems="center" >
						<ListItemButton >
							<StyledLIT primary={element} />
						</ListItemButton>
					</ListItem>
				) )}
				<ListItem disablePadding alignItems="center">
					<ListItemButton>
						<StyledLIT primary={t("header.language")} sx={{ color:"var(--magenta)" }} />
					</ListItemButton>
				</ListItem>
			</List>
		</>
	);
};


export default MobileDrawer; //Export main component
