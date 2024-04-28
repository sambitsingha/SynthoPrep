import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
	return (
		<div>
			<div className='md:mx-10 lg:mx-20'>
				<div className='hero-text flex flex-col'>
					<span className='line-1 sm:pl-10 lg:pl-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-center sm:text-left'>
						Learn
					</span>
					<span className='line-2 uppercase text-8xl lg:text-[14rem] text-center'>
						The <span className='text-gradient'>Future</span>
					</span>
					<span className='line-3 mb-2 sm:pr-10 lg:pr-16 uppercase text-5xl md:text-6xl lg:text-8xl text-center sm:text-right'>
						way
					</span>
				</div>
				<p className='line-4 text-[12px] md:text-sm mx-10 lg:mx-20 md:w-1/3  md:-mt-12 lg:-mt-20 text-center md:text-left'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iusto
					odit vel molestias magni, unde ipsa laboriosam quos fugiat enim
					voluptas amet nihil, voluptatem repellat tempora minima sint
					architecto! Ducimus.
				</p>
				<div className='flex justify-center items-center md:justify-start'>
					<button className='button gradient mx-10 lg:mx-16 uppercase bg-sky-500 my-5 py-2 px-5 lg:py-4 lg:px-10 rounded-3xl text-white text-sm lg:text-xl'>
						Try For Free <FontAwesomeIcon icon={faArrowTrendDown} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
