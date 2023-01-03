import { Grid, Typography, Button, useTheme } from "@mui/material";
import BracketFilter from "./BracketFilter";
import CheckboxFilter from "./CheckboxFilter";

export const FiltersOnly = () => {
	const filters = {
		Location: {
			Harare: true,
			Bulawayo: true,
			Victoria_Falls: false,
			Masvingo: false,
			Kwekwe: false,
			Nyanga_District: false,
		},
		Brand: {
			Toyota: false,
			Nissan: false,
			Mercedes_Benz: false,
			Honda: false,
			BMW: false,
			Jeep: false,
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
			<BracketFilter filterLabel={"Price Range - $"} marks={priceMarks} />

			{Object.keys(filters)?.map((filter) => (
				<CheckboxFilter key={filter} filterLabel={filter} filterItems={filters[filter]} />
			))}

			<BracketFilter filterLabel={"Mileage - km"} marks={mileageMarks} />
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
				<Button
					variant="contained"
					size="small"
					color="success"
					sx={{ borderRadius: theme.radii.border3, textTransform: "capitalize" }}
				>
					Apply
				</Button>
			</Typography>
			<FiltersOnly />
		</Grid>
	);
};

export default Sidebar;
