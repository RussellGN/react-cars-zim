import { useState } from "react";
import { Grid, Typography, Button, useTheme } from "@mui/material";
import ActiveFilters from "./ActiveFilters";
import BracketFilter from "./BracketFilter";
import CheckboxFilter from "./CheckboxFilter";

export const FiltersOnly = () => {
	const [activeFilterItems, setActiveFilterItems] = useState(["($) 100 +", "(km) 0 +"]);

	const filters = {
		Location: {
			Harare: [false, 2324],
			Bulawayo: [false, 43534],
			Victoria_Falls: [false, 132],
			Masvingo: [false, 2452],
			Kwekwe: [false, 10],
			Nyanga_District: [false, 765],
		},
		Brand: {
			Toyota: [false, 4356],
			Nissan: [false, 5324],
			Mercedes_Benz: [false, 734],
			Honda: [false, 7400],
			BMW: [false, 234],
			Jeep: [false, 1324],
		},
		Date: {
			This_Week: [false, 54324],
			This_Month: [false, 332324],
			This_Year: [false, 6782324],
		},
	};

	const priceMarks = [
		{
			value: 1,
			label: "100",
		},
		{
			value: 2,
			label: "10k",
		},
		{
			value: 3,
			label: "50k",
		},
		{
			value: 4,
			label: "+",
		},
	];

	const mileageMarks = [
		{
			value: 1,
			label: "0",
		},
		{
			value: 2,
			label: "10k",
		},
		{
			value: 3,
			label: "50k",
		},
		{
			value: 4,
			label: "+",
		},
	];

	return (
		<>
			<ActiveFilters
				activeFilterItems={activeFilterItems}
				setActiveFilterItems={setActiveFilterItems}
			/>

			<BracketFilter
				filterLabel={"Price Range - $"}
				marks={priceMarks}
				activeFilterItems={activeFilterItems}
				setActiveFilterItems={setActiveFilterItems}
			/>

			{Object.keys(filters)?.map((filter) => (
				<CheckboxFilter
					key={filter}
					filterLabel={filter}
					filterItems={filters[filter]}
					activeFilterItems={activeFilterItems}
					setActiveFilterItems={setActiveFilterItems}
				/>
			))}

			<BracketFilter
				filterLabel={"Mileage - km"}
				marks={mileageMarks}
				activeFilterItems={activeFilterItems}
				setActiveFilterItems={setActiveFilterItems}
			/>
		</>
	);
};

const Sidebar = () => {
	const theme = useTheme();

	return (
		<Grid
			item
			md={3}
			sx={{
				display: { xs: "none", md: "block" },
				position: "sticky",
				top: "100px",
				height: "80vh",
				overflowY: "scroll",
				pr: 2,
				borderBottom: `solid thin ${theme.palette.divider}`,
			}}
		>
			<Typography
				variant="h5"
				textAlign="center"
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
					mb: 4,
				}}
			>
				<span>Filters</span>
				<Button size="small" color="success">
					Apply
				</Button>
			</Typography>

			<FiltersOnly />
		</Grid>
	);
};

export default Sidebar;
