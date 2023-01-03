import { useState } from "react";
import {
	Typography,
	useTheme,
	Link as MaterialLink,
	Box,
	Paper,
	FormControlLabel,
	FormControl,
	FormGroup,
	Checkbox,
} from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

const CheckboxFilter = ({ filterItems, filterLabel }) => {
	const [showMore, setShowMore] = useState(false);
	const [items, setItems] = useState(filterItems);
	const theme = useTheme();

	const handleChange = (e) => {
		setItems((prevItems) => {
			return { ...prevItems, [e.target.name]: e.target.checked };
		});
	};

	return (
		<Paper variant="outlined" sx={{ p: 4, mb: 3, borderRadius: theme.radii.border1 }}>
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
					<MaterialLink
						variant="caption"
						component="button"
						underline="hover"
						// color="success"
						onClick={() => setShowMore((prev) => !prev)}
					>
						{showMore ? "show less" : "show more"}
					</MaterialLink>
				</Typography>

				<FormGroup>
					{Object.keys(items)?.map((item, index) => {
						if (!showMore) {
							if (index >= 4) return;
						}
						return (
							<FormControlLabel
								key={item}
								control={
									<Checkbox
										size="small"
										checked={items[item]}
										onChange={handleChange}
										name={item}
									/>
								}
								label={item.split("_").join(" ")}
							/>
						);
					})}
				</FormGroup>
			</FormControl>
		</Paper>
	);
};

export default CheckboxFilter;
