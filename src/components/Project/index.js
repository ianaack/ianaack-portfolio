import React from "react";
import projectImage1 from "../../assets/projectImages/budget-tracker.png";
import projectImage2 from "../../assets/projectImages/dev-tech-blog.png";
import projectImage3 from "../../assets/projectImages/food-festival.png";
import projectImage4 from "../../assets/projectImages/food-finder.png";
import projectImage5 from "../../assets/projectImages/photo-port.png";
import projectImage6 from "../../assets/projectImages/reimagined-systems.png";

function Project() {
	const projects = [
		{
			name: "Budget Tracker",
			image: projectImage1,
			deployedUrl: "https://ianaack-budget-tracker.herokuapp.com/",
			githubUrl: "https://github.com/ianaack/budget-tracker",
		},
		{
			name: "Dev Tech Blog",
			image: projectImage2,
			deployedUrl: "https://dev-tech-blog-ianaack.herokuapp.com/",
			githubUrl: "https://github.com/ianaack/dev-tech-blog",
		},
		{
			name: "Food Festival",
			image: projectImage3,
			deployedUrl: "https://ianaack.github.io/food-festival/",
			githubUrl: "https://github.com/ianaack/food-festival",
		},
		{
			name: "Food Finder",
			image: projectImage4,
			deployedUrl: "https://ianaack.github.io/food-finder/",
			githubUrl: "https://github.com/ianaack/food-finder",
		},
		{
			name: "Photo Portfolio",
			image: projectImage5,
			deployedUrl: "https://ianaack.github.io/photo-port/",
			githubUrl: "https://github.com/ianaack/photo-port",
		},
		{
			name: "Reimagined Systems",
			image: projectImage6,
			deployedUrl: "https://reimagined-system.herokuapp.com/",
			githubUrl: "https://github.com/ianaack/reimagined-system",
		},
	];

	return (
		<div className="projects">
			{projects.map((project) => {
				return (
					<div key={project.name} className="projectCard container">
						<h2 className="projectTitle">{project.name}</h2>
						<div className="card text-center">
							<img
								className="projectImage mx-auto my-2 d-block"
								src={project.image}
								alt={project.name}
							></img>
							<div className="card-body">
								<a href={project.deployedUrl} className="projectLink">
									Deployed Application
								</a>
								<br />
								<a href={project.githubUrl} className="projectLink">
									Github Repository
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Project;
