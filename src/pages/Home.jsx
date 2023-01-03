import Hero from "../components/homepage/Hero";
// import Overview from "../components/homepage/Overview";
import AnimatedRoute from "../components/routes/AnimatedRoute";

const Home = () => {
	return (
		<AnimatedRoute>
			<Hero />
			{/* <div style={{ paddingTop: "5rem" }}>
			<Overview />
				3. good offers <br />
				4. get right into it (browse more) <br />
				5. map of offers <br />
				6. create account <br />
				7. call to action <br />
				8. footer
			</div> */}
		</AnimatedRoute>
	);
};

export default Home;
