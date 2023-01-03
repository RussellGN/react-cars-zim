import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import AnimatedRoutes from "./components/routes/AnimatedRoutes";
import Navbar from "./components/navbar/Navbar";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";

const App = () => {
	const [mode, setMode] = useState("light");

	const theme = createTheme({
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

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<CssBaseline />
				<Navbar mode={mode} setMode={setMode} />
				<AnimatedRoutes />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
