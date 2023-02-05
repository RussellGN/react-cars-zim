import { AddOutlined, CheckCircleOutlined, DeleteOutlined } from "@mui/icons-material";
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
	useMediaQuery,
} from "@mui/material";
import CustomStepper from "../components/general/CustomStepper";
import { useRef, useState } from "react";
import BackButton from "../components/general/BackButton";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import { Link, useLocation } from "react-router-dom";
import listings from "../components/static-backend/listings";

const ImageInput = ({ name, value: source, changeImageValue }) => {
	const inputRef = useRef();
	const imageRef = useRef();
	const theme = useTheme();
	const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px)`);
	const addOrRemoveImage = () => {
		if (source) {
			changeImageValue(name, "");
		} else inputRef?.current?.click();
	};

	const showImage = () => {
		if (inputRef.current.files.length > 0) {
			const url = URL.createObjectURL(inputRef.current.files[0]);
			changeImageValue(name, url);
		}
	};

	return (
		<Grid item xs={6} sm={4} sx={{ p: 0.5 }}>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					height: "6rem",
					borderRadius: "10px",
					border: source ? "" : "solid thin",
					borderColor: "divider",
				}}
			>
				<IconButton
					onClick={addOrRemoveImage}
					sx={{
						width: "100%",
						height: "100%",
						position: "absolute",
						top: 0,
						left: 0,
						borderRadius: "10px",
						transition: "all 0.2s",
						"&:hover": !isMobile
							? {
									backgroundColor: source ? "rgba(255,0,0,0.8)" : "",
									color: source ? "white" : "",
							  }
							: "",
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
						width: "100%",
						objectFit: "cover",
						height: "6rem",
					}}
				/>

				<input
					multiple={false}
					onChange={showImage}
					name={name}
					ref={inputRef}
					type="file"
					accept="image/*"
					style={{ display: "none" }}
				/>
			</Box>
		</Grid>
	);
};

const Contents = ({ activeStep, setActiveStep, formData, setFormData }) => {
	function handleFormDataChange(e) {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	}

	function changeImageValue(name, value) {
		setFormData((prev) => {
			return {
				...prev,
				images: {
					...prev.images,
					[name]: value,
				},
			};
		});
	}

	const { pathname } = useLocation();

	switch (activeStep) {
		case 0:
			return (
				<Box>
					<Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
						How It Works
					</Typography>

					<Typography variant="body1" textAlign="center">
						Sum dolor sit amet consectetur adipisicing elit. Dolorum fugiat nam, impedit
						eum, quisquam facere odit distinctio optio rem vitae similique consequuntur
						ab magnam, repudiandae hic odio eligendi dolores? Tempora ex magnam.
					</Typography>
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
						value={formData.name}
						onChange={handleFormDataChange}
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
						value={formData.price}
						onChange={handleFormDataChange}
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
						value={formData.location}
						onChange={handleFormDataChange}
						label="Location"
						sx={{
							mb: 3,
							width: "100%",
							"& .MuiInputBase-root": {
								borderRadius: "10px",
							},
						}}
					/>
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
								value={formData.category}
								onChange={handleFormDataChange}
								label="Category"
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
						type="number"
						name="mileage"
						value={formData.mileage}
						onChange={handleFormDataChange}
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
						value={formData.details}
						onChange={handleFormDataChange}
						label="Details"
						multiline
						rows={3}
						sx={{
							width: "100%",
							"& .MuiInputBase-root": {
								borderRadius: "10px",
							},
						}}
					/>
				</Box>
			);
		case 3:
			return (
				<Box>
					<Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
						Upload Images
					</Typography>
					<Grid container>
						{Object.keys(formData.images).map((item) => (
							<ImageInput
								key={item}
								name={item}
								value={formData.images[item]}
								changeImageValue={changeImageValue}
							/>
						))}
					</Grid>
				</Box>
			);
		case 4:
			return (
				<Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 3,
						}}
					>
						<CheckCircleOutlined sx={{ fontSize: "5rem" }} />
						<Typography sx={{ textAlign: "center" }}>
							Your listing has been <br />{" "}
							{pathname.includes("/edit-listing") ? "updated" : "uploaded"}!
						</Typography>
						<Button
							size="small"
							component={Link}
							to="/view-offer/toyota-hillux-legend-45-1"
						>
							View
						</Button>
					</Box>
				</Box>
			);
		default:
			return activeStep;
	}
};

const NewListing = () => {
	const [formData, setFormData] = useState({
		name: "",
		price: "",
		location: "",
		mileage: "",
		category: "",
		details: "",
		images: {
			image1: "",
			image2: "",
			image3: "",
			image4: "",
			image5: "",
			image6: "",
		},
	});

	const [activeStep, setActiveStep] = useState(0);

	const theme = useTheme();

	const steps = [" Info  ", "Details", "Details", "Images", "Confirm"];

	if (activeStep === steps.length - 1) console.log(formData);

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
						sx={{
							minHeight: { xs: "38rem", md: "36.5rem" },
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
							<BackButton onlyRoute={activeStep === steps.length - 1 ? "/" : ""} />
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
								hideAtConfirm
								contents={
									<Contents
										formData={formData}
										setFormData={setFormData}
										activeStep={activeStep}
										setActiveStep={setActiveStep}
									/>
								}
							/>
							<Box
								sx={{
									display: "flex",
									width: "100%",
								}}
							>
								<Button
									variant="text"
									size="small"
									onClick={() => setActiveStep((prev) => prev - 1)}
									color="success"
									sx={{
										m: 1,
										display:
											activeStep === 0 || activeStep === steps.length - 1
												? "none"
												: "",
									}}
								>
									Back
								</Button>
								<Button
									size="small"
									onClick={() => setActiveStep((prev) => prev + 1)}
									color="success"
									sx={{
										m: 1,
										ml: "auto",
										display: activeStep === steps.length - 1 ? "none" : "",
									}}
								>
									{activeStep === steps.length - 2 ? "Finish" : "Proceed"}
								</Button>
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>
		</AnimatedRoute>
	);
};

export default NewListing;
