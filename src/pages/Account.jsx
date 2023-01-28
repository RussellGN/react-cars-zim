import { useContext } from "react";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import { Typography, Grid, Container, Box, useTheme } from "@mui/material";
import AccountOverview from "../components/account/AccountOverview";
import AccountControls from "../components/account/AccountControls";
import Footer from "../components/general/Footer";
import OffersContent from "../components/offers/OffersContent";
import { UserContext } from "../components/static-backend/UserContext";
import { useParams } from "react-router-dom";
import BackButton from "../components/general/BackButton";
import listings from "../components/static-backend/listings";
import accounts from "../components/static-backend/accounts";

const Account = () => {
	const { user } = useContext(UserContext);
	const { slug } = useParams();
	const theme = useTheme();

	const account = accounts.find((account) => account.slug === slug);
	const accountListings = listings.filter((listing) => listing.owner.slug === slug);

	return (
		<AnimatedRoute>
			<Container>
				<Grid container spacing={0}>
					<AccountOverview account={account} />

					<Grid item md>
						<Box sx={{ p: { xs: 0, md: 4 } }}>
							<BackButton floating />

							{slug === user?.slug ? <AccountControls account={account} /> : ""}

							<Box>
								<Typography variant="h5" textAlign="center" sx={{ mb: 3 }}>
									Offers - {account?.listings?.length}
								</Typography>

								<OffersContent listings={accountListings} />
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>

			<Footer marginTop={10} />
		</AnimatedRoute>
	);
};

export default Account;
