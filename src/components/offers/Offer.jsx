import {
	Link as AnchorTag,
	Stack,
	Paper,
	Box,
	Grid,
	useTheme,
	Typography,
	Button,
} from "@mui/material";
import {
	LocationOn,
	AccessTime,
	AttachMoney,
	CalendarMonth,
	MonetizationOn,
	Speed,
	KeyboardDoubleArrowRight,
	Filter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Offer = ({ listing }) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				borderRadius: theme.radii.border1,
				overflow: "hidden",
				border: `solid 1px ${theme.palette.divider}`,
				display: { md: "flex" },
				mb: 5,
			}}
		>
			<Box sx={{ width: { xs: "100%", md: "50%" }, position: "relative" }}>
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
					{listing.imageCount}
				</Typography>
				<img
					src={listing.coverImage}
					alt={listing.name}
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</Box>

			<Box
				sx={{ width: { xs: "100%", md: "50%" }, p: 2, backgroundColor: "background.paper" }}
			>
				<Grid container spacing={0} alignItems="center" sx={{ mb: 2 }}>
					<Grid item xs zeroMinWidth sx={{ pr: 2 }}>
						<Typography fontWeight="bold" variant="body1" noWrap>
							{listing.name}
						</Typography>
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

				<Stack direction="row" gap={2} justifyContent="space-between" alignItems="center">
					<Button
						component={Link}
						to={`/view-offer/${listing.slug}`}
						color="success"
						variant="contained"
						sx={{
							borderRadius: theme.radii.defaultRadius,
							textTransform: "capitalize",
						}}
						endIcon={<KeyboardDoubleArrowRight />}
					>
						View
					</Button>
					<AnchorTag variant="body2" component={Link} to="/account" underline="none">
						{listing.owner.username}
					</AnchorTag>
				</Stack>
			</Box>
		</Box>
	);
};

export default Offer;
