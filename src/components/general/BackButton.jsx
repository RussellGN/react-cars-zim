import { HomeOutlined, ReplyAllOutlined } from "@mui/icons-material";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useLocation, Link, useNavigate } from "react-router-dom";

const BackButton = ({ sx, floating, onlyRoute }) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const location = useLocation();
	const limitReached = useMediaQuery(`(min-width: ${theme.breakpoints.values.lg}px)`);

	let floatingStyles = {};

	if (floating === true) {
		floatingStyles = {
			backgroundColor: `${theme.palette.primary.main} !important`,
			color: "white !important",
			position: "fixed",
			bottom: 0,
			right:
				limitReached === true ? (window.innerWidth - theme.breakpoints.values.lg) / 2 : 0,
			m: 1,
			zIndex: 10,
		};
	}

	const goBack = () => {
		if (location.key === "default") {
			navigate("/");
		} else {
			navigate(-1);
		}
	};

	if (onlyRoute) {
		return (
			<IconButton
				component={Link}
				to={onlyRoute}
				size="small"
				sx={{ ...floatingStyles, border: "solid thin", borderColor: "divider" }}
			>
				{onlyRoute === "/" ? <HomeOutlined /> : <ReplyAllOutlined />}
			</IconButton>
		);
	}
	return (
		<IconButton
			size="small"
			onClick={goBack}
			sx={{
				...floatingStyles,
				border: "solid thin",
				borderColor: "divider",
			}}
		>
			{location?.key === "default" ? <HomeOutlined /> : <ReplyAllOutlined />}
		</IconButton>
	);
};

export default BackButton;
