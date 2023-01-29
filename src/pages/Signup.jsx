import { Google, PersonAddOutlined, Apple } from "@mui/icons-material";
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
import BackButton from "../components/general/BackButton";

const Signup = () => {
	const theme = useTheme();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		console.log({
			email: e.target.email.value,
			password1: e.target.password1.value,
			password2: e.target.password2.value,
		});
		navigate("/account-details");
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
							<BackButton onlyRoute="/" />
						</Box>

						<PersonAddOutlined sx={{ fontSize: "3rem", mb: 2 }} />
						<Typography variant="h5" sx={{ mb: 4 }}>
							Signup
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
							label="Email"
							type="email"
							name="email"
							sx={{ mb: 2, width: "100%" }}
						/>
						<TextField
							size="small"
							label="Password"
							name="password1"
							type="password"
							sx={{ mb: 2, width: "100%" }}
						/>
						<TextField
							size="small"
							label="Confirm Password"
							name="password2"
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
							<Typography>
								Already have an account?{" "}
								<MaterialLink component={Link} to="/login" underline="hover">
									Login.
								</MaterialLink>
							</Typography>

							<Button type="submit">Signup</Button>
						</Box>
					</Box>
				</Container>
			</Box>
		</AnimatedRoute>
	);
};

export default Signup;
