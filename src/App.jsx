import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/routes/AnimatedRoutes";
import Navbar from "./components/navbar/Navbar";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import ScrollToTop from "./components/routes/ScrollToTop";

export const UserContext = createContext({});

const App = () => {
	const [user, setUser] = useState({
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
	});

	const [mode, setMode] = useState("light");

	let theme = createTheme({
		palette: {
			mode: mode,
			text: {
				primary: mode === "dark" ? "rgb(220,220,220)" : "rgb(100,100,100)",
			},
			dark: { main: "#212529" },
			light: { main: "rgb(240,240,249)" },
			background: {
				default: mode == "dark" ? "rgba(40,40,40)" : "rgb(245,245,245)",
				paper: mode == "dark" ? "rgba(50,50,50)" : "rgb(245,245,245)",
			},
		},
		radii: {
			defaultRadius: "20px",
			border1: "10px",
			border2: "20px",
			border3: "30px",
		},
	});

	theme = createTheme(theme, {
		gradient: {
			main: `linear-gradient(to right, ${theme.palette.primary.main},${theme.palette.success.main})`,
		},
	});

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<ThemeProvider theme={theme}>
				<BrowserRouter basename={process.env.REACT_APP_BASENAME}>
					<CssBaseline />
					<Navbar mode={mode} setMode={setMode} />
					<ScrollToTop>
						<AnimatedRoutes />
					</ScrollToTop>
				</BrowserRouter>
			</ThemeProvider>
		</UserContext.Provider>
	);
};

export default App;
