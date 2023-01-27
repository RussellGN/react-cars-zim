const goBack = (pages) => {
	window.history.go(pages ? pages : -1);
};

export default goBack;
