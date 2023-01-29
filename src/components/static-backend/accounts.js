import displayPhoto1 from "./images/hillux1.jpeg";
import displayPhoto2 from "./images/display-photo.jpg";

const accounts = [
	{
		id: 1,
		username: "KB Motors",
		slug: "kb-motors-1",
		email: "info@kbmotors.co.zw",
		category: "d",
		location: "Bulawayo",
		phoneNumber: "+263 775411141",
		about: "The best car dealership in Bulawayo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, dolore!",
		displayPhoto: displayPhoto1,
		dateAdded: "2022-11-17T22:30:02",
		savedListings: [2, 4],
	},
	{
		id: 2,
		username: "General Dealer Harare",
		slug: "general-dealer-harare-2",
		email: "customercare@gdharare.com",
		category: "d",
		location: "Harare",
		phoneNumber: "+263 775438940",
		about: "The best car dealership in Harare. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, dolore!",
		displayPhoto: displayPhoto2,
		dateAdded: "2023-01-03T22:30:02",
		savedListings: [1, 3],
	},
];

export default accounts;
