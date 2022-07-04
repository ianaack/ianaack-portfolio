import React from "react";
import image from "../../assets/portrait.jpg";

function About() {
	return (
		<div className="">
			<div className="">
				<img className="" alt="Ian Ackerman" src={image}></img>
			</div>

			<div className="">
				<div className="">
					<h1>Ian Ackerman</h1>
				</div>
			</div>

			<div className="">
				<p>
					Hey, I'm Ian! I am a Full-stack Web Developer that can leverage a film
					and television technical background to develop creative and engaging
					web content. I have earned a certificate in full-stack development
					from the University of Toronto with back-end technical skills in
					JavaScript, jQuery, MySQL, node.js and various node packages. I have
					front-end technical knowledge of React, CSS, HTML, and responsive web
					design. I am known as a creative problem solver that is passionate
					about developing apps, with excellent communication skills and a high
					attention to detail. With each project, I aim to learn and expand my
					knowledge of technologies and how best to leverage them for customer
					success.
				</p>
			</div>
		</div>
	);
}

export default About;
