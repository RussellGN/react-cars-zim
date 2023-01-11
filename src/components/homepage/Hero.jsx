import { Sell } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px`);

	return (
		<Container maxWidth="lg">
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
						variant="h3"
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
							to="/new-offer"
							variant="contained"
							color="success"
							endIcon={<Sell />}
							sx={{ m: 1, borderRadius: "3rem", textTransform: "capitalize" }}
						>
							Sell
							<Box
								component="span"
								sx={{ ml: "0.4rem", display: { xs: "none", sm: "inline" } }}
							>
								Your Vehicle
							</Box>
						</Button>
						<Button
							component={Link}
							to="/offers"
							variant="outlined"
							sx={{ m: 1, borderRadius: "3rem", textTransform: "capitalize" }}
						>
							Browse Offers
						</Button>
					</Box>
				</Grid>

				<Grid item xs={12} md={6}>
					<img
						src={`/${process.env.REACT_APP_BASENAME}/static/image2.png`}
						alt="cars"
						style={{ width: "100%" }}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Hero;
