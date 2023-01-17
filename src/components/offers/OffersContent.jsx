import { Pagination } from "@mui/material";
import Offer from "./Offer";

const OffersContent = ({ listings }) => {
	return (
		<>
			{listings?.map((listing) => (
				<Offer key={listing.id} listing={listing} />
			))}
			<Pagination
				count={10}
				variant="outlined"
				sx={{ display: "flex", justifyContent: "center" }}
				color="primary"
			/>
		</>
	);
};

export default OffersContent;
