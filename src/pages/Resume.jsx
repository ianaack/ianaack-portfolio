import React from "react";

const skills = [
	{ backend: "Node.js", frontend: "HTML", other: "Git" },
	{ backend: "Express.js", frontend: "CSS", other: "REST APIs" },
	{ backend: "MongoDB", frontend: "JavaScript", other: "npm" },
	{ backend: "GraphQL", frontend: "React", other: "Jest" },
	{ backend: "MySQL", frontend: "Bootstrap", other: "Webpack" },
	{
		backend: "NoSQL",
		frontend: "TailwindCSS",
		other: "Object-Oriented Programming (OOP)",
	},
	{
		backend: "IndexedDB",
		frontend: "ChakraUI",
		other: "Model-View-Controller (MVC)",
	},
	{
		backend: "LocalStorage",
		frontend: "jQuery",
		other: "Object-Relational Mapping (ORM)",
	},
	{
		backend: "",
		frontend: "jQueryUI",
		other: "Progressive Web Applications (PWA)",
	},
	{ backend: "", frontend: "Handlebars.js", other: "" },
];

function Resume() {
	return (
		<div className="page-section" id="resume">
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading text-uppercase fw-bolder">Resume</h2>
					<a
						href="https://drive.google.com/file/d/1Z_wi3Kiv220sfQ4uW1NVUL-8v8gsq__E/view?usp=sharing"
						download="Ian_Ackerman.pdf"
					>
						<div className="btn btn-secondary">Download My Full Resume</div>
					</a>
				</div>

				<table className="text-center mt-5 table table-responsive table-sm table-dark table-striped">
					<thead>
						<tr>
							<th scope="col">Backend Proficiencies</th>
							<th scope="col">Frontend Proficiencies</th>
							<th scope="col">Other Proficiencies</th>
						</tr>
					</thead>
					<tbody>
						{skills.map((skill, i) => (
							<tr data-index={i}>
								<td>{skill.backend}</td>
								<td>{skill.frontend}</td>
								<td>{skill.other}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Resume;
