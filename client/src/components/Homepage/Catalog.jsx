import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
const Catalog = () => {
	return (
		<div className='h-screen bg'>
			<button className='uppercase font-semibold m-10 text-xl px-10'>
				Catalog{" "}
				<FontAwesomeIcon icon={faArrowTrendDown} className='text-sky-600' />
			</button>
			<h1 className='uppercase hero-text text-7xl mx-20'>
				Choose your <span className='text-gradient'>path</span>
			</h1>
			<hr className='h-[2px] w-11/12 m-auto my-16 bg-gray-900' />
			<div className='fleex flex-col justify-center items-center'>
				<div className='flex justify-around items-start'>
					<h1 className='text-7xl hero-text uppercase'>free</h1>
					<div>
						<h1 className='text-4xl hero-text mb-5 uppercase text-center'>
							Perks
						</h1>
						<ul>
							<li>Get access to AI model</li>
							<li>Free access to all quizzes</li>
							<li>Free access to all projects</li>
						</ul>
					</div>
					<div>
						<p className='text-4xl hero-text uppercase'>Duration</p>
						<h1 className='text-2xl hero-text text-center mt-5'>Life Time</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catalog;
