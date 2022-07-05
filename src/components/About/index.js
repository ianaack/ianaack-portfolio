import React from "react";
import image from "../../assets/portrait.jpg";

function About() {
	return (
		<div className="container">
			<h2 className="formHeader text-center">About Me</h2>
			<div className="m-2">
				<img
					className="portrait my-5 mx-auto d-block"
					alt="Ian Ackerman"
					src={image}
				></img>
			</div>

			<p className="text-center">
				<h2>Hey, I'm Ian!</h2>
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
