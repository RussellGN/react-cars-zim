import { NotificationsOutlined, PersonOutlined, ReplyAllOutlined } from "@mui/icons-material";
import {
	Box,
	FormControl,
	FormGroup,
	Button,
	Checkbox,
	Container,
	Link as MaterialLink,
	FormControlLabel,
	FormHelperText,
	Grid,
	Typography,
	useTheme,
	useMediaQuery,
	IconButton,
} from "@mui/material";
import React, { useState } from "react";
import BackButton from "../components/general/BackButton";
import { Link } from "react-router-dom";

const NotificationSettings = () => {
	const [state, setState] = useState({
		SMS: false,
		Email: true,
	});

	const handleChange = (e) => {
		setState((prev) => {
			return { ...prev, [e.target.name]: e.target.checked };
		});
	};

	return (
		<>
			<Typography fontWeight="bold">Select how you receive notifications.</Typography>

			<FormControl sx={{ my: 3 }} component="fieldset" variant="standard">
				<FormGroup>
					<FormControlLabel
						disabled
						control={
							<Checkbox
								size="small"
								checked={state.SMS}
								onChange={handleChange}
								name="SMS"
							/>
						}
						label={
							<Box sx={{ display: "flex" }}>
								SMS
								<FormHelperText sx={{ ml: 2 }}>
									Provide cell number{" "}
									<MaterialLink component={Link} to="/edit-account-details">
										here
									</MaterialLink>
								</FormHelperText>
							</Box>
						}
					/>
					<FormControlLabel
						control={
							<Checkbox
								size="small"
								checked={state.Email}
								onChange={handleChange}
								name="Email"
							/>
						}
						label="Email"
					/>
				</FormGroup>
			</FormControl>

			<div>
				<Button size="small" sx={{ px: 3 }}>
					Save changes
				</Button>
			</div>
		</>
	);
};

const AccountSettings = () => {
	return (
		<>
			<Typography fontWeight="bold">Deactivate or delete your account.</Typography>
			<Typography sx={{ my: 3 }}>
				Deactivating your account will temporarily remove your offers and profile from view
				on the platform, but nothing will be deleted. Your account will be reactivated when
				you log in again.
			</Typography>
			<div>
				<Button size="small" variant="outlined" sx={{ mr: 2, px: 3 }}>
					Deactivate
				</Button>
				<Button size="small" variant="text" sx={{ px: 3 }}>
					Delete
				</Button>
			</div>
		</>
	);
};

const Settings = () => {
	const [activeSettings, setActiveSettings] = useState("notifications");
	const [viewMenu, setViewMenu] = useState(true);
	const theme = useTheme();
	const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px)`);

	const openSettings = (settings) => {
		setActiveSettings(settings);
		if (isMobile) {
			setViewMenu(false);
		}
	};

	return (
		<Container>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					m: 3,
					mt: 0,
				}}
			>
				{viewMenu === true ? (
					<BackButton />
				) : (
					<IconButton
						onClick={() => setViewMenu(true)}
						size="small"
						sx={{
							border: "solid 1px",
							borderColor: "divider",
						}}
					>
						<ReplyAllOutlined />
					</IconButton>
				)}
				<Typography variant="h5" sx={{ mx: isMobile === true ? 2 : "auto" }}>
					Settings
				</Typography>
			</Box>

			<Grid container spacing={4}>
				<Grid item xs={12} md={3} sx={{ display: viewMenu === true ? "" : "none" }}>
					<Box
						sx={{
							minHeight: "65vh",
							width: "100%",
							display: "flex",
							gap: 1,
							flexDirection: "column",
						}}
					>
						<Button
							startIcon={<NotificationsOutlined />}
							onClick={() => openSettings("notifications")}
							variant="outlined"
							sx={{
								justifyContent: "flex-start",
								color: "inherit !important",
								px: 4,
								py: 2,
								width: "100%",
								gap: 2,
								borderRadius: "10px",
								border: "solid 1px",
								borderColor:
									!isMobile && activeSettings === "notifications"
										? "primary.main"
										: "divider",
								backgroundColor:
									theme.palette.mode === "dark" ? "background.paper" : "white",
							}}
						>
							Notifications
						</Button>

						<Button
							startIcon={<PersonOutlined />}
							onClick={() => openSettings("account")}
							variant="outlined"
							sx={{
								justifyContent: "flex-start",
								color: "inherit !important",
								px: 4,
								py: 2,
								width: "100%",
								gap: 2,
								borderRadius: "10px",
								border: "solid 1px",
								borderColor:
									!isMobile && activeSettings === "account"
										? "primary.main"
										: "divider",
								backgroundColor:
									theme.palette.mode === "dark" ? "background.paper" : "white",
							}}
						>
							Account
						</Button>
					</Box>
				</Grid>

				<Grid item xs sx={{ display: isMobile && viewMenu === true ? "none" : "" }}>
					<Box
						sx={{
							borderRadius: "20px",
							backgroundColor:
								theme.palette.mode === "dark" ? "background.paper" : "white",
							border: "solid 1px",
							borderColor: "divider",
							p: { xs: 2, sm: 3 },
							minHeight: "65vh",
							width: "100%",
						}}
					>
						{activeSettings === "notifications" ? (
							<NotificationSettings />
						) : (
							<AccountSettings />
						)}
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Settings;
