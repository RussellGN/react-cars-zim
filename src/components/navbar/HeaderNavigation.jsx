import { styled, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const HeaderLink = styled(NavLink)(({ theme }) => ({
	color: "inherit",
	marginLeft: theme.spacing(2),
	textDecoration: "none",
	position: "relative",
	"&::after": {
		content: '""',
		position: "absolute",
		bottom: "-7px",
		left: 0,
		width: 0,
		height: "2px",
		borderRadius: "1.5rem",
		transition: "all 0.2s",
		background: theme.palette.primary.main,
	},
	"&.active::after, &:hover::after": { width: "100%" },
}));

const HeaderNavigation = () => {
	return (
		<Box
			sx={{
				display: { xs: "none", md: "flex" },
				alignItems: "center",
			}}
		>
			<Logo />
			<nav>
				<HeaderLink to="/" end>
					Home
				</HeaderLink>

				<HeaderLink to="/offers">Offers</HeaderLink>
			</nav>
		</Box>
	);
};

export default HeaderNavigation;
