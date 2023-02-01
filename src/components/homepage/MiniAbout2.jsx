import {
	DirectionsCarOutlined,
	AirportShuttleOutlined,
	ArrowForwardOutlined,
	LocalShippingOutlined,
	TwoWheelerOutlined,
} from "@mui/icons-material";
import { Button, Box, Container, Grid, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import aboutImage1 from "./images/about-image-1.svg";

const MiniAbout = () => {
	return (
		<Container sx={{ textAlign: "center" }}>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				sx={{
					my: 15,
				}}
			>
				<Grid
					item
					xs={12}
					md={4}
					sx={{
						display: { xs: "block", md: "none" },
					}}
				>
					<img
						src={aboutImage1}
						alt="cars.zim"
						style={{
							maxWidth: "300px",
							width: "100%",
							transform: "rotate(3deg)",
						}}
					/>
				</Grid>

				<Grid item xs={12} md={6}>
					<Typography
						variant="h4"
						sx={{
							mb: 2,
							color: "inherit",
							maxWidth: "500px",
							px: 4,
							fontFamily: "kalam, cursive,roboto, serif",
						}}
					>
						A
						<Typography
							variant="inherit"
							component="span"
							sx={{ color: "success.main", mx: 0.7 }}
						>
							Nation-wide
						</Typography>
						Billboard
					</Typography>

					<Typography
						variant="body1"
						sx={{
							color: "inherit",
							maxWidth: "500px",
							px: 4,
						}}
					>
						Cars.zim provides a way for people looking to sell their vehicles reach more
						people nation-wide. The best part is its all for free! Simply create an
						account and fill out a few details to get your vehicle advertised on the
						site. All this within minutes
					</Typography>

					<Button
						component={Link}
						endIcon={<ArrowForwardOutlined />}
						to="/signup"
						color="success"
						sx={{ mt: 2 }}
					>
						Get Started
					</Button>
				</Grid>

				<Grid item xs={12} md={4} sx={{ display: { xs: "none", md: "block" } }}>
					<img
						src={aboutImage1}
						alt="cars.zim"
						style={{
							maxWidth: "300px",
							width: "100%",
							transform: "rotate(3deg)",
						}}
					/>
				</Grid>
			</Grid>

			<Box
				sx={{
					my: 15,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Stack direction="row" justifyContent="center" gap={4} sx={{ mb: 3 }}>
					<DirectionsCarOutlined />

					<TwoWheelerOutlined />

					<AirportShuttleOutlined />

					<LocalShippingOutlined />
				</Stack>

				<Typography
					variant="h4"
					sx={{
						mb: 3,
						color: "inherit",
						maxWidth: "500px",
						fontFamily: "kalam, cursive,roboto, serif",
					}}
				>
					All
					<Typography
						variant="inherit"
						component="span"
						sx={{ color: "success.main", mx: 0.7 }}
					>
						Shapes &amp; Sizes
					</Typography>
				</Typography>

				<Typography
					variant="body1"
					sx={{
						color: "inherit",
						maxWidth: "500px",
						px: 4,
					}}
				>
					Browse countless listings posted by people across the country, covering several
					categories, manufacturers etc. Our platform makes it simple for you to find the
					right vehicle for your needs.
				</Typography>

				<Button
					component={Link}
					to="/offers"
					variant="outlined"
					color="success"
					sx={{ mt: 2 }}
				>
					Browse
				</Button>
			</Box>
		</Container>
	);
};

export default MiniAbout;
