import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/routes/AnimatedRoutes";
import Navbar from "./components/navbar/Navbar";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import ScrollToTop from "./components/routes/ScrollToTop";
import { UserContextProvider } from "./components/static-backend/UserContext";

const App = () => {
	const { matches: prefersDark } = window.matchMedia("(prefers-color-scheme: dark)");
	const [mode, setMode] = useState(prefersDark === true ? "dark" : "light");

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
		<UserContextProvider>
			<ThemeProvider theme={theme}>
				<BrowserRouter basename={process.env.REACT_APP_BASENAME}>
					<CssBaseline />
					<Navbar mode={mode} setMode={setMode} />
					<ScrollToTop>
						<AnimatedRoutes />
					</ScrollToTop>
				</BrowserRouter>
			</ThemeProvider>
		</UserContextProvider>
	);
};

export default App;
