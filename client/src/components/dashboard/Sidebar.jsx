import React from "react";
import image from "../../assets/Image.png";
const Sidebar = () => {
	return (
		<>
			<div
				className='h-screen w-1/6 pt-2'
				style={{ backgroundColor: "#1d1d1d" }}>
				<div className='flex justify-center items-center gap-4 py-3 bg-black mx-3 rounded-3xl'>
					<img src={image} alt='' className='w-10 h-10' />
					<div className='flex flex-col justify-center items-start font-semibold'>
						<p className='text-sm'>Student Overrview</p>
						<p className='text-sm'>info@student.id</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
