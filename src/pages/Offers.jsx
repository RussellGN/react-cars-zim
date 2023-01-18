import Sidebar from "../components/offers/Sidebar";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import { Grid, Container, Box } from "@mui/material";
import Controls from "../components/offers/Controls";
import Footer from "../components/general/Footer";
import OffersContent from "../components/offers/OffersContent";

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
			owner: {
				username: "generalMotorsHarare",
				slug: "generalmotorsharare",
			},
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
			owner: {
				username: "KB Motors",
				slug: "kb-motors",
			},
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
			owner: {
				username: "ZIMOCO Ltd",
				slug: "zimoco-ltd",
			},
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

							<OffersContent listings={listings} />
						</Box>
					</Grid>
				</Grid>
			</Container>

			<Footer marginTop={10} />
		</AnimatedRoute>
	);
};

export default Offers;
