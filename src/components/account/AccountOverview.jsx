import { Box, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
	GroupOutlined,
	PersonOutlined,
	LocalPhoneOutlined,
	LocationOnOutlined,
	CameraAltOutlined,
	EmailOutlined,
} from "@mui/icons-material";
import { UserContext } from "../static-backend/UserContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ShareButton from "../general/ShareButton";

const AccountOverview = ({ account }) => {
	const { user } = useContext(UserContext);
	const { slug } = useParams();
	const theme = useTheme();

	const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px)`);
	return (
		<Grid
			item
			md={3}
			sx={{
				display: { md: "block" },
				position: { md: "sticky" },
				pr: { md: 2 },
				top: "100px",
				height: { md: "80vh" },
				overflow: { md: "auto" },
				borderBottom: { md: "solid thin" },
				borderColor: "divider",
			}}
		>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					height: isMobile === true ? "7rem" : "10rem",
					background: "divider",
					border: `solid thin ${theme.palette.divider}`,
					borderRadius: "10px",
				}}
			>
				<img
					src={account.displayPhoto}
					alt={account.username}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						borderRadius: "10px",
					}}
				/>
				{slug === user?.slug ? (
					<IconButton
						sx={{
							backgroundColor: "dark.main",
							color: "light.main",
							"&:hover": {
								backgroundColor: "dark.main",
								color: "light.main",
							},
							border: `solid thick ${theme.palette.background.default}`,
							position: "absolute",
							bottom: "-1.2rem",
							right: 0,
							m: 1,
						}}
					>
						<CameraAltOutlined />
					</IconButton>
				) : (
					<ShareButton
						placement="left"
						sx={{
							backgroundColor: "dark.main",
							color: "light.main",
							"&:hover": {
								backgroundColor: "dark.main",
								color: "light.main",
							},
							border: `solid thick ${theme.palette.background.default}`,
							position: "absolute",
							bottom: "-1.2rem",
							right: 0,
							m: 1,
						}}
					/>
				)}
			</Box>

			<Box sx={{ p: 1 }}>
				<Typography variant="body1" fontWeight="bold" sx={{ mb: 2 }}>
					{account.username}
				</Typography>

				<Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
					<EmailOutlined fontSize="small" sx={{ mr: 1 }} />
					{account.email}
				</Typography>

				<Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
					<LocationOnOutlined fontSize="small" sx={{ mr: 1 }} />
					{account.location}
				</Typography>

				<Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
					{account.category === "d" ? (
						<>
							<GroupOutlined fontSize="small" sx={{ mr: 1 }} />
							Dealerhip
						</>
					) : (
						<>
							<PersonOutlined fontSize="small" sx={{ mr: 1 }} />
							Individual
						</>
					)}
				</Typography>

				<Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
					<LocalPhoneOutlined fontSize="small" sx={{ mr: 1 }} />
					{account.phoneNumber}
				</Typography>

				<Typography
					variant="body2"
					sx={{ p: 2, backgroundColor: "divider", borderRadius: "10px" }}
				>
					{account.about}
				</Typography>
			</Box>
		</Grid>
	);
};

export default AccountOverview;
