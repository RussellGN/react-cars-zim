import { Typography, Box, IconButton, useTheme } from "@mui/material";
import {
	InfoOutlined,
	LocalOfferOutlined,
	CallOutlined,
	DetailsOutlined,
	ImageOutlined,
	CheckOutlined,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const getIcon = (step) => {
	switch (step.replace(" ", "")) {
		case "Info":
			return <InfoOutlined />;
		case "Bid":
			return <LocalOfferOutlined />;
		case "Contact":
			return <CallOutlined />;
		case "Images":
			return <ImageOutlined />;
		case "Confirm":
			return <CheckOutlined />;
		default:
			if (step.includes("details")) return <DetailsOutlined />;
			else return <InfoOutlined />;
	}
};

const CustomStep = ({ label, index, length, activeStep, setActiveStep }) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				cursor: "pointer",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box
				sx={{
					position: "relative",
				}}
			>
				<IconButton
					onClick={() => setActiveStep(index)}
					size="small"
					sx={{
						border: "solid 1px",
						borderColor: "divider",
						background: activeStep >= index ? `${theme.gradient.main} !important` : "",
						color: activeStep >= index ? "white !important" : "",
					}}
				>
					{getIcon(label)}
				</IconButton>
				{index !== length - 1 ? (
					<CustomConnector length={length} active={activeStep > index} />
				) : (
					""
				)}
			</Box>

			<Typography
				variant="caption"
				onClick={() => setActiveStep(index)}
				sx={{ pointer: "cursor", mt: 1 }}
			>
				{label}
			</Typography>
		</Box>
	);
};

const CustomConnector = ({ active, length }) => {
	const { pathname } = useLocation();
	const theme = useTheme();
	return (
		<Box
			sx={{
				position: "absolute",
				left: "calc(100% + 3px)",
				top: "calc(50% - 0.25rem)",
				width: `${3 / length}rem`,
				height: "0.5rem",
				borderRadius: "1rem",
				background: active === true ? theme.gradient.main : theme.palette.divider,
			}}
		></Box>
	);
};

const CustomStepper = ({ steps, activeStep, setActiveStep, contents }) => {
	const length = steps.length;
	const multiplier = 1 / length;
	return (
		<>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: "calc(3rem + 6px)",
					gap: `calc(${3 * multiplier}rem + 6px)`,
					// gx: `calc(${6 / length}rem + 6px)`,
					justifyContent: "center",
					mb: 3,
				}}
			>
				{steps?.map((label, index) => {
					return (
						<CustomStep
							key={label + index}
							setActiveStep={setActiveStep}
							activeStep={activeStep}
							length={length}
							index={index}
							label={label}
						/>
					);
				})}
			</Box>

			<Box
				sx={{
					p: { xs: 0, sm: 3 },
					width: "100%",
					flexGrow: 1,
				}}
			>
				{contents}
			</Box>
		</>
	);
};

export default CustomStepper;
