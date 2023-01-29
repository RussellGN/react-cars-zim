import { createTheme, ThemeProvider } from "@mui/material";

const AppThemeProvider = ({ mode, children }) => {
	let theme = createTheme({
		palette: {
			mode: mode,
			text: {
				primary: mode === "dark" ? "rgb(220,220,220)" : "rgb(100,100,100)",
			},
			dark: { main: "#212529" },
			light: { main: "rgb(240,240,249)" },
			background: {
				default: mode === "dark" ? "rgba(40,40,40)" : "rgb(245,245,245)",
				paper: mode === "dark" ? "rgba(50,50,50)" : "rgb(245,245,245)",
			},
		},
	});

	theme = createTheme(theme, {
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
