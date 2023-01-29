import { useState } from "react";
import { Typography, Slider, Paper } from "@mui/material";

const BracketFilter = ({ filterLabel, marks, activeFilterItems, setActiveFilterItems }) => {
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
				changeActiveBracketFilter([clamped - minDistance, clamped]);
			}
		} else {
			setValue(newValue);
			changeActiveBracketFilter(newValue);
		}
	};

	function changeActiveBracketFilter(nums) {
		let firstNum;
		let secondNum;
		let label;

		if (filterLabel.startsWith("P")) {
			nums.forEach((num, index) => {
				switch (num) {
					case 1:
						if (index === 0) firstNum = "100";
						else secondNum = "100";
						return;
					case 2:
						if (index === 0) firstNum = "10k";
						else secondNum = "10k";
						return;
					case 3:
						if (index === 0) firstNum = "50k";
						else secondNum = "50k";
						return;
					default:
						if (index === 0) firstNum = "+";
						else secondNum = "+";
						return;
				}
			});

			label = `($) ${firstNum}${secondNum === "+" ? " " : " - "}${secondNum}`;

			setActiveFilterItems((prev) => {
				let newItems = prev.filter((item) => !item.includes("$"));
				newItems.unshift(label);

				return newItems;
			});
		} else {
			nums.forEach((num, index) => {
				switch (num) {
					case 1:
						if (index === 0) firstNum = "0";
						else secondNum = "0";
						return;
					case 2:
						if (index === 0) firstNum = "10k";
						else secondNum = "10k";
						return;
					case 3:
						if (index === 0) firstNum = "50k";
						else secondNum = "50k";
						return;
					default:
						if (index === 0) firstNum = "+";
						else secondNum = "+";
						return;
				}
			});

			label = `(km) ${firstNum}${secondNum === "+" ? " " : " - "}${secondNum}`;

			setActiveFilterItems((prev) => {
				let newItems = prev.filter((item) => !item.includes("km"));
				newItems.unshift(label);

				return newItems;
			});
		}
	}

	const minDistance = 1;

	return (
		<Paper variant="outlined" sx={{ p: 4, mb: 3, borderRadius: "10px" }}>
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
