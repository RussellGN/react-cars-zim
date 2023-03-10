import { Button, Badge, styled, Drawer, Backdrop, Box, IconButton, useTheme } from "@mui/material";
import {
	AddOutlined,
	LightModeOutlined,
	DarkModeOutlined,
	CloseOutlined,
	MenuOutlined,
	SearchOutlined,
	NotificationsOutlined,
	KeyboardDoubleArrowRightOutlined,
} from "@mui/icons-material";
import Logo from "./Logo";
import { useState, useContext } from "react";
import SearchForm from "./SearchForm";
import { Link, NavLink } from "react-router-dom";

import { UserContext } from "../static-backend/UserContext";

const LinkItem = ({ to, label, icon, setOpenBackdrop }) => {
	const theme = useTheme();
	return (
		<Button
			component={NavLink}
			onClick={() => {
				setOpenBackdrop(false);
			}}
			to={to}
			end
			sx={{
				width: "90%",
				mx: "auto",
				mb: 0.5,
				borderRadius: "15px",
				textDecoration: "none",
				padding: theme.spacing(2),
				backgroundColor: theme.palette.dark.main,
				color: theme.palette.light.main,
				justifyContent: "flex-start",
				fontSize: theme.typography.body1,
				gap: 2,
				"&:hover": {
					backgroundColor: theme.palette.dark.main,
					color: theme.palette.light.main,
				},
				"&.active": {
					border: "solid 1px",
					borderColor: "primary.main",
				},
			}}
			startIcon={icon || <KeyboardDoubleArrowRightOutlined />}
		>
			{label}
		</Button>
	);
};

const SearchComp = () => {
	const [openDrawer, setOpenDrawer] = useState(false);

	return (
		<>
			<IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
				<SearchOutlined />
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
						<CloseOutlined />
					</IconButton>

					<SearchForm show={true} setOpenDrawer={setOpenDrawer} />
				</Box>
			</Drawer>
		</>
	);
};

const MenuComp = ({ mode, setMode }) => {
	const { user } = useContext(UserContext);
	const [openBackdrop, setOpenBackdrop] = useState(false);

	const changeMode = () => {
		setOpenBackdrop(true);
		if (mode === "dark") setMode("light");
		else setMode("dark");
	};

	return (
		<>
			<IconButton color="inherit" onClick={() => setOpenBackdrop(true)}>
				<MenuOutlined />
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
						width: "100%",
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
							{user?.username ? (
								<Badge
									badgeContent={41}
									max={9}
									onClick={() => {
										setOpenBackdrop(false);
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
									<NotificationsOutlined sx={{ color: "light.main" }} />
								</Badge>
							) : (
								""
							)}

							<IconButton color="light" onClick={changeMode} sx={{ ml: 1 }}>
								{mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
							</IconButton>

							<Button
								onClick={() => {
									setOpenBackdrop(false);
								}}
								color="success"
								component={Link}
								to="/new-listing"
								sx={{
									ml: 1,
								}}
								endIcon={<AddOutlined />}
							>
								New
								<Box
									component="span"
									sx={{ display: { xs: "none", sm: "inline" }, ml: 0.7 }}
								>
									Listing
								</Box>
							</Button>
						</span>

						<IconButton
							onClick={() => {
								setOpenBackdrop(false);
							}}
							color="light"
						>
							<CloseOutlined />
						</IconButton>
					</Box>

					{/* {user?.username ? (
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
								to={`/account/${user?.slug}`}
								onClick={() => {
									setOpenBackdrop(false);
									setExpanded(false);
								}}
								alt={user?.username}
								src={user.displayPhoto}
								sx={{
									width: "5rem",
									height: "5rem",
								}}
							/>
						</Box>
					) : (
						""
					)} */}

					<LinkItem setOpenBackdrop={setOpenBackdrop} to="/" label="Home" />
					<LinkItem setOpenBackdrop={setOpenBackdrop} to="/offers" label="Offers" />

					{user?.slug ? (
						<LinkItem
							setOpenBackdrop={setOpenBackdrop}
							to={"/account/" + user.slug}
							label="Account"
						/>
					) : (
						<>
							<LinkItem setOpenBackdrop={setOpenBackdrop} to="/login" label="Login" />
							<LinkItem
								setOpenBackdrop={setOpenBackdrop}
								to="/signup"
								label="Signup"
							/>
						</>
					)}

					<LinkItem setOpenBackdrop={setOpenBackdrop} to="/about" label="About" />
					<LinkItem setOpenBackdrop={setOpenBackdrop} to="/contact" label="Contact" />
				</Box>
			</Backdrop>
		</>
	);
};

const MobileNavigation = ({ mode, setMode }) => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				display: { xs: "flex", md: "none" },
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<SearchComp />

			<Logo />

			<MenuComp mode={mode} setMode={setMode} />
		</Box>
	);
};

export default MobileNavigation;
