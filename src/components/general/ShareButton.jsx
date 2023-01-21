import { ShareOutlined } from "@mui/icons-material";
import { IconButton, Tooltip, Zoom } from "@mui/material";
import React, { useState } from "react";

const ShareButton = ({ placement, sx }) => {
	const [openShareTooltip, setOpenShareTooltip] = useState(false);

	const handleShareTooltipClose = () => {
		setOpenShareTooltip(false);
	};

	const handleShareTooltipOpen = () => {
		window.navigator.clipboard.writeText(window.location.href);
		setOpenShareTooltip(true);
		setTimeout(handleShareTooltipClose, 1500);
	};

	return (
		<Tooltip
			PopperProps={{
				disablePortal: true,
			}}
			onClose={handleShareTooltipClose}
			open={openShareTooltip}
			disableFocusListener
			disableHoverListener
			disableTouchListener
			TransitionComponent={Zoom}
			placement={placement}
			title="Copied Link!"
		>
			<IconButton sx={{ ml: "auto", ...sx }} onClick={handleShareTooltipOpen}>
				<ShareOutlined />
			</IconButton>
		</Tooltip>
	);
};

export default ShareButton;
