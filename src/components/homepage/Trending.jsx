import { Box, Container, Typography, Button, useTheme, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { AttachMoney, Speed, LocationOn, Whatshot, ArrowForward } from "@mui/icons-material";

const Trending = () => {
	const theme = useTheme();

	const trendingOffers = [
		{
			id: 1,
			slug: "toyota-hillux-gd6",
			name: "Toyota Hillux GD6",
			mileage: 43000,
			price: 67000,
			views: 321,
			location: "Harare",
			date: new Date(),
			owner: { username: "generalMotorsHarare" },
			coverImage: "/static/hillux1.jpeg",
			imageCount: 6,
		},
		{
			id: 2,
			slug: "porsche-carrera-4s-2",
			name: "Porsche Carrera 4S",
			mileage: 300,
			price: 300000,
			views: 310,
			location: "Victoria Falls",
			date: new Date(),
			owner: { username: "KB Motors" },
			coverImage: "/static/porsche.JPG",
			imageCount: 7,
		},
		{
			id: 3,
			name: "Toyota Corrola Quest",
			mileage: 5000,
			price: 20000,
			views: 1007,
			location: "Bulawayo",
			date: new Date(),
			owner: { username: "ZIMOCO Ltd" },
			coverImage: "/static/corrola1.jpg",
			imageCount: 11,
		},
	];

	return (
		<Container maxWidth="md" sx={{ my: 8 }}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					mb: 3,
				}}
			>
				<Typography variant="h4" sx={{ display: "flex", alignItems: "center" }}>
					<Whatshot color="primary" fontSize="inherit" sx={{ mr: 1 }} />
					Trending
					<Box component="span" sx={{ display: { xs: "none", sm: "inline" }, ml: 0.7 }}>
						offers
					</Box>
				</Typography>

				<Button
					size="small"
					endIcon={<ArrowForward />}
					variant="outlined"
					component={Link}
					to="/offers"
					sx={{
						borderRadius: "20px",
						px: 2,
						textTransform: "capitalize",
					}}
				>
					More
				</Button>
			</Box>
			<Grid container spacing={5} justifyContent="center">
				{trendingOffers?.map((offer) => {
					return (
						<Grid key={offer.id} item xs={12} sm={6} md={4}>
							<Box
								sx={{
									height: "15rem",
									width: "100%",
									borderRadius: "20px",
									boxShadow: theme.shadows[5],
									overflow: "hidden",
									position: "relative",
									color: "light.main",
								}}
							>
								<img
									src={`/${process.env.REACT_APP_BASENAME}${offer.coverImage}`}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}}
									alt="trending offer"
								/>
								<Box
									sx={{
										p: 3,
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										display: "flex",
										alignItems: "center",
										background:
											"linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.5))",
									}}
								>
									<div>
										<Typography color="inherit" variant="h6" sx={{ mb: 2 }}>
											{offer.name}
										</Typography>

										<Typography
											variant="body2"
											color="inherit"
											sx={{ display: "flex", alignItems: "center", mb: 2 }}
										>
											<AttachMoney fontSize="small" sx={{ mr: 1 }} />
											USD {offer.price}
										</Typography>

										<Typography
											variant="body2"
											color="inherit"
											sx={{ display: "flex", alignItems: "center", mb: 2 }}
										>
											<Speed fontSize="small" sx={{ mr: 1 }} />
											{offer.mileage} km
										</Typography>

										<Typography
											variant="body2"
											color="inherit"
											sx={{ display: "flex", alignItems: "center", mb: 2 }}
										>
											<LocationOn fontSize="small" sx={{ mr: 1 }} />
											{offer.location}
										</Typography>

										<Button
											component={Link}
											to={`/view-offer/${offer.slug}`}
											variant="contained"
											sx={{
												borderRadius: "20px",
												textTransform: "capitalize",
											}}
										>
											View
										</Button>
									</div>
								</Box>
							</Box>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default Trending;
