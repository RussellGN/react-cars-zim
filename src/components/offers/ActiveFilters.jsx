import { Chip, Box } from "@mui/material";

const ActiveFilters = ({ activeFilterItems }) => {
	return (
		<Box
			sx={{
				display: "flex",
				gap: 0.5,
				flexWrap: "wrap",
				justifyContent: "center",
				mb: 2,
			}}
		>
			{activeFilterItems?.map((item) => (
				<Chip key={item} size="small" label={item} />
			))}
		</Box>
	);
};

export default ActiveFilters;
