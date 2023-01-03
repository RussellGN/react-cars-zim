import { Email, LocationOn, LocalPhone, InfoOutlined, LocalOffer } from "@mui/icons-material";
import {
	useMediaQuery,
	Box,
	Button,
	Stepper,
	Step,
	StepButton,
	Typography,
	Container,
	Input,
	TextField,
	useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import AnimatedRoute from "../components/routes/AnimatedRoute";

const Contents = ({ activeStep, setActiveStep, listing }) => {
	if (activeStep === 0) {
		return (
			<Box>
				<Typography
					variant="h5"
					sx={{ display: "flex", alignItems: "center", mb: 3, justifyContent: "center" }}
				>
					<InfoOutlined fontSize="inherit" color="success" sx={{ mr: 1 }} />
					How It Works
				</Typography>

				<Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>
					Sum dolor sit amet consectetur adipisicing elit. Dolorum fugiat nam, impedit
					eum, quisquam facere odit distinctio optio rem vitae similique consequuntur ab
					magnam, repudiandae hic odio eligendi dolores? Tempora ex magnam.
				</Typography>

				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Button
						onClick={() => setActiveStep(1)}
						variant="contained"
						color="success"
						endIcon={<LocalOffer />}
						sx={{ m: 1, borderRadius: "3rem", textTransform: "capitalize" }}
					>
						<Box component="span" sx={{ display: { sm: "none" } }}>
							Bid
						</Box>
						<Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
							Make Formal Bid
						</Box>
					</Button>
					<Button
						onClick={() => setActiveStep(2)}
						variant="outlined"
						sx={{ m: 1, borderRadius: "3rem", textTransform: "capitalize" }}
					>
						Contact
						<Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
							Directly
						</Box>
					</Button>
				</Box>
			</Box>
		);
	} else if (activeStep === 1) {
		return (
			<Box>
				<Typography
					variant="h5"
					sx={{ display: "flex", alignItems: "center", mb: 3, justifyContent: "center" }}
				>
					Make a Formal Bid
				</Typography>

				<Box
					sx={{
						mb: 2,
						alignItems: "flex-start",
						justifyContent: "center",
						display: "flex",
						texAlign: "center",
					}}
				>
					<InfoOutlined fontSize="small" color="success" sx={{ mr: 0.5 }} />
					<Typography variant="body2">
						Lorem ipsum dolor sit, amet consectetur adipisicing
					</Typography>
				</Box>

				<Box sx={{ mb: 2 }}>
					<TextField
						variant="outlined"
						sx={{ mb: 2, width: "100%" }}
						label="Your Offer"
					/>
					<TextField
						variant="outlined"
						label="Queries"
						sx={{ width: "100%" }}
						multiline
						rows={3}
					/>
				</Box>

				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Button
						variant="contained"
						color="success"
						sx={{ m: 1, borderRadius: "3rem", textTransform: "capitalize" }}
					>
						Finish{" "}
					</Button>
				</Box>
			</Box>
		);
	} else {
		return (
			<Box>
				<Typography
					variant="h5"
					sx={{ display: "flex", alignItems: "center", mb: 3, justifyContent: "center" }}
				>
					Contact {listing?.owner?.username}
				</Typography>

				<div>
					<Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
						<LocalPhone fontSize="medium" />
						<Box
							sx={{
								ml: 1.5,
								borderLeft: "solid medium",
								borderColor: "divider",
								pl: 1.5,
							}}
						>
							<Typography variant="body1">Call</Typography>
							<Typography variant="body2">{listing.owner.phoneNumber}</Typography>
						</Box>
					</Box>

					<Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
						<Email fontSize="medium" />
						<Box
							sx={{
								ml: 1.5,
								borderLeft: "solid medium",
								borderColor: "divider",
								pl: 1.5,
							}}
						>
							<Typography variant="body1">Email</Typography>
							<Typography variant="body2">{listing.owner.email}</Typography>
						</Box>
					</Box>

					<Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
						<LocationOn fontSize="medium" />
						<Box
							sx={{
								ml: 1.5,
								borderLeft: "solid medium",
								borderColor: "divider",
								pl: 1.5,
							}}
						>
							<Typography variant="body1">Location</Typography>
							<Typography variant="body2">{listing.owner.location}</Typography>
						</Box>
					</Box>
				</div>
			</Box>
		);
	}
};

const Enquire = () => {
	const [activeStep, setActiveStep] = useState(0);

	const listing = {
		id: 1,
		slug: "toyota-hillux-legend-45-1",
		name: "Toyota Hillux legend 45",
		details:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam totam, ea alias voluptatibus quia aliquid soluta odit magnam unde consequuntur?",
		mileage: 43000,
		price: 67000,
		views: 321,
		location: "Harare",
		date: new Date(),
		owner: {
			username: "KB Motors",
			about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, dolore!",
			email: "gmharare@hotmail.com",
			category: "d",
			location: "Harare",
			phoneNumber: "+263 775668441",
		},
		coverImage: "/static/hillux1.jpeg",
		imageCount: 6,
		images: ["/static/hillux1.jpeg", "/static/hillux2.jpg", "/static/hillux3.jpeg"],
	};
	const theme = useTheme();

	const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px)`);

	const steps = ["How it works", "Make a formal bid (recommended)", "Contact directly"];
	const mobileSteps = ["Info", "Bid", "Contact"];

	const handleStep = (step) => () => setActiveStep(step);

	return (
		<AnimatedRoute>
			<Container>
				<Stepper nonLinear activeStep={activeStep}>
					{steps?.map((label, index) => (
						<Step key={label}>
							<StepButton color="inherit" onClick={handleStep(index)}>
								{isMobile === true ? mobileSteps[index] : label}
							</StepButton>
						</Step>
					))}
				</Stepper>

				<Container maxWidth="sm">
					<Box
						sx={{
							mt: { xs: 5, md: 10 },
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Contents
							activeStep={activeStep}
							setActiveStep={setActiveStep}
							listing={listing}
						/>
					</Box>
				</Container>
			</Container>
		</AnimatedRoute>
	);
};

export default Enquire;
