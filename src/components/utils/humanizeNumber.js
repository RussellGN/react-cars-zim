const humanizeNumber = (number, form) => {
	if (number < 1000) {
		return number;
	} else if (form === "comma-seperated") {
		return number.toLocaleString();
	} else if (form === "shortened") {
		let newNumber = number.toLocaleString();
		let firstChars = newNumber.slice(0, newNumber.search(","));
		let secondChars = newNumber.slice(newNumber.search(",") + 1, newNumber.search(",") + 2);

		switch (newNumber.split(",")?.length - 1) {
			case 1:
				return firstChars + "." + secondChars + "k";
			case 2:
				return firstChars + "." + secondChars + "m";
			case 3:
				return firstChars + "." + secondChars + "b";
			case 4:
				return firstChars + "." + secondChars + "t";
			case 4:
				return firstChars + "." + secondChars + "t";
			default:
				return number;
		}

		// return "2.3k";
	}
};
export default humanizeNumber;
