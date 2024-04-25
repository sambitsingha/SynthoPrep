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
			<h1 className='line-1 uppercase hero-text text-7xl mx-20'>
				Choose your <span className='text-gradient'>path</span>
			</h1>
			<hr className='h-[2px] w-11/12 m-auto my-16 bg-gray-900' />
			<div className='flex flex-col'>
				<div className='flex justify-center items-start'>
					<h1 className='line-2 text-7xl hero-text uppercase'>free</h1>
					<div className='flex flex-col justify-center items-center'>
						<h1 className='line-2 text-4xl hero-text mb-5 uppercase text-center'>
							Perks
						</h1>
						<ul className='line-3 text-2xl w-2/3 text-center'>
							<li className='mb-5'>Get access to our AI model</li>
							<li>
								Get access to the Community where you can connect with fellow
								students and mentors
							</li>
						</ul>
					</div>
					<div>
						<p className='line-2 text-4xl hero-text uppercase'>Duration</p>
						<h1 className='line-3 text-2xl hero-text text-center mt-5'>
							Life Time
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catalog;
