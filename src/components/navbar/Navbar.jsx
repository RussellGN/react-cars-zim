import SearchForm from "./SearchForm";
import { Stack, AppBar, useTheme, Container, Paper, Box } from "@mui/material";
import AccountSection from "./AccountSection";
import HeaderNavigation from "./HeaderNavigation";
import MobileNavigation from "./MobileNavigation";
import { useLocation } from "react-router-dom";
import Alerts from "./Alerts";

const Navbar = ({ mode, setMode }) => {
	const { pathname } = useLocation();
	const theme = useTheme();
	for (let route of [
		"/login",
		"/signup",
		"/enquire",
		"/new-listing",
		"/edit-listing",
		"/account-details",
		"/edit-account-details",
	]) {
		if (pathname.includes(route)) {
			return;
		}
	}

	return (
		<Box
			sx={{
				boxShadow: theme.shadows[3],
				position: "sticky",
				zIndex: 1100,
				top: 0,
				left: 0,
				backgroundColor: "background.paper",
				color: "inherit",
				py: 2,
				px: "0 !important", // this is here to prevent the appbar shifting  10px to the left because of the pop-up menus. I dont know why it works, just a bug i caught, or maybe its not.
				mb: 5,
			}}
		>
			<Container>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<HeaderNavigation />
					<SearchForm />
					<AccountSection mode={mode} setMode={setMode} />
					<MobileNavigation mode={mode} setMode={setMode} />
				</Stack>
			</Container>

			<Alerts />
		</Box>
	);
};

export default Navbar;
