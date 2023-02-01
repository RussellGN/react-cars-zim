import { Apple, Google, PersonPinCircleOutlined } from "@mui/icons-material";
import {
	Link as MaterialLink,
	Container,
	Box,
	useTheme,
	Typography,
	TextField,
	Button,
} from "@mui/material";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../components/static-backend/UserContext";
import BackButton from "../components/general/BackButton";
import accounts from "../components/static-backend/accounts";

const Login = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);

	function handleSubmit(e) {
		e.preventDefault();
		console.log({ handle: e.target.handle.value, password: e.target.password.value });
		setUser(accounts[0]);
		navigate(`/account/${accounts[0].slug}`);
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
							<BackButton />
						</Box>

						<PersonPinCircleOutlined sx={{ fontSize: "3rem", mb: 2 }} />
						<Typography variant="h5" sx={{ mb: 4 }}>
							Login
						</Typography>

						<Box sx={{ width: "100%", display: "flex", px: 1, mb: 3, gap: 1 }}>
							<Button
								startIcon={<Google />}
								fullWidth
								variant="outlined"
								color={theme?.palette?.mode === "dark" ? "light" : "dark"}
							>
								Google
							</Button>

							<Button
								startIcon={<Apple />}
								fullWidth
								variant="outlined"
								color={theme?.palette?.mode === "dark" ? "light" : "dark"}
							>
								Apple
							</Button>
						</Box>

						<TextField
							size="small"
							label="Username / Email"
							name="handle"
							sx={{
								mb: 3,
								"& .MuiInputBase-root": {
									borderRadius: "30px",
								},
								width: "100%",
							}}
						/>
						<TextField
							size="small"
							label="Password"
							name="password"
							type="password"
							sx={{
								mb: 3,
								"& .MuiInputBase-root": {
									borderRadius: "30px",
								},
								width: "100%",
							}}
						/>
						<Box
							sx={{
								width: "100%",
								mb: 2,
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<MaterialLink underline="hover"> Forgot password</MaterialLink>
							<Button type="submit">Login</Button>
						</Box>

						<Typography sx={{ width: "100%", mb: 2 }}>
							Don't have an account?
							<MaterialLink
								component={Link}
								to="/signup"
								underline="hover"
								sx={{ ml: 0.5 }}
							>
								Sign Up.
							</MaterialLink>
						</Typography>
					</Box>
				</Container>
			</Box>
		</AnimatedRoute>
	);
};

export default Login;
