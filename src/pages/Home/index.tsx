import React from "react";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Aboutme from "../Aboutme/Aboutme";

const Home: React.FC = () => {
	return (
		<>
			<Hero />  
			<Aboutme></Aboutme>
			<Experiences />
		</>
	);
};

export default Home;
