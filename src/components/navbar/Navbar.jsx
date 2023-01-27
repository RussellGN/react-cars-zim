import SearchForm from "./SearchForm";
import { Stack, AppBar, Container } from "@mui/material";
import AccountSection from "./AccountSection";
import HeaderNavigation from "./HeaderNavigation";
import MobileNavigation from "./MobileNavigation";
import { useLocation } from "react-router-dom";
import Alerts from "./Alerts";

const Navbar = ({ mode, setMode }) => {
	const { pathname } = useLocation();

	for (let route of [
		"/login",
		"/signup",
		"/enquire",
		"/new-listing",
		"/account-details",
		"/edit-account-details",
	]) {
		if (pathname.includes(route)) {
			return;
		}
	}

	return (
		<AppBar
			elevation={1}
			sx={{
				position: "sticky",
				top: 0,
				left: 0,
				backgroundColor: "background.paper",
				color: "inherit",
				py: 2,
				px: "0 !important", // this is here to prevent the appbar shifing  10px to the left because of the pop-up menus. I dont know why it works, just a bug i caught, or maybe its not
				mb: 5,
			}}
		>
			<Container>
				<Stack direction="row" alignItems="flex-end" justifyContent="space-between">
					<HeaderNavigation />
					<SearchForm />
					<AccountSection mode={mode} setMode={setMode} />
					<MobileNavigation mode={mode} setMode={setMode} />
				</Stack>
			</Container>

			<Alerts />
		</AppBar>
	);
};

export default Navbar;
