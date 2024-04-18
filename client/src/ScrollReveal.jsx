import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealComponent = () => {
	useEffect(() => {
		const sr = ScrollReveal();
		sr.reveal(".line-1", {
			reset: true,
			delay: 200,
			distance: "50px",
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".line-2", {
			reset: true,
			delay: 400,
			distance: "50px",
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".line-3", {
			reset: true,
			delay: 600,
			distance: "50px",
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".line-4", {
			reset: true,
			delay: 800,
			distance: "50px",
			origin: "top",
			duration: 2000,
		});
		sr.reveal(".button", {
			reset: true,
			delay: 800,
			distance: "50px",
			origin: "left",
			duration: 2000,
		});
	}, []);
};

export default ScrollRevealComponent;
