import { PersonAddOutlined, ManageAccountsOutlined, InfoOutlined } from "@mui/icons-material";
import {
	Link as MaterialLink,
	Container,
	Box,
	useTheme,
	Typography,
	TextField,
	Button,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
} from "@mui/material";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../components/general/BackButton";
import { UserContext } from "../components/static-backend/UserContext";
import { useContext } from "react";
import { useState } from "react";

const AccountDetails = () => {
	const { user, setUser } = useContext(UserContext);

	const [formValues, setFormValues] = useState(
		user.username
			? {
					...user,
			  }
			: {
					username: "no special symbols",
					email: "email@example.com",
					category: "i",
					location: "",
					phoneNumber: "+263- ",
			  }
	);

	const changeFormValues = (e) => {
		setFormValues((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	const theme = useTheme();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formValues);

		const newUser = {
			...user,
			username: user?.username || formValues.username,
			location: user?.location || formValues.location,
			category: formValues.category,
			phoneNumber: user?.phoneNumber || formValues.phoneNumber,
			about: user?.about || formValues.about,
		};
		newUser.slug = newUser.username.replace(" ", "-").toLowerCase();

		setUser(newUser);

		navigate(`/account/${user?.slug}`);
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
							p: { xs: 2, sm: 8 },
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: "20px",
							background: theme.palette.background.paper,
						}}
					>
						<Box
							sx={{
								p: 2,
								width: "100%",
							}}
						>
							<BackButton
								onlyRoute={user?.username ? `/account/${user.slug}` : "/signup"}
							/>
						</Box>

						{user?.username ? (
							<ManageAccountsOutlined sx={{ fontSize: "3rem", mb: 2 }} />
						) : (
							<PersonAddOutlined sx={{ fontSize: "3rem", mb: 2 }} />
						)}

						<Typography variant="h5" sx={{ mb: 4 }}>
							{user?.username ? "Edit Details" : "Account Details"}
						</Typography>

						{user?.username ? (
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
						) : (
							""
						)}

						<TextField
							size="small"
							label="Username"
							name="username"
							value={formValues.username}
							onChange={changeFormValues}
							sx={{ mb: 2, width: "100%" }}
						/>

						<TextField
							size="small"
							label="Location"
							name="location"
							value={formValues.location}
							onChange={changeFormValues}
							sx={{ mb: 2, width: "100%" }}
						/>

						<TextField
							size="small"
							label="Phone number +263"
							name="phoneNumber"
							value={formValues.phoneNumber}
							onChange={changeFormValues}
							sx={{ mb: 2, width: "100%" }}
						/>

						<FormControl sx={{ width: "100%", mb: 2, p: 2 }}>
							<FormLabel id="account-type-radios-label">Account Type</FormLabel>

							<RadioGroup
								aria-labelledby="account-type-radios-label"
								name="category"
								onChange={changeFormValues}
								defaultValue={formValues.category}
								sx={{ display: "flex", flexDirection: "row" }}
							>
								<FormControlLabel
									value="i"
									control={<Radio size="small" />}
									label="Individual"
								/>
								<FormControlLabel
									value="d"
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
							value={formValues.about}
							onChange={changeFormValues}
							sx={{ mb: 5, width: "100%" }}
						/>

						<Box
							sx={{
								width: "100%",
								mb: 2,
								display: "flex",
								alignItems: "center",
								justifyContent: user?.username ? "flex-end" : "space-between",
							}}
						>
							{user?.username ? (
								""
							) : (
								<Typography>
									Already have an account?
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
								{user?.username ? "Update" : "Finish"}
							</Button>
						</Box>
					</Box>
				</Container>
			</Box>
		</AnimatedRoute>
	);
};

export default AccountDetails;
