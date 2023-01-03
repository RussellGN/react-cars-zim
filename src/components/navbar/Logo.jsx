import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Typography
			component={Link}
			to="/"
			variant="h4"
			sx={{ color: "inherit", textDecoration: "none", fontFamily: "cursive" }}
		>
			Cars
			<Typography variant="inherit" component="span" sx={{ color: "primary.main" }}>
				.zim
			</Typography>
		</Typography>
	);
};

export default Logo;
