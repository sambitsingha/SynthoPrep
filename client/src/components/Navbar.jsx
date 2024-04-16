import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
	return (
		<div className='flex items-center my-8 mx-10'>
			<img src={logo} alt='' className='w-1/4' />
			<div className='w-full'>
				<ul className='flex justify-center items-center gap-40'>
					<li>About Us</li>
					<li>Dashboard</li>
					<li>Contact</li>
				</ul>
			</div>
			<button>Try out</button>
		</div>
	);
};

export default Navbar;
