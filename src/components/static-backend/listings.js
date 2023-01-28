import corrola1 from "./images/corrola1.jpg";
import corrola2 from "./images/corrola2.jpg";
import corrola3 from "./images/corrola3.jpg";
import hillux4 from "./images/corrola3.jpg";
import hillux1 from "./images/hillux1.jpeg";
import hillux2 from "./images/hillux2.jpg";
import hillux3 from "./images/hillux3.jpeg";
import porsche from "./images/porsche.JPG";
import rangeRover from "./images/range-rover.JPEG";
import accounts from "./accounts";

const listings = [
	{
		id: 1,
		slug: "toyota-hillux-legend-45-1",
		name: "Toyota Hillux legend 45",
		mileage: 43000,
		price: 67000,
		views: 321,
		location: "Harare",
		date: "2023-01-17T22:30:02",
		details:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam totam, ea alias voluptatibus quia aliquid soluta odit magnam unde consequuntur?",
		owner: accounts[0],
		images: [hillux1, hillux2, hillux3, hillux4],
	},
	{
		id: 2,
		slug: "porsche-carrera-4s-2",
		name: "Porsche Carrera 4S",
		mileage: 300,
		price: 300000,
		views: 310,
		location: "Victoria Falls",
		date: "2022-12-30T12:10:02",
		details:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam totam, ea alias voluptatibus quia aliquid soluta odit magnam unde consequuntur?",
		owner: accounts[1],
		images: [porsche],
	},
	{
		id: 3,
		name: "Toyota Corrola Quest",
		slug: "toyota-corrola-quest-3",
		mileage: 5000,
		price: 20000,
		views: 1007,
		location: "Bulawayo",
		date: "2023-01-25T08:00:00",
		details:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam totam, ea alias voluptatibus quia aliquid soluta odit magnam unde consequuntur?",
		owner: accounts[0],
		images: [corrola1, corrola2, corrola3],
	},
	{
		id: 4,
		name: "Range Rover Sport",
		slug: "range-rover-sport-4",
		mileage: 100,
		price: 200000,
		views: 11000,
		location: "Harare",
		date: "2023-01-28T11:34:00",
		details:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam totam, ea alias voluptatibus quia aliquid soluta odit magnam unde consequuntur?",
		owner: accounts[1],
		images: [rangeRover],
	},
];

export default listings;
