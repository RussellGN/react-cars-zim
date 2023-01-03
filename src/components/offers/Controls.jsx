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
	ListItemText,
	ListItem,
	List,
	Divider,
	AppBar,
	Toolbar,
	Typography,
	Slide,
} from "@mui/material";
import {
	Close,
	DirectionsCar,
	LocalShipping,
	AirportShuttle,
	TwoWheeler,
	Tune,
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
							<Close />
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
					<Tune />
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
						<MenuItem value="">Latest</MenuItem>
						<MenuItem value={10}>Oldest</MenuItem>
						<MenuItem value={22}>Price</MenuItem>
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
					<DirectionsCar />
				</IconButton>
				<IconButton
					onClick={() => setCategory("bikes")}
					sx={{
						border: "solid 3px transparent",
						borderColor: category === "bikes" ? "divider" : "",
					}}
				>
					<TwoWheeler />
				</IconButton>
				<IconButton
					onClick={() => setCategory("shuttles")}
					sx={{
						border: "solid 3px transparent",
						borderColor: category === "shuttles" ? "divider" : "",
					}}
				>
					<AirportShuttle />
				</IconButton>
				<IconButton
					onClick={() => setCategory("freighters")}
					sx={{
						border: "solid 3px transparent",
						borderColor: category === "freighters" ? "divider" : "",
					}}
				>
					<LocalShipping />
				</IconButton>
			</Stack>
		</>
	);
};

export default Controls;
