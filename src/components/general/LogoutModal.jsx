import { Backdrop, Box, Modal, Fade, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../static-backend/UserContext";

const LogoutModal = ({ openLogout, handleLogoutClose, handleLogoutOpen }) => {
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		setUser({});
		navigate("/");
		handleLogoutClose();
	};

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={openLogout}
				onClose={handleLogoutClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={openLogout}>
					<Box
						sx={{
							textAlign: "center",
							position: "fixed",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%) !important",
							width: "100%",
							maxWidth: 400,
							bgcolor: "background.paper",
							borderRadius: "30px",
							boxShadow: 24,
							p: 5,
						}}
					>
						<Typography id="transition-modal-title" variant="h6" component="h2">
							Are you sure you want
							<br /> to logout?
						</Typography>

						<Box sx={{ mt: 3 }}>
							<Button
								color="primary"
								variant="contained"
								onClick={handleLogoutClose}
								sx={{
									borderRadius: "20px",
									textTransform: "capitalize",
									px: 2,
									mx: 0.5,
								}}
							>
								Cancel
							</Button>

							<Button
								color="primary"
								onClick={handleLogout}
								sx={{
									borderRadius: "20px",
									textTransform: "capitalize",
									px: 2,
									mx: 0.5,
								}}
							>
								Logout
							</Button>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default LogoutModal;
