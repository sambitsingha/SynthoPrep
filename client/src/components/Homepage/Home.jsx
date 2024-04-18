import React from "react";
import Hero from "./Hero";
import About from "./About";
const Home = () => {
	return (
		<>
			<section className='h-screen snap-center'>
				<Hero />
			</section>
			<section className='h-screen snap-center'>
				<About />
			</section>
		</>
	);
};

export default Home;
