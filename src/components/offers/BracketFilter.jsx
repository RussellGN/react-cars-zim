import { useState } from "react";
import { Typography, Slider, Paper, useTheme } from "@mui/material";

const BracketFilter = ({ filterLabel, marks }) => {
	const theme = useTheme();
	const [value, setValue] = useState([1, 4]);

	const handleChange = (e, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) return;

		if (newValue[1] - newValue[0] < minDistance) {
			if (activeThumb === 0) {
				const clamped = Math.min(newValue[0], 5 - minDistance);
				setValue([clamped, clamped + minDistance]);
			} else {
				const clamped = Math.max(newValue[1], minDistance);
				setValue([clamped - minDistance, clamped]);
			}
		} else {
			setValue(newValue);
		}
	};

	const minDistance = 1;

	return (
		<Paper variant="outlined" sx={{ p: 4, mb: 3, borderRadius: theme.radii.border1 }}>
			<Typography
				variant="h6"
				sx={{
					mb: 1,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				{filterLabel}
			</Typography>

			<Slider
				size="small"
				value={value}
				onChange={handleChange}
				valueLabelDisplay="off"
				disableSwap
				step={null}
				marks={marks}
				min={1}
				max={4}
			/>
		</Paper>
	);
};

export default BracketFilter;
