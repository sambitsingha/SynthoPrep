import React from "react";
import Hero from "./Hero";
import About from "./About";
import Catalog from "./Catalog";
import Footer from "./Footer";
import Navbar from "../Navbar";
const Home = () => {
	return (
		<>
			<section className='h-auto md:h-screen snap-center bg'>
				<Navbar />
				<Hero />
			</section>
			<section className='h-auto md:h-screen snap-center'>
				<About />
			</section>
			<section className='h-screen snap-center'>
				<Catalog />
			</section>
			<section className='snap-center'>
				<Footer />
			</section>
		</>
	);
};

export default Home;
