import { PersonAdd, Add, Edit, Logout, Settings } from "@mui/icons-material";
import { Box, IconButton, useTheme, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { useContext, useState } from "react";
import LogoutModal from "../general/LogoutModal";

const AccountControls = ({ account }) => {
	const [openLogout, setOpenLogout] = useState(false);
	const handleLogoutOpen = () => setOpenLogout(true);
	const handleLogoutClose = () => setOpenLogout(false);

	const theme = useTheme();
	const { setUser } = useContext(UserContext);

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
					<Edit />
				</IconButton>
				<IconButton component={Link} to="/signup">
					<PersonAdd />
				</IconButton>
				<IconButton component={Link} to="/settings">
					<Settings />
				</IconButton>
				<IconButton onClick={handleLogoutOpen}>
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
