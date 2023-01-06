import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import Offers from "../../pages/Offers";
import Account from "../../pages/Account";
import { AnimatePresence } from "/node_modules/framer-motion/dist/framer-motion";
import ViewOffer from "../../pages/ViewOffer";
import Enquire from "../../pages/Enquire";
import Settings from "../../pages/Settings";
import Notifications from "../../pages/Notifications";
import NotFound from "../../pages/NotFound";
import NewListing from "../../pages/NewListing";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import AccountDetails from "../../pages/AccountDetails";

const AnimatedRoutes = () => {
	let location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/RussellGN.github.io/react-cars-zim" element={<Home />} />
				<Route path="/react-cars-zim" element={<Home />} />
				<Route path="/offers" element={<Offers />} />
				<Route path="/view-offer/:slug" element={<ViewOffer />} />
				<Route path="/enquire-offer/:slug" element={<Enquire />} />
				<Route path="/new-listing" element={<NewListing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/account" element={<Account />} />
				<Route path="/account-details" element={<AccountDetails />} />
				<Route
					path="/edit-account-details"
					element={<AccountDetails authenticated={true} />}
				/>
				<Route path="/notifications" element={<Notifications />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
