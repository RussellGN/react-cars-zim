import { Email, LocalOffer, LocalPhone, LocationOn } from "@mui/icons-material";
import { useTheme, Box, Container, Typography, Button, TextField } from "@mui/material";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import CustomStepper from "../components/general/CustomStepper";
import { useState } from "react";
import BackButton from "../components/general/BackButton";

const Contents = ({ activeStep, setActiveStep, listing }) => {
	if (activeStep === 0) {
		return (
			<Box>
				<Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
					How It Works
				</Typography>

				<Typography variant="body1" textAlign="center" sx={{ mb: 3 }}>
					Sum dolor sit amet consectetur adipisicing elit. Dolorum fugiat nam, impedit
					eum, quisquam facere odit distinctio optio rem vitae similique consequuntur ab
					magnam, repudiandae hic odio eligendi dolores? Tempora ex magnam.
				</Typography>

				<Box sx={{ textAlign: "center" }}>
					<Button
						size="small"
						onClick={() => setActiveStep(1)}
						variant="contained"
						color="success"
						endIcon={<LocalOffer />}
						sx={{ m: 1, borderRadius: "3rem", textTransform: "capitalize" }}
					>
						Bid
					</Button>
					<Button
						size="small"
						onClick={() => setActiveStep(2)}
						variant="outlined"
						sx={{ m: 1, borderRadius: "3rem", textTransform: "capitalize" }}
					>
						Contact
					</Button>
				</Box>
			</Box>
		);
	} else if (activeStep === 1) {
		return (
			<Box>
				<Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
					Make a Formal Bid
				</Typography>

				<TextField
					type="number"
					size="small"
					variant="outlined"
					sx={{
						mb: 3,
						width: "100%",
						"& .MuiInputBase-root": {
							borderRadius: "10px",
						},
					}}
					label="Your Offer - $"
				/>
				<TextField
					size="small"
					variant="outlined"
					label="Queries"
					sx={{
						mb: 3,
						width: "100%",
						"& .MuiInputBase-root": {
							borderRadius: "10px",
						},
					}}
					multiline
					rows={3}
				/>

				<Box sx={{ textAlign: "center" }}>
					<Button
						type="button"
						variant="contained"
						color="success"
						sx={{ borderRadius: "3rem", textTransform: "capitalize" }}
					>
						Finish
					</Button>
				</Box>
			</Box>
		);
	} else {
		return (
			<Box>
				<Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
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

	const theme = useTheme();
	const steps = ["Info", "Bid", "Contact"];

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
										listing={listing}
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

export default Enquire;
