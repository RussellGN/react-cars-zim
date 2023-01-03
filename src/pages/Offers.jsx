import Sidebar from "../components/offers/Sidebar";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import { Grid, Container, Box } from "@mui/material";
import Controls from "../components/offers/Controls";
import Offer from "../components/offers/Offer";

const Offers = () => {
	const listings = [
		{
			id: 1,
			slug: "toyota-hillux-legend-45-1",
			name: "Toyota Hillux legend 45",
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
		<AnimatedRoute>
			<Container>
				<Grid container spacing={0}>
					<Sidebar />

					<Grid item md>
						<Box sx={{ p: { xs: 0, md: 4 } }}>
							<Controls />

							<div>
								{listings?.map((listing) => (
									<Offer key={listing.id} listing={listing} />
								))}
							</div>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</AnimatedRoute>
	);
};

export default Offers;
