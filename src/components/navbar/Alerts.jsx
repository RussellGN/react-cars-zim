import { Close } from "@mui/icons-material";
import { useTheme, Box, Typography, Container, IconButton } from "@mui/material";
import { useState } from "react";

const Alerts = () => {
	const [alert, setAlert] = useState({ message: "Welcome! Note this is a developing product" });
	const theme = useTheme();

	if (alert?.message === "") return;

	return (
		<Box
			sx={{
				boxShadow: theme.shadows[1],
				position: "absolute",
				top: "100%",
				left: 0,
				right: 0,
				background: `linear-gradient(to right, ${theme.palette.primary.main},${theme.palette.success.main}) !important`,
			}}
		>
			<Container>
				<Typography
					variant="caption"
					color="inherit"
					sx={{
						width: "100%",
						py: 0.2,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: theme.palette.mode === "dark" ? "dark.main" : "light.main",
					}}
				>
					{alert?.message}
					<IconButton
						onClick={() => setAlert({ message: "" })}
						fontSize="small"
						sx={{ color: "inherit", ml: 0.5 }}
					>
						<Close />
					</IconButton>
				</Typography>
			</Container>
		</Box>
	);
};

export default Alerts;
