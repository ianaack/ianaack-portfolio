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
				I am a Full-stack Web Developer that can leverage a film and television technical background to develop creative and engaging web content. 
        <br />
        <br />
        I have earned a certificate in full-stack web development from the University of Toronto with knowledge of the MERN stack of technologies. I have a solid understanding of various frameworks and technologies that support the MERN stack, as well as various programming methods such as building Progressive Web Applications, Object-Oriented Programming, Model-View-Controller, and Object-Relational Mapping.
				<br />
				<br />
        I am known as a creative problem solver that is passionate about developing apps, with excellent communication skills and a high attention to detail. With each project, I aim to learn and expand my knowledge of technologies and how best to leverage them for customer success.
			</p>
		</div>
	);
}

export default About;
