import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
const Login = () => {
	return (
		<div className='w-full flex flex-col-reverse lg:flex-row justify-center items-center'>
			<div className='w-full lg:w-1/2'>
				<img
					src='https://rtrfm.com.au/wp-content/uploads/2021/04/Essential-Books.jpg'
					alt=''
					className='w-full lg:h-screen'
				/>
			</div>
			<div className='bg-black h-screen w-full lg:w-1/2 flex justify-center items-center font-semibold text-white flex-col gap-4 px-10 md:px-24 lg:px-28'>
				<h1 className='text-4xl text-center '>Log in</h1>
				<p>Sign in to track your progress</p>
				<form
					action=''
					className='flex flex-col w-full gap-2 mt-5 justify-center '>
					<label>Enter your student email</label>
					<input
						type='email'
						placeholder='email@gmail.com'
						className='w-full flex items-center justify-center rounded-3xl px-5 h-10 bg-gray-800/80 border-none outline-none'
					/>
					<label>Enter your student password</label>
					<input
						type='email'
						placeholder='password'
						className='w-full flex items-center justify-center rounded-3xl px-5 h-10 bg-gray-800/80 border-none outline-none'
					/>
				</form>
				<a href=''>
					<h1>Forget your password ?</h1>
				</a>
				<button className='bg-red-500 w-full h-10 rounded-3xl border-none outline-none duration-300 hover:bg-red-900'>
					Sign In
				</button>
				<div className='flex justify-center items-center gap-2'>
					<hr className='bg-white h-[1px] w-40' />
					<p>Or</p>
					<hr className='bg-white h-[1px] w-40' />
				</div>
				<div className='flex gap-5'>
					<button className='bg-red-500 w-full h-10 rounded-3xl px-7 duration-300 hover:bg-red-900'>
						<FontAwesomeIcon icon={faGoogle} />
					</button>
					<button className='bg-red-500 w-full h-10 rounded-3xl px-7 duration-300 hover:bg-red-900'>
						<FontAwesomeIcon icon={faMicrosoft} />
					</button>
				</div>
				<p>Create a new account. Sign up here</p>
			</div>
		</div>
	);
};

export default Login;
