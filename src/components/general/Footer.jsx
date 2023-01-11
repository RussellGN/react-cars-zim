import {
	Button,
	Link as MaterialLink,
	Box,
	Container,
	Grid,
	Typography,
	useTheme,
	IconButton,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
	const theme = useTheme();

	return (
		<Box sx={{ backgroundColor: "dark.main" }}>
			<Container sx={{ px: { md: 5 }, py: { xs: 3, md: 10 } }}>
				<Grid container spacing={2} justifyContent="space-between">
					<Grid item xs={6} md="auto">
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Typography variant="h6" sx={{ mb: 2, color: "rgb(150,150,150)" }}>
								Usefull Links
							</Typography>

							<MaterialLink
								component={Link}
								to="/about"
								sx={{ color: "light.main", mb: 1.2 }}
							>
								About
							</MaterialLink>

							<MaterialLink
								component={Link}
								to="/signup"
								sx={{ color: "light.main", mb: 1.2 }}
							>
								Signup
							</MaterialLink>

							<MaterialLink
								component={Link}
								to="/faq"
								sx={{ color: "light.main", mb: 1.2 }}
							>
								FAQ
							</MaterialLink>
						</Box>
					</Grid>

					<Grid item xs={6} md="auto">
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Typography variant="h6" sx={{ mb: 2, color: "rgb(150,150,150)" }}>
								Get In Touch
							</Typography>

							<MaterialLink
								component={Link}
								to="/contact"
								sx={{ color: "light.main", mb: 1.2 }}
							>
								Contact
							</MaterialLink>

							<MaterialLink
								component={Link}
								to="/report"
								sx={{ color: "light.main", mb: 1.2 }}
							>
								Report
							</MaterialLink>

							<MaterialLink
								component={Link}
								to="/suggestions"
								sx={{ color: "light.main", mb: 1.2 }}
							>
								Suggestions
							</MaterialLink>
						</Box>
					</Grid>

					<Grid item xs={6} md="auto">
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Typography variant="h6" sx={{ mb: 2, color: "rgb(150,150,150)" }}>
								Other Services
							</Typography>

							<MaterialLink
								component={Link}
								to="/advertise"
								sx={{ color: "light.main", mb: 1.2 }}
							>
								Advertise
							</MaterialLink>

							<MaterialLink
								component={Link}
								to="/car-hire"
								sx={{ color: "light.main", mb: 1.2 }}
							>
								Car Hire
							</MaterialLink>

							<MaterialLink
								component={Link}
								to="/parts-and-accessories"
								sx={{ color: "light.main", mb: 1.2 }}
							>
								Parts &amp; Accessories
							</MaterialLink>
						</Box>
					</Grid>

					<Grid item xs={12} md={4}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Typography variant="h6" sx={{ mb: 2, color: "rgb(150,150,150)" }}>
								Dont Have An Account?
							</Typography>

							<Typography variant="body1" sx={{ color: "rgb(150,150,150)", mb: 2 }}>
								Create an account to start advertising offers, free of charge. No
								hidden costs.
							</Typography>

							<Box sx={{ display: "flex" }}>
								<input
									placeholder="Email Address"
									type="email"
									style={{
										width: "100%",
										height: "100%",
										fontSize: "inherit",
										boxShadow: "none",
										outline: "none",
										border: 0,
										padding: "0.5rem 1rem",
										borderRadius: "10rem",
									}}
								></input>
								<Button
									variant="contained"
									sx={{
										ml: 2,
										textTransform: "capitalize",
										borderRadius: "10rem",
									}}
								>
									Proceed
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>

				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						borderTop: "solid thin",
						borderColor: "rgb(150,150,150)",
						pt: 3,
						alignItems: "center",
						mt: 5,
					}}
				>
					<Typography sx={{ color: "rgb(150,150,150)" }}>
						&copy; {new Date().getFullYear()} Cars.zim. All Rights Reserved.
					</Typography>

					<Box sx={{ display: "flex" }}>
						<IconButton
							component={Link}
							to="https://www.github/RussellGN/react-cars-zim"
							sx={{ mx: 0.5, color: "rgb(150,150,150)" }}
						>
							<GitHub />
						</IconButton>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
