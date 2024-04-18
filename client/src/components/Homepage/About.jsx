import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
const About = () => {
	return (
		<div className='bg-slate-950 text-white h-screen'>
			<button className='uppercase text-white m-10 text-xl'>
				Our Vision{" "}
				<FontAwesomeIcon icon={faArrowTrendDown} className='text-sky-600' />
			</button>
			<div className='mx-20 px-10'>
				<h1 className=' text-8xl hero-text uppercase'>
					<span>Sharpen your edge with top</span>
					<span>-tier questions, turbocharge </span>
					<span>your prep with Our</span> Advanced AI model.
				</h1>
			</div>
		</div>
	);
};

export default About;
