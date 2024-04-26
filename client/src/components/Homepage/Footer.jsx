import React from "react";
import logo from "../../assets/logo-white.png";
const Footer = () => {
	return (
		<div className='bg-gray-950'>
			<div className='bg-gray-200'>
				<h1 className='h-12 flex justify-center items-center m-auto font-semibold text-lg'>
					SynthoPrep Platform: SynthoPrep - Crafting solutions
				</h1>
			</div>
			<div className='p-20 text-white flex justify-around items-start'>
				<img src={logo} alt='' className='w-60' />
				<div>
					<h1 className='uppercase hero-text text-4xl mb-5'>Navigation</h1>
					<ul>
						<a href=''>
							<li>Home</li>
						</a>
						<a href=''>
							<li>Dashboard</li>
						</a>
						<a href=''>
							<li>Login</li>
						</a>
						<a href=''>
							<li>Contact Us</li>
						</a>
					</ul>
				</div>
				<div>
					<h1 className='uppercase hero-text text-4xl mb-5'>Contact</h1>
					<ul>
						<li>synthoprep@gmail.com</li>
						<li>+91 9875358900</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
