import { Apple, ReplyAll, Google, PersonPinCircle } from "@mui/icons-material";
import {
	Link as MaterialLink,
	Container,
	Box,
	useTheme,
	Typography,
	TextField,
	Button,
	IconButton,
} from "@mui/material";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
	const theme = useTheme();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		console.log({ handle: e.target.handle.value, password: e.target.password.value });
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
							to="/"
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

						<PersonPinCircle sx={{ fontSize: "3rem", mb: 2 }} />
						<Typography variant="h5" sx={{ mb: 4 }}>
							Login
						</Typography>

						<Box sx={{ width: "100%", display: "flex", px: 1, mb: 3, gap: 1 }}>
							<Button
								startIcon={<Google />}
								fullWidth
								variant="outlined"
								color={theme?.palette?.mode === "dark" ? "light" : "dark"}
								sx={{
									textTransform: "capitalize",
									borderRadius: "30px",
								}}
							>
								Google
							</Button>

							<Button
								startIcon={<Apple />}
								fullWidth
								variant="outlined"
								color={theme?.palette?.mode === "dark" ? "light" : "dark"}
								sx={{
									textTransform: "capitalize",
									borderRadius: "30px",
								}}
							>
								Apple
							</Button>
						</Box>

						<TextField
							size="small"
							label="Username / Email"
							name="handle"
							sx={{ mb: 2, width: "100%" }}
						/>
						<TextField
							size="small"
							label="Password"
							name="password"
							type="password"
							sx={{ mb: 5, width: "100%" }}
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
							<Button
								type="submit"
								variant="contained"
								sx={{ borderRadius: "30px", textTransform: "capitalize" }}
							>
								Login
							</Button>
						</Box>

						<Typography sx={{ width: "100%", mb: 2 }}>
							Don't have an account?{" "}
							<MaterialLink component={Link} to="/signup" underline="hover">
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
