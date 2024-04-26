import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex items-center justify-around p-3 gap-32'>
			<img src={logo} alt='' className='md:w-80 w-40' />
			<div className='relative sm:hidden md:hidden block'>
				<button onClick={() => setIsOpen(!isOpen)}>
					<FontAwesomeIcon icon={faBars} />
				</button>
				<div
					className={`absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl ${
						isOpen ? "block" : "hidden"
					}`}>
					<a
						href='#about'
						className='transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white'>
						About Us
					</a>
					<a
						href=''
						className='transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white'>
						Dashboard
					</a>
					<a
						href=''
						className='transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white'>
						Contact
					</a>
				</div>
			</div>
			<div className='hidden md:flex justify-center items-center gap-20 text-xl'>
				<a href='' className='text-normal text-gray-900 hover:text-purple-500'>
					About Us
				</a>
				<a href='' className='text-normal text-gray-900 hover:text-purple-500'>
					Dashboard
				</a>
				<a href='' className='text-normal text-gray-900 hover:text-purple-500'>
					Contact
				</a>
			</div>
			<div className='hidden md:flex justify-center items-center'>
				<button className='w-20 font-bold text-xl'>Try out</button>
				<FontAwesomeIcon icon={faArrowTrendDown} />
			</div>
		</div>
	);
};

export default Navbar;
