import { createTheme, ThemeProvider } from "@mui/material";

const AppThemeProvider = ({ mode, children }) => {
	let theme = createTheme({
		palette: {
			mode: mode,
			text: {
				primary: mode === "dark" ? "rgb(220,220,220)" : "rgb(100,100,100)",
			},
			dark: {
				main: "rgb(56, 62, 69)",
				dark: "rgb(33, 37, 41)",
				light: "rgb(71, 78, 87)",
			},
			light: { main: "rgb(240,240,249)" },
		},
	});

	theme = createTheme(theme, {
		palette: {
			background: {
				default: mode === "dark" ? theme.palette.dark.main : "rgb(245,245,245)",
				paper: mode === "dark" ? theme.palette.dark.light : "rgb(245,245,245)",
			},
		},
		gradient: {
			main: `linear-gradient(to right, ${theme.palette.primary.main},${theme.palette.success.main})`,
		},
	});

	// components
	theme = createTheme(theme, {
		components: {
			// Name of the component
			MuiButton: {
				defaultProps: {
					variant: "contained",
				},
				styleOverrides: {
					// Name of the slot
					root: {
						// Some CSS
						borderRadius: "20px",
						textTransform: "capitalize",
						px: 3,
					},
				},
			},
		},
	});

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
