import { AddOutlined, DeleteOutlined } from "@mui/icons-material";
import {
	useTheme,
	Box,
	Container,
	Typography,
	Button,
	TextField,
	Grid,
	IconButton,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

import CustomStepper from "../components/general/CustomStepper";
import { useRef, useState } from "react";
import BackButton from "../components/general/BackButton";
import AnimatedRoute from "../components/routes/AnimatedRoute";

const ImageInput = () => {
	const [source, setSource] = useState("");
	const inputRef = useRef();
	const imageRef = useRef();

	const addImage = () => {
		inputRef?.current?.click();
	};

	const showImage = () => {
		const url = URL.createObjectURL(inputRef.current.files[0]);
		setSource(url);
	};

	return (
		<Grid item xs={6} sm={4} sx={{ p: 0.5 }}>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					height: "6rem",
					borderRadius: "10px",
					border: "solid thin",
					borderColor: "divider",
				}}
			>
				<IconButton
					onClick={addImage}
					sx={{
						width: "100%",
						height: "100%",
						position: "absolute",
						top: 0,
						left: 0,
						borderRadius: "10px",
					}}
				>
					{source === "" ? <AddOutlined /> : <DeleteOutlined />}
				</IconButton>
				<img
					ref={imageRef}
					src={source ? source : ""}
					alt="preview"
					style={{
						display: source === "" ? "none" : "block",
						borderRadius: "10px",
						border: "solid thin",
						width: "100%",
						objectFit: "cover",
						height: "6rem",
					}}
				/>
				<input
					multiple={false}
					onChange={showImage}
					ref={inputRef}
					type="file"
					accept="image/*"
					style={{ display: "none" }}
				/>
			</Box>
		</Grid>
	);
};

const Contents = ({ activeStep, setActiveStep }) => {
	const [category, setCategory] = useState("");

	const handleCategoryChange = (e) => setCategory(e.target.value);

	switch (activeStep) {
		case 0:
			return (
				<Box>
					<Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
						How It Works
					</Typography>

					<Typography variant="body1" textAlign="center" sx={{ mb: 3 }}>
						Sum dolor sit amet consectetur adipisicing elit. Dolorum fugiat nam, impedit
						eum, quisquam facere odit distinctio optio rem vitae similique consequuntur
						ab magnam, repudiandae hic odio eligendi dolores? Tempora ex magnam.
					</Typography>

					<Box sx={{ textAlign: "center" }}>
						<Button
							size="small"
							onClick={() => setActiveStep((prev) => prev + 1)}
							color="success"
							sx={{ m: 1 }}
						>
							Proceed
						</Button>
					</Box>
				</Box>
			);
		case 1:
			return (
				<Box>
					<Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
						Details
					</Typography>

					<TextField
						size="small"
						variant="outlined"
						name="name"
						label="Name Of Vehicle"
						sx={{
							mb: 3,
							width: "100%",
							"& .MuiInputBase-root": {
								borderRadius: "10px",
							},
						}}
					/>
					<TextField
						size="small"
						variant="outlined"
						type="number"
						name="price"
						label="Price - $"
						sx={{
							mb: 3,
							width: "100%",
							"& .MuiInputBase-root": {
								borderRadius: "10px",
							},
						}}
					/>
					<TextField
						size="small"
						variant="outlined"
						name="location"
						label="Location"
						sx={{
							mb: 3,
							width: "100%",
							"& .MuiInputBase-root": {
								borderRadius: "10px",
							},
						}}
					/>
					<Box sx={{ textAlign: "center" }}>
						<Button
							size="small"
							onClick={() => setActiveStep((prev) => prev + 1)}
							color="success"
							sx={{ m: 1 }}
						>
							Proceed
						</Button>
					</Box>
				</Box>
			);
		case 2:
			return (
				<Box>
					<Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
						Details
					</Typography>

					<Box
						sx={{
							display: "flex",
							justifyContent: "space-around",
							alignItems: "center",
							mb: 2,
						}}
					>
						<Typography>Vehicle category</Typography>
						<FormControl sx={{ minWidth: "10rem" }} size="small">
							<InputLabel id="demo-simple-select-label">Category</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								name="category"
								value={category}
								label="Category"
								onChange={handleCategoryChange}
							>
								<MenuItem value="c">Car</MenuItem>
								<MenuItem value="m">Motorbike</MenuItem>
								<MenuItem value="s">Shuttle</MenuItem>
								<MenuItem value="f">Freighter</MenuItem>
							</Select>
						</FormControl>
					</Box>

					<TextField
						size="small"
						variant="outlined"
						name="mileage"
						type="number"
						label="Mileage - km"
						sx={{
							mb: 3,
							width: "100%",
							"& .MuiInputBase-root": {
								borderRadius: "10px",
							},
						}}
					/>
					<TextField
						size="small"
						variant="outlined"
						name="details"
						label="Details"
						multiline
						rows={3}
						sx={{
							mb: 3,
							width: "100%",
							"& .MuiInputBase-root": {
								borderRadius: "10px",
							},
						}}
					/>
					<Box sx={{ textAlign: "center" }}>
						<Button
							size="small"
							onClick={() => setActiveStep((prev) => prev + 1)}
							color="success"
							sx={{ m: 1 }}
						>
							Proceed
						</Button>
					</Box>
				</Box>
			);
		case 3:
			return (
				<Box>
					<Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
						Upload Images
					</Typography>

					<Grid container>
						{[1, 2, 3, 4, 5, 6].map((elem) => (
							<ImageInput key={elem} />
						))}
					</Grid>
					<Box sx={{ textAlign: "center" }}>
						<Button
							size="small"
							onClick={() => setActiveStep((prev) => prev + 1)}
							color="success"
							sx={{ m: 1 }}
						>
							Proceed
						</Button>
					</Box>
				</Box>
			);
		case 4:
			return (
				<Box>
					<Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
						Confirmation
					</Typography>

					<Typography variant="body1" textAlign="center" sx={{ mb: 3 }}>
						Sum dolor sit amet consectetur adipisicing elit. Dolorum fugiat nam, impedit
						eum, quisquam facere odit distinctio optio rem vitae similique consequuntur
						ab magnam, repudiandae hic odio eligendi dolores? Tempora ex magnam.
					</Typography>

					<Box sx={{ textAlign: "center" }}>
						<Button
							size="small"
							onClick={() => setActiveStep(1)}
							color="success"
							sx={{ m: 1 }}
						>
							Finish
						</Button>
					</Box>
				</Box>
			);
		default:
			return activeStep;
	}
};

const NewListing = () => {
	const [activeStep, setActiveStep] = useState(0);

	const theme = useTheme();
	const steps = [" Info  ", "Details", "Details", "Images", "Confirm"];

	function handleSubmit(e) {
		e.preventDefault();
		console.log("hello");
	}

	return (
		<AnimatedRoute>
			<Box
				sx={{
					py: 5,
					minHeight: "101vh",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: `linear-gradient(to bottom right, ${theme.palette.primary.main},${theme.palette.success.main}) !important`,
				}}
			>
				<Container maxWidth="sm">
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{
							minHeight: "90vh",
							boxShadow: theme.shadows[5],
							borderRadius: "20px",
							background: theme.palette.background.paper,
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Box
							sx={{
								p: 2,
								width: "100%",
							}}
						>
							<BackButton />
						</Box>

						<Box
							sx={{
								p: { xs: 2, sm: 8 },
								pt: "0 !important",
								width: "100%",
								flexGrow: "1",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<CustomStepper
								steps={steps}
								activeStep={activeStep}
								setActiveStep={setActiveStep}
								contents={
									<Contents
										activeStep={activeStep}
										setActiveStep={setActiveStep}
									/>
								}
							/>
						</Box>
					</Box>
				</Container>
			</Box>
		</AnimatedRoute>
	);
};

export default NewListing;
