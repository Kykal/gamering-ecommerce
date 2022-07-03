import React from 'react';


//MATERIAL DESIGN
//Components
import Box					from '@mui/material/Box';
import Typography			from '@mui/material/Typography';
import IconButton			from '@mui/material/IconButton';
import Divider				from '@mui/material/Divider';
import Slider				from '@mui/material/Slider';
import Grid					from '@mui/material/Grid';
import List					from '@mui/material/List';
import ListItem			from '@mui/material/ListItem';
import ListItemButton	from '@mui/material/ListItemButton';
import ListItemIcon		from '@mui/material/ListItemIcon';
import ListItemText		from '@mui/material/ListItemText';
//Icons
import Checkbox	from '@mui/material/Checkbox';
import CloseIcon	from '@mui/icons-material/Close';
//Styles
import { styled } from '@mui/material/styles';


const PriceRange = styled(Slider)({
	color: "var(--magenta)",
	"& .MuiSlider-thumb": {
		width: "15px",
		height: "15px"
	},
	"& .MuiSlider-thumb.Mui-active": {
		boxShadow: "0 0 0 14px rgba( var(--magenta-rgb), 0.16 )"
	},
	"& .MuiSlider-thumb:hover":{
		boxShadow: "0 0 0 8px rgba( var(--magenta-rgb), 0.16 )"
	},
	"& .MuiSlider-markLabel": {
		color: "var(--white-2)"
	}
});


const StyledCheckbox = styled(Checkbox)({
	color: "var(--grey)",
	"& .Mui-checked": {
		color: "var(--magenta)"
	}
});


//Main component content
const FiltersDrawer = (props) => {

	const prices = props.filters.prices;
	const manufacturers = props.filters.manufacturers;

	const halfListIndex = Math.ceil( manufacturers.length/2 );
	const leftManufacturerList = manufacturers.slice(0, halfListIndex);
	const rightManufacturerList = manufacturers.slice(halfListIndex, manufacturers.length);

	
	//Defines how slider thumb value will be displayed
	const sliderFormat = (value) => {
		return `US$ ${value}`;
	};

	//Component render
	return (
		<>
			<Box 
				display="flex" 
				justifyContent="space-between" 
				alignItems="center"
				paddingBottom="0.25em"
			>
				<Typography variant="h6" >Filters</Typography>
				<IconButton
					onClick={props.closeDrawer}
					sx={{
						color: "var(--white-2)"
					}}

					size="medium"
				>
					<CloseIcon fontSize="inherit" />
				</IconButton>
			</Box>
			<Divider sx={{ backgroundColor:"var(--grey)" }} />
			<Box id="filter__price" paddingTop="1.25em" >
				<Typography variant="subtitle1" ><strong>Price range</strong></Typography>
				<Box id="slider" paddingLeft="1.5em" paddingRight="1.5em" >
					<PriceRange

						value={prices.actual}
						onChange={props.onPriceRangeChange}

						max={prices.max}
						min={prices.min}

						marks={[
							{
								value: prices.min,
								label: `US$ ${prices.min}`
							},
							{
								value: prices.max,
								label: `US$ ${prices.max}`
							}
						]}

						valueLabelDisplay="auto"
						valueLabelFormat={sliderFormat}
						disableSwap
					/>
				</Box>
			</Box>
			<Box id="filter__manufacturer" paddingTop="1.25em" >
				<Typography variant="subtitle1" ><strong>Manufacturers</strong></Typography>
				<List>
					<Grid container spacing={0}>
						<Grid item xs={6} >
							{leftManufacturerList.map( (manufacturer, index) => (
								<ListItem disablePadding key={index} >
									<ListItemButton role={undefined} dense >
										<ListItemIcon>
											<StyledCheckbox
												edge="start"
												tabIndex={-1}
												disableRipple
												checked={true}
											/>
										</ListItemIcon>
										<ListItemText
											primary={manufacturer}
										/>
									</ListItemButton>
								</ListItem>
							) )}
						</Grid>
						<Grid item xs={6} >
							{rightManufacturerList.map( (manufacturer, index) => (
								<ListItem disablePadding key={index} >
									<ListItemButton role={undefined} dense >
										<ListItemIcon>
											<StyledCheckbox
												edge="start"
												tabIndex={-1}
												disableRipple
												checked={false}
											/>
										</ListItemIcon>
										<ListItemText
											primary={manufacturer}
										/>
									</ListItemButton>
								</ListItem>
							) )}
						</Grid>
					</Grid>
				</List>
			</Box>
		</>
	);
};


export default FiltersDrawer; //Export main component
