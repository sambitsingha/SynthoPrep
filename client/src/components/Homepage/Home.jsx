import React from "react";
import Hero from "./Hero";
import About from "./About";
import Catalog from "./Catalog";
import Footer from "./Footer";
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
			<section className='h-screen snap-center'>
				<Footer />
			</section>
		</>
	);
};

export default Home;
