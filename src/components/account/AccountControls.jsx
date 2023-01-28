import {
	PersonAddOutlined,
	AddOutlined,
	EditOutlined,
	LogoutOutlined,
	SettingsOutlined,
} from "@mui/icons-material";
import { Box, IconButton, useTheme, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogoutModal from "../general/LogoutModal";

const AccountControls = () => {
	const [openLogout, setOpenLogout] = useState(false);
	const theme = useTheme();
	const handleLogoutOpen = () => setOpenLogout(true);
	const handleLogoutClose = () => setOpenLogout(false);

	return (
		<>
			<LogoutModal
				openLogout={openLogout}
				handleLogoutClose={handleLogoutClose}
				handleLogoutOpen={handleLogoutOpen}
			/>

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
					<EditOutlined />
				</IconButton>
				<IconButton component={Link} to="/signup">
					<PersonAddOutlined />
				</IconButton>
				<IconButton component={Link} to="/settings">
					<SettingsOutlined />
				</IconButton>
				<IconButton onClick={handleLogoutOpen}>
					<LogoutOutlined />
				</IconButton>

				<Button
					variant="contained"
					color="success"
					component={Link}
					to="/new-listing"
					sx={{ ml: "auto", mr: 1, borderRadius: "30px", textTransform: "capitalize" }}
					endIcon={<AddOutlined />}
				>
					New
					<Box component="span" sx={{ display: { xs: "none", sm: "inline" }, ml: 0.7 }}>
						Listing
					</Box>
				</Button>
			</Box>
		</>
	);
};

export default AccountControls;
