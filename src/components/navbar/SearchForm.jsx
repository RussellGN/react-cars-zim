import { Box, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
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

		navigate(`/offers?query=${e.target.query.value}`);
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
			<SearchOutlined color="inherit" />

			<TextField
				size="small"
				ref={inputRef}
				name="query"
				type="search"
				label="Search..."
				sx={{
					ml: 1,
					"& .MuiInputBase-root": {
						borderRadius: "30px",
					},
				}}
			/>
		</Box>
	);
};

export default SearchForm;
