import { Box, styled } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const SearchInput = styled("input")(({ theme }) => ({
	background: "transparent",
	border: "none",
	outline: "none",
	cursor: "pointer",
	transition: "all 0.2s",
	fontSize: "inherit",
	padding: `0 ${theme.spacing(1.5)}`,
	color: "inherit",
}));

const SearchForm = ({ show, setOpenDrawer }) => {
	const inputRef = useRef();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		if (show) {
			setOpenDrawer(false);
		}
		e.preventDefault();

		navigate(`/offers?q=${e.target.search.value}`);
		inputRef.current.blur();
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				display: { xs: show ? "flex" : "none", md: "flex" },
				alignItems: "center",
			}}
		>
			<Search color="inherit" />

			<SearchInput
				ref={inputRef}
				name="search"
				type="search"
				placeholder="Click here to search..."
			/>
			{/* <Input
				name="search"
				type="search"
				placeholder="Search..."
				sx={{ color: "inherit", ml: 2 }}
			/> */}
		</Box>
	);
};

export default SearchForm;
