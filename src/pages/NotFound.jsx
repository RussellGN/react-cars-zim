import { HomeOutlined } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
	const location = useLocation();
	return (
		<Container>
			<Typography textAlign="center" sx={{ my: 3 }}>
				This page {`(${location?.pathname?.substring(1)})`} was not found. <br />
				<Button
					startIcon={<HomeOutlined />}
					component={Link}
					to="/"
					variant="contained"
					sx={{ mt: 2, borderRadius: "30px" }}
				>
					Go to Homepage
				</Button>
			</Typography>
		</Container>
	);
};

export default NotFound;
