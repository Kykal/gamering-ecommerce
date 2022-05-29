import React, { useState } from 'react';

//react-i18next
import { useTranslation } from 'react-i18next';


//MATERIAL DESIGN
//Components
import TextField from '@mui/material/TextField';
//Styles
import { styled } from '@mui/material/styles';


const SearchTextField = styled(TextField)({
	"& .MuiOutlinedInput-root": {
		borderRadius: 0,
		borderColor: "var(--white-2)"
	},
	"& .MuiOutlinedInput-input ": {
		color:"var(--white-1)",

		backgroundColor: "var(--black-3)",
	},
});


//Main component content
const SearchBar = () => {

	const [ t ] = useTranslation("global");
	const [ searchValue, setSearchValue ] = useState("");


	//Updates textfield value
	const searchBarHandler = (event) => {
		setSearchValue(event.target.value);
	};


	//Component render
	return (
		<SearchTextField name="searchBar"
			fullWidth

			value={searchValue}
			onChange={searchBarHandler}

			placeholder={t("header.searchbar")}
		/>
	);
};


export default SearchBar; //Export main component
