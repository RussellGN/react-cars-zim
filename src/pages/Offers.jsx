import Sidebar from "../components/offers/Sidebar";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import { Grid, Container, Box } from "@mui/material";
import Controls from "../components/offers/Controls";
import Footer from "../components/general/Footer";
import OffersContent from "../components/offers/OffersContent";
import listings from "../components/static-backend/listings";

const Offers = () => {
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
