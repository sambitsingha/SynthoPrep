import image from "../assets/astro.png";
const Custom404 = () => {
	return (
		<>
			<div className='flex items-center justify-center h-screen w-full bg-404-bg bg-cover text-white md:flex-row flex-col'>
				<div className='flex justify-center items-start flex-col h-full'>
					<h1 className='text-5xl font-semibold my-10'>
						Oops!! You ran out of Oxygen.
					</h1>
					<p className='text-xl text-gray-300 font-semibold'>
						The page you are looking for is now beyond our reach.
					</p>
					<p className='text-xl text-gray-300 font-semibold'>
						Lets get you ..{" "}
					</p>
					<h1 className='my-10 text-xl font-semibold'>Back Home in .. </h1>
				</div>
				<div>
					<img
						src={image}
						alt=''
						className='absolute md:top-16 md:right-60 md:w-60 w-40'
					/>
					<h1 className=' text-[10rem] md:text-[17rem] font-bold'>404</h1>
				</div>
			</div>
		</>
	);
};

export default Custom404;
