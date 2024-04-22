import React from "react";
import Hero from "./Hero";
import About from "./About";
import Catalog from "./Catalog";
const Home = () => {
	return (
		<>
			<section className='h-screen snap-center'>
				<Hero />
			</section>
			<section className='h-screen snap-center about'>
				<About />
			</section>
			<section className='h-screen snap-center'>
				<Catalog />
			</section>
		</>
	);
};

export default Home;
