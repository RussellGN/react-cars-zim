import {
	ListItemIcon,
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
	DarkMode,
	LightMode,
	PersonAdd,
	Settings,
	Logout,
	Notifications,
	Person,
	Warning,
	InfoOutlined,
	LocalOffer,
	Email,
	Add,
} from "@mui/icons-material";
import { Link, useLocation, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../App";

const CustomNotificationIcon = ({ category, sx }) => {
	switch (category) {
		case "account":
			return (
				<ListItemIcon sx={sx}>
					<Person fontSize="inherit" />
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
					<Email fontSize="inherit" />
				</ListItemIcon>
			);
		case "offer":
			return (
				<ListItemIcon sx={sx}>
					<LocalOffer sx={sx} fontSize="inherit" />
				</ListItemIcon>
			);
		case "warning":
			return (
				<ListItemIcon sx={sx}>
					<Warning sx={sx} fontSize="inherit" />
				</ListItemIcon>
			);
	}
};

const AccountSection = ({ show, mode, setMode }) => {
	const { user } = useContext(UserContext);
	const location = useLocation();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (e) => setAnchorEl(e.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const [anchorNotifsEl, setAnchorNotifsEl] = useState(null);
	const openNotifs = Boolean(anchorNotifsEl);
	const handleNotifsClick = (e) => setAnchorNotifsEl(e.currentTarget);
	const handleNotifsClose = () => setAnchorNotifsEl(null);

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
							<Notifications color="inherit" />
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
						PaperProps={{
							elevation: 0,
							sx: {
								overflow: "visible",
								filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
								mt: 1.5,
								"& .MuiAvatar-root": {
									width: 32,
									height: 32,
									ml: -0.5,
									mr: 1,
								},
								"&:before": {
									content: '""',
									display: "block",
									position: "absolute",
									top: 0,
									right: 14,
									width: 10,
									height: 10,
									bgcolor: "background.paper",
									transform: "translateY(-50%) rotate(45deg)",
									zIndex: 0,
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
								>
									<CustomNotificationIcon category={notification.category} />

									<Typography variant="body1" noWrap>
										{notification.title}
									</Typography>
								</MenuItem>
							);
						})}
						<MenuItem component={Link} to="/notifications" sx={{ p: 0 }}>
							<Typography
								variant="caption"
								sx={{ textAlign: "center", width: "100%" }}
							>
								view all
							</Typography>
						</MenuItem>
					</Menu>
				</>
			)}

			<IconButton color="inherit" onClick={changeMode} sx={{ ml: 2 }}>
				{mode === "dark" ? <LightMode /> : <DarkMode />}
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
							PaperProps={{
								elevation: 0,
								sx: {
									overflow: "visible",
									filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
									mt: 1.5,
									"& .MuiAvatar-root": {
										width: 32,
										height: 32,
										ml: -0.5,
										mr: 1,
									},
									"&:before": {
										content: '""',
										display: "block",
										position: "absolute",
										top: 0,
										right: 14,
										width: 10,
										height: 10,
										bgcolor: "background.paper",
										transform: "translateY(-50%) rotate(45deg)",
										zIndex: 0,
									},
								},
							}}
							transformOrigin={{ horizontal: "right", vertical: "top" }}
							anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
						>
							<MenuItem component={Link} to={`/account/${user.slug}`}>
								<ListItemIcon>
									<Person fontSize="small" />
								</ListItemIcon>
								<Typography variant="body1" noWrap>
									My account
								</Typography>
							</MenuItem>

							<MenuItem component={Link} to="/new-listing">
								<ListItemIcon>
									<Add fontSize="small" />
								</ListItemIcon>
								<Typography variant="body1" noWrap>
									New listing
								</Typography>
							</MenuItem>

							<MenuItem component={Link} to="/signup">
								<ListItemIcon>
									<PersonAdd fontSize="small" />
								</ListItemIcon>
								Add another account
							</MenuItem>

							<MenuItem component={Link} to="/settings">
								<ListItemIcon>
									<Settings fontSize="small" />
								</ListItemIcon>
								Settings
							</MenuItem>

							<MenuItem>
								<ListItemIcon>
									<Logout fontSize="small" />
								</ListItemIcon>
								Logout
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
	);
};

export default AccountSection;
