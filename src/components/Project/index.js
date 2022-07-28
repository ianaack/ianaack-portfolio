import React from "react";
import projectImage1 from "../../assets/projectImages/budget-tracker.png";
import projectImage2 from "../../assets/projectImages/dev-tech-blog.png";
import projectImage3 from "../../assets/projectImages/food-festival.png";
import projectImage4 from "../../assets/projectImages/food-finder.png";
import projectImage5 from "../../assets/projectImages/pet-stuff-plus.png";
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
			name: "Pet Stuff Plus!",
			image: projectImage5,
			deployedUrl: "https://petstuffplus.herokuapp.com/",
			githubUrl: "https://github.com/project0301/paws",
		},
		{
			name: "Reimagined Systems",
			image: projectImage6,
			deployedUrl: "https://reimagined-system.herokuapp.com/",
			githubUrl: "https://github.com/ianaack/reimagined-system",
		},
	];

	return (
		<div className="container">
			<div className="row g-3">
				{projects.map((project) => {
					return (
						<div key={project.name} className="col-12 col-md-6 col-lg-4 mb-3">
							<div className="card">
								<img
									src={project.image}
									alt={project.name}
									className="card-img-top"
								></img>
								<div className="card-body">
									<h5 className="card-title text-center projectTitle">
										{project.name}
									</h5>
									<a
										target="_blank"
										rel="noreferrer"
										href={project.deployedUrl}
										className="card-text projectLink"
									>
										Deployed Application
									</a>
									<br />
									<a
										target="_blank"
										rel="noreferrer"
										href={project.githubUrl}
										className="card-text projectLink"
									>
										Github Repository
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Project;
