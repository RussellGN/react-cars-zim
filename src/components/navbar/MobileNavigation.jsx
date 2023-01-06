import {
	Collapse,
	Typography,
	Badge,
	Avatar,
	styled,
	Drawer,
	Backdrop,
	Box,
	IconButton,
} from "@mui/material";
import {
	LightMode,
	DarkMode,
	Close,
	Menu as MenuIcon,
	Search,
	Notifications,
	ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import Logo from "./Logo";
import { useState } from "react";
import SearchForm from "./SearchForm";
import { Link, NavLink } from "react-router-dom";

import * as React from "react";

const MobileLink = styled(NavLink)(({ theme }) => ({
	color: "inherit",
	marginBottom: theme.spacing(1),
	textDecoration: "none",
	transition: "all 0.2s",
	display: "block",
	"&.active, &:hover": {
		color: theme.palette.primary.light,
	},
}));

const MobileNavigation = ({ mode, setMode }) => {
	const [expanded, setExpanded] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [openBackdrop, setOpenBackdrop] = useState(false);

	const handleExpandClick = () => setExpanded(!expanded);

	const changeMode = () => {
		setOpenBackdrop(true);
		if (mode === "dark") setMode("light");
		else setMode("dark");
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				display: { xs: "flex", md: "none" },
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
				<Search />
			</IconButton>

			<Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
				<Box
					sx={{
						minWidth: 250,
						px: 5,
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						position: "relative",
					}}
				>
					<IconButton
						onClick={() => setOpenDrawer(false)}
						sx={{ position: "absolute", top: "1rem", right: "1rem" }}
					>
						<Close />
					</IconButton>

					<SearchForm show={true} setOpenDrawer={setOpenDrawer} />
				</Box>
			</Drawer>

			<Logo />

			<IconButton color="inherit" onClick={() => setOpenBackdrop(true)}>
				<MenuIcon />
			</IconButton>

			<Backdrop
				sx={{
					backgroundColor: "rgba(0,0,0,0.9) !important",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={openBackdrop}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						color: "light.primary",
					}}
				>
					<Box
						sx={{
							position: "absolute",
							top: 0,
							color: "light.primary",
							left: 0,
							width: "100%",
							p: 3,
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<span>
							<Badge
								badgeContent={41}
								max={9}
								onClick={() => {
									setOpenBackdrop(false);
									setExpanded(false);
								}}
								color="success"
								component={Link}
								to="/notifications"
								sx={{ cursor: "pointer" }}
								anchorOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
							>
								<Notifications sx={{ color: "light.main" }} />
							</Badge>

							<IconButton color="light" onClick={changeMode} sx={{ ml: 1 }}>
								{mode === "dark" ? <LightMode /> : <DarkMode />}
							</IconButton>
						</span>

						<IconButton
							onClick={() => {
								setOpenBackdrop(false);
								setExpanded(false);
							}}
							color="light"
						>
							<Close />
						</IconButton>
					</Box>

					<Box
						sx={{
							mb: 4,
							p: 0.5,
							borderRadius: "100%",
							background:
								"linear-gradient(to bottom right, rgb(0, 153, 255), rgb(0, 255, 153), rgb(0, 153, 51))",
						}}
					>
						<Avatar
							component={Link}
							to="/account"
							onClick={() => {
								setOpenBackdrop(false);
								setExpanded(false);
							}}
							alt="Remy Sharp"
							src={`/${process.env.REACT_APP_BASENAME}/static/undraw_profile_2.svg`}
							sx={{
								width: "5rem",
								height: "5rem",
							}}
						/>
					</Box>

					<MobileLink
						onClick={() => {
							setOpenBackdrop(false);
							setExpanded(false);
						}}
						to="/"
						end
						sx={{ color: "light.main" }}
					>
						Home
					</MobileLink>

					<MobileLink
						onClick={() => {
							setOpenBackdrop(false);
							setExpanded(false);
						}}
						to="/offers"
						sx={{ color: "light.main" }}
					>
						Offers
					</MobileLink>

					<MobileLink
						onClick={() => {
							setOpenBackdrop(false);
							setExpanded(false);
						}}
						to="/account"
						sx={{ color: "light.main" }}
					>
						Account
					</MobileLink>

					<Typography
						onClick={handleExpandClick}
						variant="body1"
						sx={{
							display: "flex",
							alignItems: "center",
							my: 2,
							cursor: "pointer",
							color: "light.main",
						}}
					>
						{expanded === true ? "less" : "more"}{" "}
						<ExpandMoreIcon
							sx={{
								ml: 0.3,
								transform: expanded === true ? "rotate(180deg)" : "",
								transition: "transform 0.2s",
							}}
						/>
					</Typography>

					<Collapse
						in={expanded}
						timeout="auto"
						unmountOnExit
						sx={{ textAlign: "center" }}
					>
						<MobileLink
							onClick={() => {
								setOpenBackdrop(false);
								setExpanded(false);
							}}
							to="/about"
							sx={{ color: "light.main" }}
						>
							About
						</MobileLink>

						<MobileLink
							onClick={() => {
								setOpenBackdrop(false);
								setExpanded(false);
							}}
							to="/contact"
							sx={{ color: "light.main" }}
						>
							Contact Us
						</MobileLink>

						<MobileLink
							onClick={() => {
								setOpenBackdrop(false);
								setExpanded(false);
							}}
							to="/report"
							sx={{ color: "light.main" }}
						>
							Report
						</MobileLink>

						<MobileLink
							onClick={() => {
								setOpenBackdrop(false);
								setExpanded(false);
							}}
							to="/login"
							sx={{ color: "light.main" }}
						>
							Login
						</MobileLink>
					</Collapse>
				</Box>
			</Backdrop>
		</Box>
	);
};

export default MobileNavigation;
