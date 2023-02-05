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
	Zoom,
	Tooltip,
} from "@mui/material";
import {
	LocationOnOutlined,
	KeyboardArrowDownOutlined,
	AccessTimeOutlined,
	AttachMoneyOutlined,
	SpeedOutlined,
	KeyboardDoubleArrowRightOutlined,
	FilterOutlined,
	KeyboardDoubleArrowLeftOutlined,
	DeleteOutlined,
	EditOutlined,
	BookmarkAddOutlined,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../components/static-backend/UserContext";
import { humanizeDate } from "../components/utils/humanizeDate";
import ShareButton from "../components/general/ShareButton";
import BackButton from "../components/general/BackButton";
import listings from "../components/static-backend/listings";
import Related from "../components/view-offer/Related";

const SaveButton = ({ placement }) => {
	const [openTooltip, setOpenTooltip] = useState(false);

	const handleShareTooltipClose = () => {
		setOpenTooltip(false);
	};

	const handleTooltipOpen = () => {
		window.navigator.clipboard.writeText(window.location.href);
		setOpenTooltip(true);
		setTimeout(handleShareTooltipClose, 1500);
	};

	return (
		<Tooltip
			PopperProps={{
				disablePortal: true,
			}}
			onClose={handleShareTooltipClose}
			open={openTooltip}
			disableFocusListener
			disableHoverListener
			disableTouchListener
			TransitionComponent={Zoom}
			placement={placement}
			title="Saved!"
		>
			<IconButton sx={{ ml: "auto" }} onClick={handleTooltipOpen}>
				<BookmarkAddOutlined />
			</IconButton>
		</Tooltip>
	);
};

const ViewOffer = () => {
	const { user } = useContext(UserContext);
	const [imageOnview, setImageOnview] = useState(0);
	const theme = useTheme();
	const { slug } = useParams();

	const listing = listings.find((listing) => listing.slug === slug);

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
				<Typography
					variant="h5"
					textAlign="center"
					sx={{
						my: 4,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<BackButton />
					<span style={{ marginLeft: "1rem" }}>{listing.name}</span>
				</Typography>

				<Box
					sx={{
						borderRadius: "10px",
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
							backgroundColor: "background.paper",
							width: { xs: "100%", md: "50%" },
							position: "relative",
							p: 1,
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
							<FilterOutlined fontSize="small" sx={{ mr: 0.5 }} />
							{`${imageOnview + 1}/${listing.images.length}`}
						</Typography>
						<img
							src={listing.images[imageOnview]}
							alt={listing.name}
							style={{
								width: "100%",
								height: isMobile ? "13rem" : "60vh",
								maxHeight: "25rem",
								objectFit: "cover",
								borderRadius: isMobile ? "10px" : "20px",
							}}
						/>
						{listing?.images?.length > 1 && (
							<Box
								sx={{
									position: "absolute",
									top: 0,
									left: 0,
									px: 2,
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
										border: "solid",
										borderColor: "divider",
										"&:hover": { backgroundColor: "dark.main" },
									}}
									onClick={() => handleCarousel("prev")}
								>
									<KeyboardDoubleArrowLeftOutlined />
								</IconButton>

								<IconButton
									size="small"
									sx={{
										backgroundColor: "dark.main",
										color: "white",
										border: "solid",
										borderColor: "divider",
										"&:hover": { backgroundColor: "dark.main" },
									}}
									onClick={() => handleCarousel("next")}
								>
									<KeyboardDoubleArrowRightOutlined />
								</IconButton>
							</Box>
						)}
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
										{humanizeDate(listing.date)}
									</Typography>
									<AccessTimeOutlined fontSize="small" sx={{ ml: 1 }} />
								</small>
							</Grid>
						</Grid>

						<div>
							<Typography
								variant="body2"
								sx={{ display: "flex", alignItems: "center", mb: 2 }}
							>
								<AttachMoneyOutlined fontSize="small" sx={{ mr: 1 }} />
								USD {listing.price}
							</Typography>

							<Typography
								variant="body2"
								sx={{ display: "flex", alignItems: "center", mb: 2 }}
							>
								<SpeedOutlined fontSize="small" sx={{ mr: 1 }} />
								{listing.mileage} km
							</Typography>

							<Typography
								variant="body2"
								sx={{ display: "flex", alignItems: "center", mb: 2 }}
							>
								<LocationOnOutlined fontSize="small" sx={{ mr: 1 }} />
								{listing.location}
							</Typography>

							<Typography variant="body2" sx={{ mb: 2 }}>
								{listing.views} Views
							</Typography>
						</div>

						<div>
							<Accordion elevation={0} sx={{ p: 0 }}>
								<AccordionSummary
									expandIcon={<KeyboardArrowDownOutlined />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									sx={{ p: 0 }}
								>
									<Typography>Details</Typography>
								</AccordionSummary>

								<AccordionDetails sx={{ p: 0 }}>
									<Typography
										sx={{
											backgroundColor:
												theme.palette.mode === "light"
													? "white"
													: "divider",
											borderRadius: "8px",
											p: 1,
										}}
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse malesuada lacus ex, sit amet blandit leo
										lobortis eget.
									</Typography>
								</AccordionDetails>
							</Accordion>

							<Accordion elevation={0} sx={{ p: 0 }}>
								<AccordionSummary
									expandIcon={<KeyboardArrowDownOutlined />}
									aria-controls="panel2a-content"
									id="panel2a-header"
									sx={{ p: 0 }}
								>
									<Typography>About {listing.owner.username}</Typography>
								</AccordionSummary>

								<AccordionDetails sx={{ p: 0 }}>
									<Typography
										sx={{
											backgroundColor:
												theme.palette.mode === "light"
													? "white"
													: "divider",
											borderRadius: "8px",
											p: 1,
										}}
									>
										{listing.owner.about}{" "}
									</Typography>
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
									<IconButton>
										<DeleteOutlined />
									</IconButton>
									<IconButton
										component={Link}
										to={`/edit-listing/${listing.slug}`}
									>
										<EditOutlined />
									</IconButton>
								</>
							) : (
								<>
									<Button
										component={Link}
										to={`/enquire-offer/${listing.slug}`}
										color="success"
										endIcon={<KeyboardDoubleArrowRightOutlined />}
									>
										Enquire
									</Button>

									<SaveButton placement={isMobile ? "top" : "left"} />
								</>
							)}
							<ShareButton
								placement={isMobile ? "top" : "left"}
								sx={{
									ml: user?.username === listing.owner.username ? "auto" : "",
								}}
							/>
						</Stack>
					</Box>
				</Box>
			</Container>
			<Related />
		</AnimatedRoute>
	);
};

export default ViewOffer;
