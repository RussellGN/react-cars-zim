import React from "react";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import { Typography, Grid, Container, Paper, Box, useTheme } from "@mui/material";
import Offer from "../components/offers/Offer";
import AccountOverview from "../components/account/AccountOverview";
import AccountControls from "../components/account/AccountControls";
import { useEffect } from "react";

const Account = () => {
	const account = {
		username: "GeneralMotorsHarare",
		email: "gmharare@hotmail.com",
		category: "d",
		location: "Harare",
		phoneNumber: "+263 775668441",
		about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam suscipit quae magni corrupti dignissimos esse dolorum tempora voluptatem dolores inventore!",
		coverImage: "/static/image1.jpg",
		listings: [
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
		],
	};

	useEffect(() => window.scrollTo(0, 0), []);

	const theme = useTheme();

	return (
		<AnimatedRoute>
			<Container>
				<Grid container spacing={0}>
					<AccountOverview account={account} />

					<Grid item md>
						<Box sx={{ p: { xs: 0, md: 4 } }}>
							<AccountControls account={account} />

							<Box>
								<Typography variant="h5" textAlign="center" sx={{ mb: 3 }}>
									Offers - {account?.listings?.length}
									{/* <Box
										sx={{
											display: "inline-flex",
											alignItems: "center",
											backgroundColor: "divider",
											// color: "light.main",
											borderRadius: theme.radii.border2,
											px: 2,
											py: 0.8,
										}}
									>
										<Typography variant="body2">views</Typography>
										<Typography
											variant="body2"
											sx={{
												p: "0.5px 5px",
												color: "text.primary",
												display: "flex",
												alignItems: "center",
												backgroundColor: "background.default",
												borderRadius: "5px",
												ml: 1,
											}}
										>
											329
										</Typography>
									</Box> */}
								</Typography>

								{account?.listings?.map((listing) => (
									<Offer key={listing.id} listing={listing} />
								))}
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</AnimatedRoute>
	);
};

export default Account;