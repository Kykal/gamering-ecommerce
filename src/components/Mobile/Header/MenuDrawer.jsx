import React, { useState } from 'react';


//Hooks
import { parseURL } from '../../../hooks/queryHooks';


//React router
import { useNavigate, NavLink } from 'react-router-dom';


//MATERIAL DESIGN
//Components
import Box					from '@mui/material/Box';
import IconButton			from '@mui/material/IconButton';
import List					from '@mui/material/List';
import ListItem			from '@mui/material/ListItem';
import ListItemButton	from '@mui/material/ListItemButton';
import ListItemText		from '@mui/material/ListItemText';
//Icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
//Styled
import { styled } from '@mui/material/styles';


//Custom components
import SearchField from '../../SearchField/SearchField';


//Styled components
const Form = styled('form')({
	paddingLeft: "1em",
	paddingRight: "1em",
	paddingTop: "1em",
});

const StyledNavLink = styled(NavLink)({
	width: "100%",
	textDecoration: "none",
});


//Main component content
const MenuDrawer = (props) => {

	const [ search, setSearch ] = useState("");
	const nav = useNavigate();

	const navsLabels = [ 'COMPONENTS', 'ACCESSORIES', 'PERIPHERALS' ];


	//Update TextField value
	const searchHandler = (event) => {
		setSearch(event.target.value);
	};


	//Do a query
	const submitHandler = (event) => {
		//Save search value
		const query = search;
		
		//Prevent to refresh site
		event.preventDefault();
		
		//Restart input value
		setSearch("");	
		props.closeDrawer();
		//Changes URL
		nav(`/search?query=${parseURL(query)}`);
	};

	//Component render
	return (
		<Box 
			role="presentation" 
			sx={{ 
				backgroundColor: "var(--black-2)", 
				width: "100vw", 
				height:"100vh"
			}}
		>
			<Box 
				display="flex" 
				justifyContent="flex-start" 
				alignItems="center"
			>
				<IconButton 
					onClick={props.closeDrawer} 
					
					size="large"
					sx={{ 
						color: "var(--white-2)"
					}}
				>
					<ChevronRightIcon fontSize="inherit" />
				</IconButton>
			</Box>
			<Form onSubmit={submitHandler}>
				<SearchField
					value={search}
					onChange={searchHandler}
					placeholder={"Search..."}
				/>
			</Form>
			<Box component="nav" >
				<List>
					{navsLabels.map( (nav, index) => (
						<ListItem key={index}>
							<StyledNavLink to={nav.toLowerCase()} onClick={props.closeDrawer} >
								{({isActive}) => (
									<ListItemButton sx={{ textAlign: "center", color: isActive ? "var(--cyan)" : "var(--white-2)"}}  >
										<ListItemText
											primary={nav}
										/>
									</ListItemButton>
								)}
							</StyledNavLink>
						</ListItem>
					) )}
				</List>
			</Box>
		</Box>
	);
};


export default MenuDrawer; //Export main component
