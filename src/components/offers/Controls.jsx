import {
	useTheme,
	TextField,
	Box,
	MenuItem,
	Select,
	InputLabel,
	FormControl,
	Stack,
	IconButton,
	useMediaQuery,
	Button,
	Dialog,
	AppBar,
	Toolbar,
	Typography,
	Slide,
} from "@mui/material";
import {
	CloseOutlined,
	DirectionsCarOutlined,
	LocalShippingOutlined,
	AirportShuttleOutlined,
	TwoWheelerOutlined,
	TuneOutlined,
} from "@mui/icons-material";
import { useState } from "react";

import * as React from "react";
import { FiltersOnly } from "./Sidebar";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const Controls = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const theme = useTheme();
	const [sortBy, setSortBy] = useState("");
	const [category, setCategory] = useState("cars");

	const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px)`);
	const handleSelect = (event) => setSortBy(event.target.value);

	return (
		<>
			<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
				<AppBar
					elevation={1}
					sx={{
						position: "relative",
						backgroundColor: "background.paper",
						color: "text.primary",
					}}
				>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseOutlined />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							Filters
						</Typography>
						<Button
							variant="contained"
							size="small"
							autoFocus
							color="success"
							sx={{ borderRadius: theme.radii.border3, textTransform: "capitalize" }}
							onClick={handleClose}
						>
							Apply
						</Button>
					</Toolbar>
				</AppBar>

				<Box sx={{ p: 3 }}>
					<FiltersOnly />
				</Box>
			</Dialog>

			<Box sx={{ display: "flex", mb: 4 }}>
				<IconButton
					onClick={handleClickOpen}
					sx={{ borderRadius: 0, display: { md: "none" } }}
				>
					<TuneOutlined />
				</IconButton>
				<TextField
					variant="outlined"
					label="Search... "
					size={isMobile === true ? "small" : "medium"}
					sx={{ flexGrow: 1, borderRadius: theme.radii.border1 }}
				/>

				<FormControl sx={{ minWidth: 80 }} size={isMobile === true ? "small" : "medium"}>
					<InputLabel id="demo-simple-select-autowidth-label">Sort</InputLabel>
					<Select
						labelId="demo-simple-select-autowidth-label"
						id="demo-simple-select-autowidth"
						value={sortBy}
						onChange={handleSelect}
						label="Sort"
						autoWidth
						sx={{ width: "fitContent" }}
					>
						<MenuItem value="Latest">Latest</MenuItem>
						<MenuItem value="Oldest">Oldest</MenuItem>
						<MenuItem value="Highest Price">Highest Price </MenuItem>
						<MenuItem value="Lowest Price">Lowest Price</MenuItem>
						<MenuItem value="Highest Mileage">Highest Mileage </MenuItem>
						<MenuItem value="Lowest Mileage">Lowest Mileage</MenuItem>
					</Select>
				</FormControl>
			</Box>

			<Stack direction="row" justifyContent="center" gap={2} sx={{ mb: 4 }}>
				<IconButton
					onClick={() => setCategory("cars")}
					sx={{
						border: "solid 3px transparent",
						borderColor: category === "cars" ? "divider" : "",
					}}
				>
					<DirectionsCarOutlined />
				</IconButton>
				<IconButton
					onClick={() => setCategory("bikes")}
					sx={{
						border: "solid 3px transparent",
						borderColor: category === "bikes" ? "divider" : "",
					}}
				>
					<TwoWheelerOutlined />
				</IconButton>
				<IconButton
					onClick={() => setCategory("shuttles")}
					sx={{
						border: "solid 3px transparent",
						borderColor: category === "shuttles" ? "divider" : "",
					}}
				>
					<AirportShuttleOutlined />
				</IconButton>
				<IconButton
					onClick={() => setCategory("freighters")}
					sx={{
						border: "solid 3px transparent",
						borderColor: category === "freighters" ? "divider" : "",
					}}
				>
					<LocalShippingOutlined />
				</IconButton>
			</Stack>
		</>
	);
};

export default Controls;
