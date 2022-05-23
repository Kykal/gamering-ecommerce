import React, { useState } from 'react';


//Utils
import { parseUrl } from '../../utils/urlUtils'; //Replace spaces with '+'


//React router
import {
	Link,
	useNavigate
} from 'react-router-dom';


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
const CIconButton = styled(IconButton)({
	color: "var(--white-2)"
})


//Main component content
const SearchContainer = ({onCloseSearchBar}) => {

	const navigate = useNavigate();
	const [ searchValue, setSearchValue ] = useState("");

	//Updates search bar value
	const searchValueHandler = (event) => {
		setSearchValue(event.target.value);
	};

	//When user press enter key
	const EnterKeyPressed = (event) => {
		//If pressed key is not "Enter", return
		if( event.key !== "Enter" ){
			return;
		}

		onCloseSearchBar();
		navigate(`/search?query=${parseUrl(searchValue)}`, { replace: true });
	};

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

					value={searchValue}
					onChange={searchValueHandler}
					onKeyDown={EnterKeyPressed}

					autoFocus

					InputProps={{
						startAdornment:
							<InputAdornment position="start" >
								<Link to={`/search?query=${parseUrl(searchValue)}`} onClick={onCloseSearchBar} >
									<CIconButton >
										<SearchIcon />
									</CIconButton>
								</Link>
							</InputAdornment>
					}}
				/>
			</Grid>
			<Grid item xs={1} >
				<CIconButton size="large" onClick={onCloseSearchBar} >
					<CloseIcon fontSize="inherit" />
				</CIconButton>
			</Grid>
		</Grid>
	);
};


export default SearchContainer; //Export main component
