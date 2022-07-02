import React from 'react';


//MATERIAL DESIGN
//Components
import TextField			from '@mui/material/TextField';
import InputAdornment	from '@mui/material/InputAdornment';
//Icons
import SearchIcon from '@mui/icons-material/Search';
//Styles
import { styled } from '@mui/material/styles';


const Input = styled(TextField)({
	backgroundColor: "var(--black-3)",
	"& .MuiInputBase-input": {
		color: "var(--white-2)"
	},

	"& .MuiSvgIcon-root": {
		color: "var(--grey)"
	}
});

//Main component content
const SearchField = (props) => {


	//Component render
	return (
		<Input
			value={props.value}
			onChange={props.onChange}
			placeholder={props.placeholder}
			
			fullWidth

			InputProps={{
				endAdornment: (
					<InputAdornment position="start" >
						<SearchIcon />
					</InputAdornment>
				)
			}}
		/>
	);
};


export default SearchField; //Export main component
