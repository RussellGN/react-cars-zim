import { Apple, Google, PersonPinCircle } from "@mui/icons-material";
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import BackButton from "../components/general/BackButton";

const Login = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);

	function handleSubmit(e) {
		e.preventDefault();
		console.log({ handle: e.target.handle.value, password: e.target.password.value });
		const userData = {
			username: "KB Motors",
			slug: "kb-motors",
			email: "info@kbmotors.com",
			category: "d",
			location: "Harare",
			phoneNumber: "+263 775438940",
			about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam suscipit quae magni corrupti dignissimos esse dolorum tempora voluptatem dolores inventore!",
			coverImage: "/static/image3.jpg",
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
					owner: { username: "KB Motors", slug: "kb-motors" },
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
					owner: { username: "KB Motors", slug: "kb-motors" },
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
					owner: { username: "KB Motors", slug: "kb-motors" },
					coverImage: "/static/corrola1.jpg",
					imageCount: 11,
				},
			],
		};
		setUser(userData);
		navigate(`/account/${userData.slug}`);
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
