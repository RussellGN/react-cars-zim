import { useContext, useState } from "react";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import { Grid, Container, Box, useTheme, Button } from "@mui/material";
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
	const [offersOnshow, setOffersOnshow] = useState("mine");
	const { user } = useContext(UserContext);
	const { slug } = useParams();
	const theme = useTheme();

	const account = accounts.find((account) => account.slug === slug);
	const accountListings = listings.filter((listing) => listing.owner.slug === slug);
	const savedListings = listings.filter((listing) =>
		account.savedListings.find((id) => id === listing.id)
	);

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
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										my: 4,
									}}
								>
									<Button
										size="small"
										onClick={() => setOffersOnshow("mine")}
										sx={{
											borderRadius: "8px ",
											background:
												offersOnshow === "mine"
													? theme.palette.divider
													: "transparent",
											color: theme.palette.text.primary,
											margin: "0 5px",
											border: "solid 1px",
											boxShadow: 0,
											borderColor: "transparent",
											"&:hover": {
												background:
													offersOnshow === "mine"
														? theme.palette.divider
														: "transparent",
												borderColor: theme.palette.divider,
												boxShadow: 0,
											},
										}}
									>
										My Offers - 32
									</Button>

									<Button
										size="small"
										onClick={() => setOffersOnshow("saved")}
										sx={{
											borderRadius: "8px ",
											background:
												offersOnshow === "saved"
													? theme.palette.divider
													: "transparent",
											color: theme.palette.text.primary,
											margin: "0 5px",
											border: "solid 1px",
											boxShadow: 0,
											borderColor: "transparent",
											"&:hover": {
												background:
													offersOnshow === "saved"
														? theme.palette.divider
														: "transparent",
												borderColor: theme.palette.divider,
												boxShadow: 0,
											},
										}}
									>
										Saved - 14
									</Button>
								</Box>

								<OffersContent
									listings={
										offersOnshow === "mine" ? accountListings : savedListings
									}
								/>
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
