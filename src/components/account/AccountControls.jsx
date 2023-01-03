import { Add, Edit, Logout, Settings } from "@mui/icons-material";
import { Link as MaterialLink, Box, IconButton, useTheme, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const AccountControls = ({ account }) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				px: { xs: 0.2, md: 2 },
				py: 1,
				mt: { xs: 2, md: 0 },
				mb: 3,
				borderRadius: theme.radii.border3,
				border: "solid thin",
				borderColor: "divider",
				display: "flex",
				gap: 0.5,
				alignItems: "center",
			}}
		>
			<IconButton component={Link} to="/edit-account-details">
				<Edit />
			</IconButton>
			<IconButton component={Link} to="/settings">
				<Settings />
			</IconButton>
			<IconButton component={Link} to="/settings">
				<Logout />
			</IconButton>

			<Button
				variant="contained"
				color="success"
				component={Link}
				to="/new-listing"
				sx={{ ml: "auto", mr: 1, borderRadius: "30px", textTransform: "capitalize" }}
				endIcon={<Add />}
			>
				New Listing
			</Button>
		</Box>
	);
};

export default AccountControls;
