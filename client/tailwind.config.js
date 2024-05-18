/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"404-bg": "url('./src/assets/404.jpg')",
			},
		},
	},
	plugins: [],
};
