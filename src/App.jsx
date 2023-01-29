import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/routes/AnimatedRoutes";
import Navbar from "./components/navbar/Navbar";
import { CssBaseline } from "@mui/material";
import ScrollToTop from "./components/routes/ScrollToTop";
import { UserContextProvider } from "./components/static-backend/UserContext";
import AppThemeProvider from "./components/general/AppThemeProvider";

const App = () => {
	const { matches: prefersDark } = window.matchMedia("(prefers-color-scheme: dark)");
	const [mode, setMode] = useState(prefersDark === true ? "dark" : "light");

	return (
		<UserContextProvider>
			<AppThemeProvider mode={mode}>
				<BrowserRouter basename={process.env.REACT_APP_BASENAME}>
					<CssBaseline />
					<Navbar mode={mode} setMode={setMode} />
					<ScrollToTop>
						<AnimatedRoutes />
					</ScrollToTop>
				</BrowserRouter>
			</AppThemeProvider>
		</UserContextProvider>
	);
};

export default App;
