import React from 'react';


//MATERIAL DESIGN
//Components
import Checkbox			from '@mui/material/Checkbox';
import Grid					from '@mui/material/Grid';
import List					from '@mui/material/List';
import ListItem			from '@mui/material/ListItem';
import ListItemButton	from '@mui/material/ListItemButton';
import ListItemIcon		from '@mui/material/ListItemIcon';
import ListItemText		from '@mui/material/ListItemText';


//Main component content
const FilterLabels = (props) => {

	const filters = props.filters;

	//To divide filters in two columns
	const half = Math.ceil(filters.length/2);
	const firstFilters	= filters.slice(0, half);
	const secondFilters	= filters.slice(half, filters.length);


	//Description. What does this?
	const filterToggleHandler = (index, filter) => () => {
		//Save current button index
		const currentIndex = props.activeFilters.index.indexOf(index);
		const newCheckedIndex = [...props.activeFilters.index];
		const newCheckedLabel = [...props.activeFilters.labels];

		if( currentIndex === -1 ){
			newCheckedIndex.push(index);
			newCheckedLabel.push(filter);
		}else {
			newCheckedIndex.splice( currentIndex, 1 );
			newCheckedLabel.splice( currentIndex, 1 );
		}

		props.updateActiveFilters(newCheckedIndex, newCheckedLabel);
	};

	//Component render
	return (
		<>
			<Grid item xs={6}>
				<List>
					{firstFilters.map( (filter, index) => {

						const labelId = `checkbox-list-label-${filter}`;

						return (
							<ListItem key={index} disablePadding >
								<ListItemButton role={undefined} onClick={filterToggleHandler(index, filter)} dense >
									<ListItemIcon>
										<Checkbox
											edge="start"
											checked={props.activeFilters.index.indexOf( index ) !== -1}
											tabIndex={-1}
											disableRipple
											inputProps={{ 'aria-labelledby': labelId }}

											sx={{
												color: "var(--white-2)",
												"&.Mui-checked": {
													color: "var(--magenta)"
												}
											}}
										/>
									</ListItemIcon>
									<ListItemText id={labelId} primary={ filter } />
								</ListItemButton>
							</ListItem>
						);
					} )}
				</List>
			</Grid>
			<Grid item xs={6}>
				<List>
					{secondFilters.map( (filter, index) => {

						const labelId = `checkbox-list-label-${filter}`;

						return (
							<ListItem key={index} disablePadding >
								<ListItemButton role={undefined} onClick={filterToggleHandler((index+half), filter)} dense >
									<ListItemIcon>
										<Checkbox
											edge="start"
											checked={props.activeFilters.index.indexOf( (index+half) ) !== -1}
											tabIndex={-1}
											disableRipple
											inputProps={{ 'aria-labelledby': labelId }}

											sx={{
												color: "var(--white-2)",
												"&.Mui-checked": {
													color: "var(--magenta)"
												}
											}}
										/>
									</ListItemIcon>
									<ListItemText id={labelId} primary={ filter } />
								</ListItemButton>
							</ListItem>
						);
					} )}
				</List>
			</Grid>
		</>
	);
};


export default FilterLabels; //Export main component
