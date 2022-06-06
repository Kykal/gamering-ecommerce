import React, { useState } from 'react';


//Utils
import { validateURL } from '../../utils/queryUtils';


//react-i18next
import { useTranslation } from 'react-i18next';


//React router
import {
	useNavigate
} from 'react-router-dom';


//MATERIAL DESIGN
//Components
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
//Icons
import SearchIcon from '@mui/icons-material/Search';
//Styles
import { styled } from '@mui/material/styles';

//STYLED COMPONENTS
const SearchTextField = styled(TextField)({
	"& .MuiOutlinedInput-root": {
		borderRadius: 0,
		borderColor: "var(--white-2)",
		backgroundColor: "var(--black-3)",
		color:"var(--white-1)",
	},
	"& svg": {
		color: "var(--grey)",
	},
});

const SearchButton = styled(IconButton)({
	color: "var(--white-2)"
});

const StyledForm = styled('form')({
	width: "100%"
});


//Main component content
const SearchBar = ({closeDrawer}) => {
	//To update URL
	let navigate = useNavigate();
	//Fetch translations
	const [ t ] = useTranslation("global");
	
	//React states
	const [ searchValue, setSearchValue ] = useState("");


	//Updates TextField value
	const searchBarHandler = (event) => {
		setSearchValue(event.target.value);
	};

	//Starts a query
	const doQuery = (event) => {
		event.preventDefault();
		closeDrawer();
		
		//If search has no value, do nothing
		if(searchValue.length===0){
			return;
		}

		const newUrl = validateURL(searchValue);

		navigate(`/search?query=${newUrl}`);
	};

	//Component render
	return (
		<StyledForm onSubmit={doQuery}>
			<SearchTextField name="searchBar"
				fullWidth
	
				value={searchValue}
				onChange={searchBarHandler}
	
				placeholder={t("header.searchbar")}
	
				InputProps={{
					endAdornment:
						<InputAdornment position="end" >
							<SearchButton onClick={doQuery} >
								<SearchIcon />
							</SearchButton>
						</InputAdornment>
				}}
			/>
		</StyledForm>
	);
};


export default SearchBar; //Export main component
