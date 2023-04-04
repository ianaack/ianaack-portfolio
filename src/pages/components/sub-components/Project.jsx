import React from "react";
import projectImage1 from "../../../assets/projectImages/budget-tracker.png";
import projectImage2 from "../../../assets/projectImages/dev-tech-blog.png";
import projectImage3 from "../../../assets/projectImages/generatedMarkdown.png";
import projectImage4 from "../../../assets/projectImages/food-finder.png";
import projectImage5 from "../../../assets/projectImages/pet-stuff-plus.png";
import projectImage6 from "../../../assets/projectImages/reimagined-systems.png";
import projectImage7 from "../../../assets/projectImages/t-b_auto.png";

const projects = [
	{
		name: "T&B Automotive",
		image: projectImage7,
		description: "",
		deployedUrl: "https://tandbauto.ca",
		githubUrl: "https://github.com/ianaack/tbauto",
	},
	{
		name: "Pet Stuff Plus!",
		image: projectImage5,
		description: "",
		deployedUrl: "https://petstuffplus.herokuapp.com/",
		githubUrl: "https://github.com/project0301/paws",
	},
	{
		name: "Food Finder",
		image: projectImage4,
		description: "",
		deployedUrl: "https://ianaack.github.io/food-finder/",
		githubUrl: "https://github.com/ianaack/food-finder",
	},

	{
		name: "Reimagined Systems",
		image: projectImage6,
		description: "",
		deployedUrl: "https://reimagined-system.herokuapp.com/",
		githubUrl: "https://github.com/ianaack/reimagined-system",
	},
	{
		name: "Budget Tracker",
		image: projectImage1,
		description: "",
		deployedUrl: "https://ianaack-budget-tracker.herokuapp.com/",
		githubUrl: "https://github.com/ianaack/budget-tracker",
	},
	{
		name: "Dev Tech Blog",
		image: projectImage2,
		description: "",
		deployedUrl: "https://dev-tech-blog-ianaack.herokuapp.com/",
		githubUrl: "https://github.com/ianaack/dev-tech-blog",
	},
	{
		name: "README Generator",
		image: projectImage3,
		description: "",
		deployedUrl: "https://github.com/ianaack/pro-readme-generator",
		githubUrl: "https://github.com/ianaack/pro-readme-generator",
	},
];

function Project() {
	const projectCards = [];

	for (let i = 0; i < projects.length; i++) {
		const { name, image, deployedUrl, githubUrl } = projects[i];

		const card = (
			<div className="col-lg-3 col-md-6 col-sm-12 my-2" key={name}>
				<div className="card" id="project">
					<img className="card-img-top" src={image} alt={name} />
					<div className="card-body">
						<h5 className="card-title fw-bold text-center">{name}</h5>
						<div className="text-center">
							<div className="btn-group">
								<a href={deployedUrl} className="btn btn-primary">
									Deployed
								</a>
								<br />
								<a href={githubUrl} className="btn btn-secondary">
									Github
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
		projectCards.push(card);
	}
	return (
		<div className="row" id="project">
			{projectCards}
		</div>
	);
}

export default Project;
