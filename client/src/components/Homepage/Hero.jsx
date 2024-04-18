import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar";
const Hero = () => {
	return (
		<div className='m-8 p-2 rounded-3xl hero'>
			<Navbar />
			<div className='mx-20'>
				<div className='hero flex flex-col'>
					<span className='-mb-16 pl-3 text-8xl uppercase text-left'>
						Learn
					</span>
					<span className='-mb-16 uppercase text-[16rem] text-center'>
						The <span className='text-gradient'>Future</span>
					</span>
					<span className=' pr-4 uppercase text-8xl text-right'>way</span>
				</div>
				<p className='mx-12 w-1/3 -mt-20'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iusto
					odit vel molestias magni, unde ipsa laboriosam quos fugiat enim
					voluptas amet nihil, voluptatem repellat tempora minima sint
					architecto! Ducimus.
				</p>
				<button className='gradient mx-16 uppercase bg-sky-500 my-5 py-4 px-10 rounded-xl text-white'>
					Try For Free <FontAwesomeIcon icon={faArrowTrendDown} />
				</button>
			</div>
		</div>
	);
};

export default Hero;
