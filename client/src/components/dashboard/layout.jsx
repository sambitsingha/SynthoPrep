import React from "react";
import Sidebar from "./Sidebar";
import image from "../../assets/Image.png";
const DashboardLayout = () => {
	return (
		<div className='bg-black h-screen text-white flex'>
			<Sidebar />
			<div className='mx-8 my-6 flex justify-around w-1/4'>
				<img src={image} alt='' className='w-20 h-20' />
				<div>
					<h1 className='text-3xl font-semibold'>Student Profile</h1>
					<p className='font-semibold'>Username</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
