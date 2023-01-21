import {
	ListItemIcon,
	useTheme,
	Menu,
	MenuItem,
	Badge,
	Avatar,
	Button,
	Box,
	IconButton,
	Typography,
} from "@mui/material";
import {
	DarkModeOutlined,
	LightModeOutlined,
	PersonAddOutlined,
	SettingsOutlined,
	LogoutOutlined,
	NotificationsOutlined,
	PersonOutlined,
	WarningOutlined,
	InfoOutlined,
	LocalOfferOutlined,
	EmailOutlined,
	Add,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import LogoutModal from "../general/LogoutModal";

const CustomNotificationIcon = ({ category, sx }) => {
	switch (category) {
		case "account":
			return (
				<ListItemIcon sx={sx}>
					<PersonOutlined fontSize="inherit" />
				</ListItemIcon>
			);
		case "info":
			return (
				<ListItemIcon sx={sx}>
					<InfoOutlined fontSize="inherit" />
				</ListItemIcon>
			);
		case "message":
			return (
				<ListItemIcon sx={sx}>
					<EmailOutlined fontSize="inherit" />
				</ListItemIcon>
			);
		case "offer":
			return (
				<ListItemIcon sx={sx}>
					<LocalOfferOutlined fontSize="inherit" />
				</ListItemIcon>
			);
		case "warning":
			return (
				<ListItemIcon sx={sx}>
					<WarningOutlined fontSize="inherit" />
				</ListItemIcon>
			);
	}
};

const AccountSection = ({ show, mode, setMode }) => {
	const theme = useTheme();
	const { user, setUser } = useContext(UserContext);
	const location = useLocation();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (e) => setAnchorEl(e.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const [anchorNotifsEl, setAnchorNotifsEl] = useState(null);
	const openNotifs = Boolean(anchorNotifsEl);
	const handleNotifsClick = (e) => setAnchorNotifsEl(e.currentTarget);
	const handleNotifsClose = () => setAnchorNotifsEl(null);

	const [openLogout, setOpenLogout] = useState(false);
	const handleLogoutOpen = () => setOpenLogout(true);
	const handleLogoutClose = () => setOpenLogout(false);

	const notifications = [
		{
			id: 1,
			title: "New login",
			date: new Date(),
			category: "warning",
			body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis beatae consequuntur repellendus tenetur architecto quo aliquid facilis eum, assumenda ipsam.",
		},
		{
			id: 2,
			title: "New bid!",
			date: new Date(),
			category: "offer",
			body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis beatae consequuntur repellendus tenetur architecto quo aliquid facilis eum, assumenda ipsam.",
		},
		{
			id: 3,
			title: "Happy holidays!",
			date: new Date(),
			category: "message",
			body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis beatae consequuntur repellendus tenetur architecto quo aliquid facilis eum, assumenda ipsam.",
		},
		{
			id: 4,
			title: "Welcome new user!",
			date: new Date(),
			category: "message",
			body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis beatae consequuntur repellendus tenetur architecto quo aliquid facilis eum, assumenda ipsam.",
		},
	];

	const changeMode = () => {
		if (mode === "dark") setMode("light");
		else setMode("dark");
	};
	return (
		<>
			<LogoutModal
				openLogout={openLogout}
				handleLogoutClose={handleLogoutClose}
				handleLogoutOpen={handleLogoutOpen}
			/>

			<Box
				sx={{
					display: { xs: show ? "flex" : "none", md: "flex" },
					alignItems: "center",
				}}
			>
				{location?.pathname?.includes("/notifications") ? (
					""
				) : (
					<>
						{user?.username ? (
							<Badge
								badgeContent={41}
								max={9}
								onClick={handleNotifsClick}
								color="success"
								sx={{ cursor: "pointer", "&:hover": { opacity: 0.9 } }}
								anchorOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
							>
								<NotificationsOutlined color="inherit" />
							</Badge>
						) : (
							""
						)}

						<Menu
							open={openNotifs}
							anchorEl={anchorNotifsEl}
							id="Notifs-menu"
							onClose={handleNotifsClose}
							onClick={handleNotifsClose}
							MenuListProps={{
								sx: {
									py: "0 !important",
								},
							}}
							PaperProps={{
								elevation: 10,
								sx: {
									borderRadius: "15px !important",
									overflow: "hidden",
									mt: 1.5,
									"& .MuiAvatar-root": {
										width: 32,
										height: 32,
										ml: -0.5,
										mr: 1,
									},
								},
							}}
							transformOrigin={{ horizontal: "right", vertical: "top" }}
							anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
						>
							{notifications?.map((notification) => {
								return (
									<MenuItem
										key={notification.id}
										component={Link}
										to={`/notifications/${notification.id}`}
										sx={{
											borderBottom: "solid 1px",
											borderColor: "divider",
											maxWidth: "20rem",
											px: 2.5,
											py: 1,
										}}
									>
										<CustomNotificationIcon
											sx={{
												mr: 2,
												minWidth: "0 !important",
											}}
											category={notification.category}
										/>

										<Typography variant="body2" noWrap>
											{notification.title}
										</Typography>
									</MenuItem>
								);
							})}
							<MenuItem component={Link} to="/notifications" sx={{ p: 0 }}>
								<Typography
									variant="caption"
									sx={{
										backgroundColor: "divider",
										py: 0.2,
										textAlign: "center",
										width: "100%",
									}}
								>
									view all
								</Typography>
							</MenuItem>
						</Menu>
					</>
				)}

				<IconButton color="inherit" onClick={changeMode} sx={{ ml: 2 }}>
					{mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
				</IconButton>

				{user?.username ? (
					!location?.pathname?.includes("/account") ||
					(location?.pathname?.includes("/account") &&
						!location.pathname.includes(user.slug)) ? (
						<>
							<Avatar
								onClick={handleClick}
								alt={user?.username}
								src={`/${process.env.REACT_APP_BASENAME}${user?.coverImage}`}
								sx={{
									ml: 2,
									cursor: "pointer",
									transition: "border-color 0.2s",
									border: "solid medium",
									borderColor: "success.dark",
									"&:hover": { borderColor: "success.light" },
								}}
							/>

							<Menu
								open={open}
								anchorEl={anchorEl}
								id="account-menu"
								onClose={handleClose}
								onClick={handleClose}
								MenuListProps={{
									sx: {
										py: "0 !important",
									},
								}}
								PaperProps={{
									elevation: 10,
									sx: {
										borderRadius: "15px !important",
										overflow: "hidden",
										mt: 1.5,
										"& .MuiAvatar-root": {
											width: 32,
											height: 32,
											ml: -0.5,
											mr: 1,
										},
									},
								}}
								transformOrigin={{ horizontal: "right", vertical: "top" }}
								anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
							>
								<MenuItem
									component={Link}
									to={`/account/${user.slug}`}
									sx={{
										borderBottom: "solid 1px",
										borderColor: "divider",
										px: 2.5,
										py: 1,
									}}
								>
									<ListItemIcon
										sx={{
											mr: 2,
											minWidth: "0 !important",
										}}
									>
										<PersonOutlined fontSize="small" />
									</ListItemIcon>
									<Typography variant="body2" noWrap>
										My account
									</Typography>
								</MenuItem>

								<MenuItem
									component={Link}
									to="/new-listing"
									sx={{
										borderBottom: "solid 1px",
										borderColor: "divider",
										px: 2.5,
										py: 1,
									}}
								>
									<ListItemIcon
										sx={{
											mr: 2,
											minWidth: "0 !important",
										}}
									>
										<Add fontSize="small" />
									</ListItemIcon>
									<Typography variant="body2" noWrap>
										New listing
									</Typography>
								</MenuItem>

								<MenuItem
									component={Link}
									to="/signup"
									sx={{
										borderBottom: "solid 1px",
										borderColor: "divider",
										px: 2.5,
										py: 1,
									}}
								>
									<ListItemIcon
										sx={{
											mr: 2,
											minWidth: "0 !important",
										}}
									>
										<PersonAddOutlined fontSize="small" />
									</ListItemIcon>
									<Typography variant="body2" noWrap>
										Add another account
									</Typography>
								</MenuItem>

								<MenuItem
									component={Link}
									to="/settings"
									sx={{
										borderBottom: "solid 1px",
										borderColor: "divider",
										px: 2.5,
										py: 1,
									}}
								>
									<ListItemIcon
										sx={{
											mr: 2,
											minWidth: "0 !important",
										}}
									>
										<SettingsOutlined fontSize="small" />
									</ListItemIcon>
									<Typography variant="body2" noWrap>
										Settings
									</Typography>
								</MenuItem>

								<MenuItem
									onClick={handleLogoutOpen}
									sx={{
										borderBottom: "solid 1px",
										borderColor: "divider",
										px: 2.5,
										py: 1,
									}}
								>
									<ListItemIcon
										sx={{
											mr: 2,
											minWidth: "0 !important",
										}}
									>
										<LogoutOutlined fontSize="small" />
									</ListItemIcon>
									<Typography variant="body2" noWrap>
										Logout
									</Typography>
								</MenuItem>
							</Menu>
						</>
					) : (
						""
					)
				) : (
					""
				)}

				{user?.username ? (
					""
				) : (
					<Button
						component={Link}
						to="/login"
						variant="contained"
						sx={{ ml: 2, borderRadius: "3rem", textTransform: "capitalize" }}
					>
						Login
					</Button>
				)}
			</Box>
		</>
	);
};

export default AccountSection;
