import {
	CheckCircleOutlined,
	EmailOutlined,
	LocalOfferOutlined,
	LocalPhoneOutlined,
	LocationOnOutlined,
} from "@mui/icons-material";
import {
	useTheme,
	Box,
	Container,
	Typography,
	Button,
	TextField,
	Link as MaterialLink,
} from "@mui/material";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import CustomStepper from "../components/general/CustomStepper";
import { useState } from "react";
import BackButton from "../components/general/BackButton";
import { useParams, Link } from "react-router-dom";
import listings from "../components/static-backend/listings";

const Contents = ({ activeStep, setActiveStep, listing }) => {
	const [finished, setFinished] = useState(false);
	const {
		owner: { username, slug },
	} = listing;

	function handleSubmit(e) {
		e.preventDefault();
		console.log({
			bid: e.bid,
			queries: e.queries,
		});
		setFinished(true);
	}

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
						color="success"
						endIcon={<LocalOfferOutlined />}
						sx={{ m: 1 }}
					>
						Bid
					</Button>
					<Button
						size="small"
						onClick={() => setActiveStep(2)}
						variant="outlined"
						sx={{ m: 1 }}
					>
						Contact
					</Button>
				</Box>
			</Box>
		);
	} else if (activeStep === 1) {
		if (finished)
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
							Your bid was sent! Feel free to contact
							<MaterialLink
								underline="hover"
								component={MaterialLink}
								to={"/account/" + slug}
								sx={{ mx: 0.7 }}
							>
								{username}
							</MaterialLink>
							directly if a response is <br /> taking too long.
						</Typography>
						<Button onClick={() => setActiveStep(2)} size="small">
							Contact
						</Button>
					</Box>
				</Box>
			);
		else
			return (
				<Box component="form" onSubmit={handleSubmit}>
					<Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
						Make a Formal Bid
					</Typography>

					<TextField
						required
						type="number"
						name="bid"
						size="small"
						variant="outlined"
						sx={{
							mb: 3,
							width: "100%",
							"& .MuiInputBase-root": {
								borderRadius: "30px",
							},
						}}
						label="Your Offer - $"
					/>
					<TextField
						size="small"
						variant="outlined"
						label="Queries"
						name="queries"
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
						<Button type="submit" onClick={handleSubmit} color="success">
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
					<Box
						sx={{
							display: "flex",
							backgroundColor: "divider",
							borderRadius: "30px",
							p: 2,
							mb: 3,
						}}
					>
						<LocalPhoneOutlined fontSize="medium" />
						<Box
							sx={{
								ml: 1.5,
								borderLeft: "solid medium",
								borderColor: "divider",
								pl: 1.5,
							}}
						>
							<Typography variant="body2">{listing.owner.phoneNumber}</Typography>
						</Box>
					</Box>

					<Box
						sx={{
							display: "flex",
							backgroundColor: "divider",
							borderRadius: "30px",
							p: 2,
							mb: 3,
						}}
					>
						<EmailOutlined fontSize="medium" />
						<Box
							sx={{
								ml: 1.5,
								borderLeft: "solid medium",
								borderColor: "divider",
								pl: 1.5,
							}}
						>
							<MaterialLink
								component="a"
								href={"mailto:" + listing.owner.email}
								underline="hover"
								variant="body2"
							>
								{listing.owner.email}
							</MaterialLink>
						</Box>
					</Box>

					<Box
						sx={{
							display: "flex",
							backgroundColor: "divider",
							borderRadius: "30px",
							p: 2,
							mb: 3,
						}}
					>
						<LocationOnOutlined fontSize="medium" />
						<Box
							sx={{
								ml: 1.5,
								borderLeft: "solid medium",
								borderColor: "divider",
								pl: 1.5,
							}}
						>
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

	const { slug } = useParams();

	const listing = listings.find((listing) => listing.slug === slug);

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
