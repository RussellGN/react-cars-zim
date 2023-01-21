export const humanizeDate = (dateItem) => {
	const date = new Date(dateItem);
	const seconds = (new Date() - date) / 1000;

	// determine if they add up to hours, days, weeks, months
	let label;
	const timeframes = {
		min: 60,
		hour: 60,
		day: 24,
		week: 7,
		month: 30,
	};

	let prevTimeframe = ["seconds", seconds];

	for (let timeframe in timeframes) {
		const timeframeUnitsPassed = Math.floor(prevTimeframe[1] / timeframes[timeframe]);

		if (timeframe === "week" && prevTimeframe[1] / 28 > 1) return date.toLocaleDateString();

		if (timeframeUnitsPassed === 0) {
			if (prevTimeframe[0] === "seconds") {
				label = "just now";
			} else if (prevTimeframe[1] === 1) {
				label = `${prevTimeframe[1]} ${prevTimeframe[0]} ago`;
			} else {
				label = `${prevTimeframe[1]} ${prevTimeframe[0]}s ago`;
			}
			break;
		} else {
			prevTimeframe = [timeframe, timeframeUnitsPassed];
		}
	}

	return label;
};
