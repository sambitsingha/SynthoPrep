import React from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
	return (
		<>
			<div className='bg-black h-screen text-white'>
				<Sidebar />
			</div>
		</>
	);
};

export default DashboardLayout;
