import AnimatedRoute from "../components/routes/AnimatedRoute";
import {
	Container,
	Link as AnchorTag,
	Stack,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Box,
	Grid,
	useTheme,
	Typography,
	Button,
	IconButton,
	useMediaQuery,
} from "@mui/material";
import {
	LocationOn,
	KeyboardArrowDown,
	AccessTime,
	AttachMoney,
	Speed,
	KeyboardDoubleArrowRight,
	Filter,
	KeyboardDoubleArrowLeft,
	Edit,
	List,
	Share,
	DeleteOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../App";

const ViewOffer = () => {
	const { user } = useContext(UserContext);
	const [imageOnview, setImageOnview] = useState(0);
	const theme = useTheme();
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
			username: "generalMotorsHarare",
			slug: "generalmotorsharare",
			about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, dolore!",
		},
		coverImage: "/static/hillux1.jpeg",
		imageCount: 6,
		images: ["/static/hillux1.jpeg", "/static/hillux2.jpg", "/static/hillux3.jpeg"],
	};

	let isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.sm}px)`);

	function handleCarousel(direction) {
		let newImageOnView = imageOnview;

		if (direction === "next" && imageOnview < listing.images.length - 1) newImageOnView++;
		else if (direction === "next" && imageOnview === listing.images.length - 1)
			newImageOnView = 0;
		if (direction === "prev" && imageOnview > 0) newImageOnView--;
		if (direction === "prev" && imageOnview === 0) newImageOnView = listing.images.length - 1;

		setImageOnview(newImageOnView);
	}

	return (
		<AnimatedRoute>
			<Container>
				<Typography variant="h5" textAlign="center" sx={{ my: 4 }}>
					{listing.name}
				</Typography>

				<Box
					sx={{
						borderRadius: theme.radii.border1,
						overflow: "hidden",
						border: `solid 1px ${theme.palette.divider}`,
						display: { md: "flex" },
						mb: 5,
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							backgroundColor: "divider",
							width: { xs: "100%", md: "50%" },
							position: "relative",
						}}
					>
						<Typography
							variant="body2"
							sx={{
								display: "flex",
								alignItems: "center",
								position: "absolute",
								top: 0,
								left: 0,
								p: 1,
								backgroundColor: "dark.main",
								color: "light.main",
								boxShadow: theme.shadows[4],
								borderRadius: "0 0 10px 0",
							}}
						>
							<Filter fontSize="small" sx={{ mr: 0.5 }} />
							{`${imageOnview + 1}/${listing.images.length}`}
						</Typography>
						<img
							src={`/${process.env.REACT_APP_BASENAME}${listing.images[imageOnview]}`}
							alt={listing.name}
							style={{
								width: "100%",
								height: isMobile ? "13rem" : "60vh",
								maxHeight: "25rem",
								objectFit: "cover",
							}}
						/>
						<Box
							sx={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<IconButton
								size="small"
								sx={{
									backgroundColor: "dark.main",
									color: "white",
									m: 1,
									"&:hover": { backgroundColor: "dark.main" },
								}}
								onClick={() => handleCarousel("prev")}
							>
								<KeyboardDoubleArrowLeft />
							</IconButton>

							<IconButton
								size="small"
								sx={{
									backgroundColor: "dark.main",
									color: "white",
									m: 1,
									"&:hover": { backgroundColor: "dark.main" },
								}}
								onClick={() => handleCarousel("next")}
							>
								<KeyboardDoubleArrowRight />
							</IconButton>
						</Box>
					</Box>

					<Box
						sx={{
							width: { xs: "100%", md: "50%", minHeight: "100%" },
							p: { xs: 2, md: 4 },
							backgroundColor: "background.paper",
						}}
					>
						<Grid container spacing={0} alignItems="center" sx={{ mb: 2 }}>
							<Grid item xs zeroMinWidth sx={{ pr: 2 }}>
								<AnchorTag
									component={Link}
									to={`/account/${listing.owner.slug}`}
									underline="none"
								>
									<Typography variant="body1" fontSize="inherit" noWrap>
										{listing.owner.username}
									</Typography>
								</AnchorTag>
							</Grid>

							<Grid item xs="auto">
								<small style={{ display: "flex", alignItems: "center" }}>
									<Typography fontSize="inherit" noWrap>
										{listing.date.toLocaleDateString()}
									</Typography>
									<AccessTime fontSize="small" sx={{ ml: 1 }} />
								</small>
							</Grid>
						</Grid>

						<div>
							<Typography
								variant="body2"
								sx={{ display: "flex", alignItems: "center", mb: 2 }}
							>
								<AttachMoney fontSize="small" sx={{ mr: 1 }} />
								USD {listing.price}
							</Typography>

							<Typography
								variant="body2"
								sx={{ display: "flex", alignItems: "center", mb: 2 }}
							>
								<Speed fontSize="small" sx={{ mr: 1 }} />
								{listing.mileage} km
							</Typography>

							<Typography
								variant="body2"
								sx={{ display: "flex", alignItems: "center", mb: 2 }}
							>
								<LocationOn fontSize="small" sx={{ mr: 1 }} />
								{listing.location}
							</Typography>

							<Typography variant="body2" sx={{ mb: 2 }}>
								{listing.views} Views
							</Typography>
						</div>

						<div>
							<Accordion elevation={0} sx={{ p: 0 }}>
								<AccordionSummary
									expandIcon={<KeyboardArrowDown />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									sx={{ p: 0 }}
								>
									<Typography>Details</Typography>
								</AccordionSummary>

								<AccordionDetails sx={{ p: 0 }}>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse malesuada lacus ex, sit amet blandit leo
										lobortis eget.
									</Typography>
								</AccordionDetails>
							</Accordion>

							<Accordion elevation={0} sx={{ p: 0 }}>
								<AccordionSummary
									expandIcon={<KeyboardArrowDown />}
									aria-controls="panel2a-content"
									id="panel2a-header"
									sx={{ p: 0 }}
								>
									<Typography>About {listing.owner.username}</Typography>
								</AccordionSummary>

								<AccordionDetails sx={{ p: 0 }}>
									<Typography>{listing.owner.about} </Typography>
								</AccordionDetails>
							</Accordion>
						</div>

						<Stack
							direction="row"
							gap={1}
							justifyContent="space-between"
							alignItems="center"
							sx={{ mt: 2 }}
						>
							{user?.username === listing.owner.username ? (
								<>
									<IconButton
										component={Link}
										to={`/edit-listing/${listing.slug}`}
									>
										<Edit />
									</IconButton>
									<IconButton>
										<DeleteOutlined />
									</IconButton>
								</>
							) : (
								<>
									<Button
										component={Link}
										to={`/enquire-offer/${listing.slug}`}
										color="success"
										variant="contained"
										sx={{
											borderRadius: "20px",
											textTransform: "capitalize",
										}}
										endIcon={<KeyboardDoubleArrowRight />}
									>
										Enquire
									</Button>
									<Button
										variant="outlined"
										color="success"
										endIcon={<List />}
										sx={{
											borderRadius: "20px",
											textTransform: "capitalize",
										}}
									>
										Shortlist
									</Button>
								</>
							)}
							<IconButton sx={{ ml: "auto" }}>
								<Share />
							</IconButton>
						</Stack>
					</Box>
				</Box>
			</Container>
		</AnimatedRoute>
	);
};

export default ViewOffer;
