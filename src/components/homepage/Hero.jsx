import { SellOutlined } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import heroImage from "./images/hero-image.png";

const Hero = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px`);
	const isTinyMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.sm}px`);

	return (
		<Container>
			<Grid
				container
				direction={isMobile ? "column-reverse" : "row"}
				spacing={1}
				justifyContent="center"
				alignItems="center"
				sx={{ minHeight: "60vh" }}
			>
				<Grid item xs={12} md="auto">
					<Typography
						variant={isTinyMobile ? "h4" : "h3"}
						sx={{
							textAlign: { xs: "center", md: "left" },
							fontFamily: "kalam, cursive, roboto, serif",
						}}
					>
						Buy &amp; Sell Used <br /> Vehicles{" "}
						<Typography
							variant="inherit"
							component="span"
							color="primary"
							sx={{ fontFamily: "inherit" }}
						>
							Nationwide
						</Typography>
					</Typography>

					<Box
						sx={{
							mt: 3,
							display: "flex",
							alignItems: "center",
							justifyContent: { xs: "center", md: "flex-start" },
						}}
					>
						<Button
							component={Link}
							to="/new-listing"
							color="success"
							endIcon={<SellOutlined />}
							sx={{ m: 1 }}
						>
							Sell
							<Box
								component="span"
								sx={{ ml: "0.4rem", display: { xs: "none", sm: "inline" } }}
							>
								Your Vehicle
							</Box>
						</Button>
						<Button component={Link} to="/offers" sx={{ m: 1 }}>
							Browse Offers
						</Button>
					</Box>
				</Grid>

				<Grid item xs={12} md={6}>
					<img src={heroImage} alt="cars" style={{ width: "100%" }} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Hero;
