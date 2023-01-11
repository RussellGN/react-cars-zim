import Footer from "../components/general/Footer";
import CTA from "../components/homepage/CTA";
import Hero from "../components/homepage/Hero";
import MiniAbout from "../components/homepage/MiniAbout";
import Trending from "../components/homepage/Trending";
import AnimatedRoute from "../components/routes/AnimatedRoute";

const Home = () => {
	return (
		<AnimatedRoute>
			<Hero />
			<Trending />
			<MiniAbout />
			<CTA />
			<Footer />
		</AnimatedRoute>
	);
};

export default Home;
