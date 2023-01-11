import {
	Button,
	Link as MaterialLink,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Container,
	Typography,
	Box,
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormGroup,
	Checkbox,
	useTheme,
} from "@mui/material";
import {
	Settings as SettingsIcon,
	KeyboardArrowDown,
	Person,
	Notifications,
	InfoOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import AnimatedRoute from "../components/routes/AnimatedRoute";

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
									<MaterialLink component={Link} to="/edit-account">
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
				<Button
					size="small"
					variant="contained"
					sx={{ borderRadius: "30px", textTransform: "capitalize" }}
				>
					Save changes
				</Button>
			</div>
		</>
	);
};

const AccountSettings = () => {
	return (
		<>
			<Box sx={{ display: "flex", my: 3 }}>
				<InfoOutlined sx={{ mr: 2 }} />
				<Typography variant="body2" sx={{ display: "flex" }}>
					Deactivating your account will temporarily remove your offers and profile from
					view on the platform, but nothing will be deleted. Your account will be
					reactivated when you log in again.
				</Typography>
			</Box>
			<div>
				<Button
					size="small"
					variant="outlined"
					sx={{ borderRadius: "30px", textTransform: "capitalize", mr: 2 }}
				>
					Deactivate
				</Button>
				<Button
					size="small"
					variant="text"
					sx={{ borderRadius: "30px", textTransform: "capitalize" }}
				>
					Delete
				</Button>
			</div>
		</>
	);
};

const Settings = () => {
	const theme = useTheme();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (e, isExpanded) => setExpanded(isExpanded ? panel : false);

	return (
		<AnimatedRoute>
			<Container maxWidth="sm">
				<Typography
					variant="h5"
					sx={{ mb: 3, display: "flex", justifyContent: "center", alignItems: "center" }}
				>
					Settings <SettingsIcon fontSize="inherit" sx={{ ml: 1 }} />
				</Typography>

				<div>
					<Accordion
						expanded={expanded === "panel1"}
						onChange={handleChange("panel1")}
						elevation={0}
						sx={{ p: 0 }}
					>
						<AccordionSummary
							expandIcon={<KeyboardArrowDown />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							sx={{ p: 0, backgroundColor: "background.default" }}
						>
							<Typography sx={{ display: "flex", alignItems: "center" }}>
								<Notifications sx={{ mr: 1 }} />
								Notifications
							</Typography>
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
							<Typography>Select how you receive notifications.</Typography>

							<NotificationSettings />
						</AccordionDetails>
					</Accordion>

					<Accordion
						expanded={expanded === "panel2"}
						onChange={handleChange("panel2")}
						elevation={0}
						sx={{ p: 0 }}
					>
						<AccordionSummary
							expandIcon={<KeyboardArrowDown />}
							aria-controls="panel2a-content"
							id="panel2a-header"
							sx={{ p: 0, backgroundColor: "background.default" }}
						>
							<Typography sx={{ display: "flex", alignItems: "center" }}>
								<Person sx={{ mr: 1 }} />
								Account
							</Typography>
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
							<Typography>Deactivate or delete your account.</Typography>

							<AccountSettings />
						</AccordionDetails>
					</Accordion>
				</div>
			</Container>
		</AnimatedRoute>
	);
};

export default Settings;
