import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
const About = () => {
	return (
		<div className='bg-slate-950 text-white h-screen'>
			<button className='uppercase text-white m-5 md:m-10 text-xl'>
				Our Vision{" "}
				<FontAwesomeIcon icon={faArrowTrendDown} className='text-sky-600' />
			</button>
			<div className='mx-4 md:mx-20 md:px-10'>
				<h1 className='text-4xl md:text-8xl hero-text text-center md:text-left uppercase '>
					<span className='line-1'>Sharpen your edge with top</span>
					<span className='line-2'>-tier questions, turbocharge </span>
					<span className='line-3'>your prep with Our</span>{" "}
					<span className='line-4'>Advanced AI model.</span>
				</h1>
				<p className='text-[12px] md:text-lg text-center line-4 md:float-right mx-10 my-10 md:w-1/3'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
					assumenda voluptate fugiat eveniet dicta, aliquid beatae tenetur
					aperiam impedit porro tempora earum expedita repellat doloribus
					dolorum et eaque distinctio ex!
				</p>
			</div>
		</div>
	);
};

export default About;
