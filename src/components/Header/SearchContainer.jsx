import React from 'react';


//MATERIAL DESIGN
//Components
import Grid					from '@mui/material/Grid';
import TextField			from '@mui/material/TextField';
import InputAdornment	from '@mui/material/InputAdornment';
import IconButton			from '@mui/material/IconButton';
//Icons
import CloseIcon	from '@mui/icons-material/Close';
import SearchIcon	from '@mui/icons-material/Search';
//Styles
import { styled } from '@mui/material/styles';


//STYLED COMPONENTS
//Styled TextField MUI Component
const SearchBar = styled(TextField)({
	color: "var(--white-1)",
	backgroundColor: "var(--black-2)",
	
	outline: "none",

	marginTop: "1em",
	marginBottom: "1em",

	"& input": {
		color: "var(--white-2)"
	},

	"& svg": {
		fill: "var(--white-2)",
	}
});
//Styled IconButton MUI component
const CloseButton = styled(IconButton)({
	color: "var(--white-2)"
})

//Main component content
const SearchContainer = ({onCloseSearchBar}) => {


	//Component render
	return (
		<Grid
			item 
			container 
			xs={12}  
			spacing={0} 
			bgcolor="var(--black-1)" 
			display="flex" 
			justifyContent="center" 
			alignItems="center"

			position="absolute"
			top="4.5em"
		>
			<Grid item xs={1} />
			<Grid item xs={6} sm={6} md={3} >
				<SearchBar
					fullWidth
					InputProps={{
						startAdornment:
							<InputAdornment position="start" >
								<SearchIcon />
							</InputAdornment>
					}}
				/>
			</Grid>
			<Grid item xs={1} >
				<CloseButton size="large" onClick={onCloseSearchBar} >
					<CloseIcon fontSize="large" />
				</CloseButton>
			</Grid>
		</Grid>
	);
};


export default SearchContainer; //Export main component
