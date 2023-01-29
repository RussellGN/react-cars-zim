import { useState } from "react";
import {
	Typography,
	Link as MaterialLink,
	Paper,
	FormControlLabel,
	FormControl,
	FormGroup,
	Checkbox,
} from "@mui/material";
import humanizeNumber from "../utils/humanizeNumber";

const CheckboxFilter = ({ filterItems, filterLabel, activeFilterItems, setActiveFilterItems }) => {
	const [showMore, setShowMore] = useState(false);
	const [items, setItems] = useState(filterItems);

	const handleChange = (e) => {
		setItems((prevItems) => {
			return {
				...prevItems,
				[e.target.name]: [e.target.checked, prevItems[e.target.name][1]],
			};
		});

		if (activeFilterItems.includes(e.target.name.split("_").join(" "))) {
			setActiveFilterItems((prevItems) => {
				return prevItems.filter((item) => item !== e.target.name.split("_").join(" "));
			});
		} else
			setActiveFilterItems((prevItems) => {
				return [e.target.name.split("_").join(" "), ...prevItems];
			});
	};

	return (
		<Paper variant="outlined" sx={{ p: 3, mb: 3, borderRadius: "10px" }}>
			<FormControl variant="standard" sx={{ width: "100%" }}>
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

					{Object.keys(items)?.length >= 4 ? (
						<MaterialLink
							variant="caption"
							component="button"
							underline="hover"
							onClick={() => setShowMore((prev) => !prev)}
						>
							{showMore ? "show less" : "show more"}
						</MaterialLink>
					) : null}
				</Typography>

				<FormGroup>
					{Object.keys(items)?.map((filterItemName, index) => {
						if (!showMore) {
							if (index >= 4) return "";
						}
						return (
							<FormControlLabel
								key={filterItemName}
								sx={{ m: 0 }}
								control={
									<Checkbox
										size="small"
										checked={items[filterItemName][0]}
										onChange={handleChange}
										name={filterItemName}
									/>
								}
								label={
									<>
										{filterItemName.split("_").join(" ")}
										<Typography
											variant="caption"
											component="span"
											sx={{
												ml: 1,
												color: "success.main",
											}}
										>
											{humanizeNumber(items[filterItemName][1], "shortened")}
										</Typography>
									</>
								}
							/>
						);
					})}
				</FormGroup>
			</FormControl>
		</Paper>
	);
};

export default CheckboxFilter;
