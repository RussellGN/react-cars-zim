import { Box, Input } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const SearchForm = ({ show, setOpenDrawer }) => {
	const inputRef = useRef();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		if (show) {
			setOpenDrawer(false);
		}
		e.preventDefault();
		navigate(`/offers?q=${inputRef.current.querySelector("input").value}`);
		inputRef.current.querySelector("input").blur();
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

			<Input
				ref={inputRef}
				type="search"
				placeholder="Search..."
				sx={{ color: "inherit", ml: 2 }}
			/>
		</Box>
	);
};

export default SearchForm;
