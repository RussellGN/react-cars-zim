import {
	DirectionsCarOutlined,
	AirportShuttleOutlined,
	ArrowForwardOutlined,
	LocalShippingOutlined,
	TwoWheelerOutlined,
} from "@mui/icons-material";
import { Button, Box, Container, Grid, Typography, Stack, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const MiniAbout = () => {
	return (
		<Box>
			<Box
				sx={{
					minHeight: "60vh",
					display: "flex",
					alignItems: "center",
				}}
			>
				<Box sx={{ width: "100%", backgroundColor: "dark.light", color: "light.main" }}>
					<Container>
						<Box
							sx={{
								textAlign: "center",
								maxWidth: "40rem",
								mx: "auto",
								px: { xs: 1, md: 5 },
								py: 5,
							}}
						>
							<Typography
								variant="h4"
								sx={{
									mb: 3,
									color: "inherit",
									fontFamily: "kalam, cursive,roboto, serif",
								}}
							>
								A
								<Typography
									variant="inherit"
									component="span"
									sx={{ color: "success.light", mx: 0.7 }}
								>
									Nation-wide
								</Typography>
								Billboard
							</Typography>

							<Typography color="inherit">
								Cars.zim provides a way for people looking to sell their vehicles
								reach more people nation-wide. The best part is its all for free!
								Simply create an account and fill out a few details to get your
								vehicle advertised on the site. All this within minutes
							</Typography>

							<div>
								<Button
									component={Link}
									endIcon={<ArrowForwardOutlined />}
									to="/signup"
									color="success"
									sx={{
										mt: 3,
										// backgroundColor: `${theme.palette.light.main} !important`,
										// color: `${theme.palette.dark.main} !important`,
									}}
								>
									Get Started
								</Button>
							</div>
						</Box>
					</Container>
				</Box>
			</Box>

			<Container sx={{ my: 8, textAlign: "center" }}>
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
						Browse countless listings posted by people across the country, covering
						several categories, manufacturers etc. Our platform makes it simple for you
						to find the right vehicle for your needs.
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
		</Box>
	);
};

export default MiniAbout;
