import React from "react";

function Resume() {
	return (
		<div className="resume">
			<h2 className="formHeader text-center">Resume</h2>
			<a
				className="resumeLink mx-auto"
				href="../../assets/Ian Ackerman_Resume.pdf"
				download="Ian Ackerman.pdf"
			>
				Download My Full Resume
			</a>
			<div className="resumeWrapper text-center my-2">
				<div>
					<h3>Backend Proficiencies</h3>
					<ul>
						<li>Node.js</li>
						<li>Express</li>
						<li>MongoDB</li>
						<li>MySQL</li>
						<li>NoSQL</li>
						<li>IndexedDB</li>
						<li>LocalStorage</li>
						<li>Progressive Web Applications (PWA)</li>
						<li>Object-Oriented Programming (OOP)</li>
						<li>Model-View-Controller (MVC)</li>
						<li>Object-Relational Mapping (ORM)</li>
					</ul>
				</div>
				<div>
					<h3>Frontend Proficiencies</h3>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Bootstrap</li>
						<li>Tailwind CSS</li>
						<li>jQuery</li>
						<li>jQueryUI</li>
						<li>Handlebars.js</li>
					</ul>
				</div>
				<div>
					<h3>Development Tool Proficiencies</h3>
					<ul>
						<li>Git</li>
						<li>npm</li>
						<li>Jest</li>
						<li>Webpack</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Resume;
