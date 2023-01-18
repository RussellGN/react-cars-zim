import React from "react";
import { motion } from "framer-motion";

const AnimatedRoute = (props) => {
	return (
		<motion.div
			{...props}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transitionDuration: "0.1s" }}
			exit={{ opacity: 0 }}
		/>
	);
};

export default AnimatedRoute;
