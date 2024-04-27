import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
	return (
		<div>
			<div className='md:mx-10 lg:mx-20'>
				<div className='hero-text flex flex-col'>
					<span className='line-1 pl-10 lg:pl-16 text-4xl md:text-6xl lg:text-8xl uppercase text-left'>
						Learn
					</span>
					<span className='line-2 uppercase text-7xl md:text-9xl lg:text-[16rem] text-center'>
						The <span className='text-gradient'>Future</span>
					</span>
					<span className='line-3 mb-2 pr-10 lg:pr-16 uppercase text-4xl md:text-6xl lg:text-8xl text-right'>
						way
					</span>
				</div>
				<p className='line-4 text-[12px] md:text-sm mx-10 lg:mx-20 w-1/2 lg:w-1/3 -mt-10 md:-mt-12 lg:-mt-20'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iusto
					odit vel molestias magni, unde ipsa laboriosam quos fugiat enim
					voluptas amet nihil, voluptatem repellat tempora minima sint
					architecto! Ducimus.
				</p>
				<button className='button gradient mx-10 lg:mx-16 uppercase bg-sky-500 my-5 py-2 px-5 lg:py-4 lg:px-10 rounded-3xl text-white text-sm lg:text-xl'>
					Try For Free <FontAwesomeIcon icon={faArrowTrendDown} />
				</button>
			</div>
		</div>
	);
};

export default Hero;
