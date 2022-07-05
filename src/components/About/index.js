import React from "react";
import image from "../../assets/portrait.jpg";

function About() {
	return (
		<div className="container">
			<div className="m-2">
				<img className="portrait" alt="Ian Ackerman" src={image}></img>
			</div>

			<p className="text-center">
				Hey, I'm Ian!
				<br />
				<br />
				I am a Full-stack Web Developer that can leverage a film and television
				technical background to develop creative and engaging web content. I
				have earned a certificate in full-stack development from the University
				of Toronto with back-end technical skills in JavaScript, jQuery, MySQL,
				node.js and various node packages. I have front-end technical knowledge
				of React, CSS, HTML, and responsive web design.
				<br />
				<br />I am known as a creative problem solver that is passionate about
				developing apps, with excellent communication skills and a high
				attention to detail. With each project, I aim to learn and expand my
				knowledge of technologies and how best to leverage them for customer
				success.
			</p>
		</div>
	);
}

export default About;
