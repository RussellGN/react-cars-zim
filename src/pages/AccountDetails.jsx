import { ReplyAll, PersonAdd, ManageAccounts, InfoOutlined } from "@mui/icons-material";
import {
	Link as MaterialLink,
	Container,
	Box,
	useTheme,
	Typography,
	TextField,
	Button,
	IconButton,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
} from "@mui/material";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import { Link, useNavigate } from "react-router-dom";

const AccountDetails = ({ authenticated }) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const isAuthenticated = authenticated ? true : false;

	function handleSubmit(e) {
		e.preventDefault();
		console.log({
			username: e.target.username.value,
			location: e.target.location.value,
			accountType: e.target.accountType.value,
			phoneNumber: e.target.phoneNumber.value,
			about: e.target.about.value,
		});

		navigate("/account");
	}

	return (
		<AnimatedRoute>
			<Box
				sx={{
					py: 5,

					minHeight: "101vh",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: `linear-gradient(to bottom right, ${theme.palette.primary.main},${theme.palette.success.main}) !important`,
				}}
			>
				<Container maxWidth="sm">
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{
							position: "relative",
							boxShadow: theme.shadows[5],
							p: { xs: 3, sm: 8 },
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: "20px",
							background: theme.palette.background.paper,
						}}
					>
						<IconButton
							component={Link}
							to={isAuthenticated ? "/account" : "/"}
							sx={{
								position: "absolute",
								top: 0,
								left: 0,
								border: "solid thin",
								m: { xs: 2, sm: 3 },
							}}
						>
							<ReplyAll />
						</IconButton>
						{isAuthenticated ? (
							<ManageAccounts sx={{ fontSize: "3rem", mb: 2 }} />
						) : (
							<PersonAdd sx={{ fontSize: "3rem", mb: 2 }} />
						)}
						<Typography variant="h5" sx={{ mb: 4 }}>
							{isAuthenticated ? "Edit Details" : "Account Details"}
						</Typography>

						{isAuthenticated ? (
							<Typography
								variant="body2"
								sx={{
									display: "flex",
									alignItems: "center",
									mt: -2,
									color: "success.main",
									mb: 4,
								}}
							>
								<InfoOutlined fontSize="small" sx={{ mr: 0.5 }} /> If you wish to
								change your password, go to
								<MaterialLink
									component={Link}
									to="/settings"
									underline="hover"
									sx={{ ml: 0.5 }}
								>
									settings
								</MaterialLink>
							</Typography>
						) : null}

						<TextField
							size="small"
							label="Username"
							name="username"
							sx={{ mb: 2, width: "100%" }}
						/>

						<TextField
							size="small"
							label="Location"
							name="location"
							sx={{ mb: 2, width: "100%" }}
						/>

						<TextField
							size="small"
							label="Phone number +263"
							name="phoneNumber"
							sx={{ mb: 2, width: "100%" }}
						/>

						<FormControl sx={{ width: "100%", mb: 2, p: 2 }}>
							<FormLabel id="account-type-radios-label">Account Type</FormLabel>

							<RadioGroup
								aria-labelledby="account-type-radios-label"
								defaultValue="individual"
								name="accountType"
								sx={{ display: "flex", flexDirection: "row" }}
							>
								<FormControlLabel
									value="individual"
									control={<Radio size="small" />}
									label="Individual"
								/>
								<FormControlLabel
									value="dealership"
									control={<Radio size="small" />}
									label="Dealership"
								/>
							</RadioGroup>
						</FormControl>

						<TextField
							size="small"
							multiline
							rows={3}
							label="About"
							name="about"
							sx={{ mb: 5, width: "100%" }}
						/>

						<Box
							sx={{
								width: "100%",
								mb: 2,
								display: "flex",
								alignItems: "center",
								justifyContent: isAuthenticated ? "flex-end" : "space-between",
							}}
						>
							{isAuthenticated ? null : (
								<Typography>
									Already have an account?{" "}
									<MaterialLink component={Link} to="/login" underline="hover">
										Login.
									</MaterialLink>
								</Typography>
							)}
							<Button
								type="submit"
								variant="contained"
								sx={{ borderRadius: "30px", textTransform: "capitalize" }}
							>
								{isAuthenticated ? "Update" : "Finish"}
							</Button>
						</Box>
					</Box>
				</Container>
			</Box>
		</AnimatedRoute>
	);
};

export default AccountDetails;
