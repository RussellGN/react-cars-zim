import {
	Box,
	Grid,
	Typography,
	Button,
	Container,
	Stepper,
	Step,
	StepButton,
	useTheme,
	useMediaQuery,
	TextField,
	InputLabel,
	MenuItem,
	Select,
	FormControl,
	IconButton,
} from "@mui/material";
import {
	Delete,
	Add,
	Email,
	LocationOn,
	LocalPhone,
	InfoOutlined,
	LocalOffer,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import AnimatedRoute from "../components/routes/AnimatedRoute";

const ImageInput = (props) => {
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
					{source === "" ? <Add /> : <Delete />}
				</IconButton>
				<img
					ref={imageRef}
					src={source}
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
				<Box sx={{ width: "100%", mb: 2 }}>
					<TextField
						name="name"
						label="Name Of Vehicle"
						variant="outlined"
						sx={{ mb: 2, width: "100%" }}
					/>
					<TextField
						name="price"
						type="number"
						label="Price In USD"
						variant="outlined"
						sx={{ mb: 2, width: "100%" }}
					/>
					<TextField
						name="location"
						label="Location"
						variant="outlined"
						sx={{ mb: 2, width: "100%" }}
					/>
				</Box>
			);
		case 1:
			return (
				<Box sx={{ width: "100%", mb: 2 }}>
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
						name="mileage"
						type="number"
						label="Mileage In Kilometres"
						variant="outlined"
						sx={{ mb: 2, width: "100%" }}
					/>

					<TextField
						name="details"
						label="Other Details"
						variant="outlined"
						multiline
						rows={3}
						sx={{ mb: 2, width: "100%" }}
					/>
				</Box>
			);
		case 2:
			return (
				<Box sx={{ width: "100%", mb: 2 }}>
					<Grid container>
						{[1, 2, 3, 4, 5, 6].map((elem) => (
							<ImageInput key={elem} />
						))}
					</Grid>
				</Box>
			);
		case 3:
			return;
	}
};

const NewListing = () => {
	const steps = ["Answer some questions", "Give more detail", "Upload images", "Confirmation"];
	const [activeStep, setActiveStep] = useState(0);
	const [completed, setCompleted] = useState({});

	const totalSteps = () => steps.length;

	const completedSteps = () => Object.keys(completed).length;

	const isLastStep = () => activeStep === totalSteps() - 1;

	const allStepsCompleted = () => completedSteps() === totalSteps();

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
				  // find the first step that has been completed
				  steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

	const handleStep = (step) => () => setActiveStep(step);

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const theme = useTheme();
	const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px)`);

	return (
		<AnimatedRoute>
			<Container>
				<Stepper nonLinear activeStep={activeStep} sx={{ mb: 5 }}>
					{steps.map((step, index) => (
						<Step key={step} completed={completed[index]}>
							<StepButton color="inherit" onClick={handleStep(index)}>
								{isMobile === true ? null : step}
							</StepButton>
						</Step>
					))}
				</Stepper>

				<Container maxWidth="sm">
					<Box
						sx={{
							minHeight: "65vh",
							p: { md: 3 },
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Box
							sx={{
								flexGrow: 1,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Typography variant="h5" sx={{ mb: 5, textAlign: "center" }}>
								{`${activeStep + 1}. ${steps[activeStep]}`}
							</Typography>
							<Contents activeStep={activeStep} setActiveStep={setActiveStep} />
						</Box>

						<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
							<Button
								color="inherit"
								disabled={activeStep === 0}
								onClick={handleBack}
								sx={{ mr: 1 }}
							>
								Back
							</Button>

							<Box sx={{ flex: "1 1 auto" }} />

							{/* <Button onClick={handleNext} sx={{ mr: 1 }}>
								Next
							</Button> */}

							{activeStep !== steps.length &&
								(completed[activeStep] ? (
									<Typography variant="caption" sx={{ display: "inline-block" }}>
										Step {activeStep + 1} already completed
									</Typography>
								) : (
									<Button onClick={handleComplete}>
										{completedSteps() === totalSteps() - 1
											? "Finish"
											: "Proceed"}
									</Button>
								))}
						</Box>
					</Box>
				</Container>
			</Container>
		</AnimatedRoute>
	);
};

export default NewListing;
