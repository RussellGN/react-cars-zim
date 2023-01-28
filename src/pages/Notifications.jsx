import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Container,
	Typography,
	Box,
	useTheme,
} from "@mui/material";
import {
	NotificationsOutlined,
	KeyboardArrowDownOutlined,
	PersonOutlined,
	InfoOutlined,
	WarningOutlined,
	LocalOfferOutlined,
	EmailOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import AnimatedRoute from "../components/routes/AnimatedRoute";
import BackButton from "../components/general/BackButton";

const NotificationTemplate = ({ notification }) => {
	return <div>{notification.body}</div>;
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

const Notifications = () => {
	const theme = useTheme();
	const [expanded, setExpanded] = useState(false);
	const handleChange = (panel) => (e, isExpanded) => setExpanded(isExpanded ? panel : false);

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

	return (
		<AnimatedRoute>
			<Container maxWidth="sm">
				<Typography
					variant="h5"
					sx={{ mb: 3, display: "flex", justifyContent: "center", alignItems: "center" }}
				>
					<BackButton />
					<span style={{ marginLeft: "1rem" }}>
						Notifications <NotificationsOutlined fontSize="inherit" sx={{ ml: 1 }} />
					</span>
				</Typography>

				<div>
					{notifications?.map((notification) => {
						return (
							<Accordion
								key={notification.id}
								expanded={expanded === `panel-${notification.id}`}
								onChange={handleChange(`panel-${notification.id}`)}
								elevation={0}
								sx={{ p: 0.5, backgroundColor: "background.default" }}
							>
								<AccordionSummary
									expandIcon={<KeyboardArrowDownOutlined />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									sx={{ p: 0, backgroundColor: "background.default" }}
								>
									<Box
										sx={{
											width: "100%",
											display: "flex",
											alignItems: "center",
										}}
									>
										<NotificationIcon
											category={notification.category}
											sx={{ mr: 1, fontSize: "inherit" }}
										/>
										<Typography noWrap sx={{ flexGrow: 1, pr: 2 }}>
											{notification.title}
										</Typography>
										<span>{notification.date.toLocaleDateString()}</span>
									</Box>
								</AccordionSummary>

								<AccordionDetails
									sx={{
										p: 2,
										backgroundColor:
											theme.palette.mode === "light"
												? "rgb(250,250,250)"
												: "background.paper",
										borderRadius: "10px",
									}}
								>
									<NotificationTemplate notification={notification} />
								</AccordionDetails>
							</Accordion>
						);
					})}
				</div>
			</Container>
		</AnimatedRoute>
	);
};

export default Notifications;
