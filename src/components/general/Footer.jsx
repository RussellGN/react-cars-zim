import {
	Button,
	Link as MaterialLink,
	Box,
	Container,
	Grid,
	Typography,
	IconButton,
	useTheme,
} from "@mui/material";
import { GitHub, KeyboardDoubleArrowRightOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = ({ marginTop }) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				backgroundColor: "dark.dark",
				color: "light.main",
				marginTop: marginTop,
			}}
		>
			<Container sx={{ px: { md: 5 }, py: { xs: 3, md: 7 }, color: "inherit" }}>
				<Grid container spacing={4} justifyContent="space-around" sx={{ color: "inherit" }}>
					<Grid item xs={12} md="auto" sx={{ color: "inherit" }}>
						<Box
							sx={{
								display: "flex",
								gap: 1.2,
								flexDirection: { md: "column" },
								justifyContent: "space-between",
								flexWrap: "wrap",
								color: "inherit",
							}}
						>
							<Typography variant="h6" sx={{ width: "100%", mb: 2 }} color="inherit">
								Usefull Links
							</Typography>

							<MaterialLink
								component={Link}
								to="/about"
								sx={{ display: "flex", alignItems: "center" }}
								color="inherit"
							>
								<KeyboardDoubleArrowRightOutlined sx={{ mr: 0.5 }} /> About
							</MaterialLink>

							<MaterialLink
								component={Link}
								to="/contact"
								sx={{ display: "flex", alignItems: "center" }}
								color="inherit"
							>
								<KeyboardDoubleArrowRightOutlined sx={{ mr: 0.5 }} />
								Contact
							</MaterialLink>

							<MaterialLink
								component={Link}
								to="/contact"
								sx={{ display: "flex", alignItems: "center" }}
								color="inherit"
							>
								<KeyboardDoubleArrowRightOutlined sx={{ mr: 0.5 }} />
								Suggest
							</MaterialLink>
						</Box>
					</Grid>

					<Grid item xs={12} md={4} sx={{ color: "inherit" }}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								color: "inherit",
							}}
						>
							<Typography variant="h6" sx={{ mb: 2 }} color="inherit">
								Dont Have An Account?
							</Typography>

							<Typography variant="body1" sx={{ mb: 2 }} color="inherit">
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
									size="small"
									sx={{
										px: 3,
										ml: 2,
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
						borderColor: "black",
						pt: 3,
						alignItems: "center",
						mt: 5,
						color: "inherit",
					}}
				>
					<Typography color="inherit">
						&copy; {new Date().getFullYear()} Cars.zim. All Rights Reserved.
					</Typography>

					<Box sx={{ display: "flex", color: "inherit" }}>
						<IconButton
							color="inherit"
							component="a"
							href="https://www.github/RussellGN/react-cars-zim"
							sx={{ mx: 0.5 }}
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
