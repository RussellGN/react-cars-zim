import {
	DeleteOutlined,
	EmailOutlined,
	InfoOutlined,
	LocalOfferOutlined,
	NotificationsOutlined,
	PersonOutlined,
	ReplyAllOutlined,
	SendOutlined,
	WarningOutlined,
} from "@mui/icons-material";
import {
	Box,
	Button,
	Container,
	Grid,
	Typography,
	useTheme,
	useMediaQuery,
	IconButton,
	TextField,
} from "@mui/material";
import React, { useState } from "react";
import BackButton from "../components/general/BackButton";
import { useParams } from "react-router-dom";

const NotificationTemplate = ({ notification }) => {
	return (
		<div>
			<Box
				sx={{
					mb: 2,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Typography fontWeight="bold">{notification.title}</Typography>
				<Typography variant="caption">{notification.date.toLocaleDateString()}</Typography>
			</Box>
			<Typography>{notification.body}</Typography>
		</div>
	);
};

const NotificationIcon = ({ category, sx }) => {
	switch (category) {
		case "account":
			return <PersonOutlined sx={sx} />;
		case "message":
			return <EmailOutlined sx={sx} />;
		case "offer":
			return <LocalOfferOutlined sx={sx} />;
		case "warning":
			return <WarningOutlined sx={sx} />;
		default:
			return <InfoOutlined sx={sx} />;
	}
};

const Notifs2 = () => {
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
	const { id } = useParams();
	const [activeNotification, setActiveNotification] = useState(
		id ? notifications.find((notif) => notif.id.toString() === id.toString()) : null
	);
	const [viewMenu, setViewMenu] = useState(true);
	const theme = useTheme();
	const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px)`);

	const openNotification = (id) => {
		setActiveNotification(notifications.find((notif) => notif.id === id));
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
					Notifications
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
						{notifications?.map((notification) => {
							return (
								<Button
									key={notification.id}
									startIcon={
										<NotificationIcon category={notification.category} />
									}
									onClick={() => openNotification(notification.id)}
									variant="outlined"
									sx={{
										justifyContent: "flex-start",
										color: "inherit !important",
										py: 2,
										width: "100%",
										gap: 0.5,
										borderRadius: "10px",
										border: "solid 1px",
										borderColor:
											!isMobile && activeNotification?.id === notification.id
												? "primary.main"
												: "divider",
										backgroundColor:
											theme.palette.mode === "dark"
												? "background.paper"
												: "white",
									}}
								>
									<Typography
										variant="body2"
										noWrap
										sx={{ flexGrow: 1, textAlign: "left" }}
									>
										{notification.title}
									</Typography>
									<Typography variant="caption">
										{notification.date.toLocaleDateString()}
									</Typography>
								</Button>
							);
						})}
					</Box>
				</Grid>

				<Grid item xs sx={{ display: isMobile && viewMenu === true ? "none" : "" }}>
					<Box
						sx={{
							position: "relative",
							borderRadius: "20px",
							backgroundColor:
								theme.palette.mode === "dark" ? "background.paper" : "white",
							border: "solid 1px",
							borderColor: "divider",
							p: { xs: 2, sm: 3 },
							minHeight: "65vh",
							width: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						{activeNotification ? (
							<>
								<Box sx={{ borderRadius: "10px" }}>
									<NotificationTemplate notification={activeNotification} />
								</Box>

								<Box
									sx={{
										gap: 2,
										display: "flex",
										justifyContent: "flex-end",
										alignItems: "center",
									}}
								>
									<TextField
										size="small"
										label="Send a response"
										multiline
										rows={1}
										sx={{
											width: "100%",
											display:
												activeNotification.category === "offer"
													? ""
													: "none",
											"& .MuiInputBase-root": {
												borderRadius: "30px",
											},
										}}
									/>

									<IconButton
										size="small"
										sx={{
											display:
												activeNotification.category === "offer"
													? ""
													: "none",
										}}
									>
										<SendOutlined />
									</IconButton>

									<IconButton size="small">
										<DeleteOutlined />
									</IconButton>
								</Box>
							</>
						) : (
							<Typography
								variant="h5"
								sx={{
									position: "absolute",
									top: 0,
									right: 0,
									bottom: 0,
									left: 0,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									textAlign: "center",
								}}
							>
								Tap to open <NotificationsOutlined sx={{ ml: 0.5 }} />
							</Typography>
						)}
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Notifs2;
