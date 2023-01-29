import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ctaImage from "./images/cta-image.jpg";

const CTA = () => {
	return (
		<Box
			sx={{
				textAlign: "center",
				minHeight: "8rem",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				py: 5,
				color: "light.main",
				background: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0,0.7)),
               url(${ctaImage}) center center`,
				backgroundSize: "cover",
			}}
		>
			<Typography color="inherit" variant="h5">
				There's Nothing Left To See
			</Typography>
			<Typography color="inherit" variant="body1" sx={{ my: 2 }}>
				Start browsing offers right now!
			</Typography>
			<Button component={Link} to="/offers">
				Lets Go!
			</Button>
		</Box>
	);
};

export default CTA;
