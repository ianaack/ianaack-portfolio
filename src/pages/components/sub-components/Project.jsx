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
		description: "A React webpage built for a local auto repair shop.",
		deployedUrl: "https://tandbauto.ca",
		githubUrl: "https://github.com/ianaack/tbauto",
		technologies: ["React", "Bootstrap", "JavaScript", "JSX", "CSS"],
	},
	{
		name: "Pet Stuff Plus!",
		image: projectImage5,
		description: "An e-commerce site for pet owners.",
		// deployedUrl: "https://petstuffplus.herokuapp.com/",
		githubUrl: "https://github.com/project0301/paws",
		technologies: [
			"React",
			"Chakra UI",
			"Apollo Client",
			"GraphQL",
			"JSON Web Token",
			"JWT-decode",
			"MongoDB",
			"Mongoose",
			"Express.js",
			"Node.js",
			"bcrypt",
			"JavaScript",
			"HTML",
			"CSS",
		],
	},
	{
		name: "Food Finder",
		image: projectImage4,
		description: "Find somewhere to eat within walking distance.",
		// deployedUrl: "https://ianaack.github.io/food-finder/",
		githubUrl: "https://github.com/ianaack/food-finder",
		technologies: [
			"Yelp Fusion API",
			"Google Geocoding API",
			"Google Directions API",
			"JavaScript",
			"HTML",
			"Tailwind CSS",
		],
	},
	{
		name: "Reimagined Systems",
		image: projectImage6,
		description: "An inventory management system for a pizza shop.",
		// deployedUrl: "https://reimagined-system.herokuapp.com/",
		githubUrl: "https://github.com/ianaack/reimagined-system",
		technologies: [
			"MongoDB",
			"Express.js",
			"Node.js",
			"MySQL",
			"Sequelize ORM",
			"bcrypt",
			"chart.js",
			"JavaScript",
			"HTML",
			"Tailwind CSS",
		],
	},
	{
		name: "Budget Tracker",
		image: projectImage1,
		description: "A PWA budget app for personal use.",
		// deployedUrl: "https://ianaack-budget-tracker.herokuapp.com/",
		githubUrl: "https://github.com/ianaack/budget-tracker",
		technologies: [
			"MongoDB",
			"Mongoose",
			"Express.js",
			"Node.js",
			"PWA",
			"JavaScript",
			"HTML",
			"Tailwind CSS",
		],
	},
	{
		name: "Dev Tech Blog",
		image: projectImage2,
		description: "A Message board for tech discussions.",
		// deployedUrl: "https://dev-tech-blog-ianaack.herokuapp.com/",
		githubUrl: "https://github.com/ianaack/dev-tech-blog",
		technologies: [
			"MySQL",
			"Sequelize ORM",
			"Express.js",
			"Node.js",
			"dotenv",
			"bcrypt",
			"JavaScript",
			"Handlebars.js",
		],
	},
	{
		name: "README Generator",
		image: projectImage3,
		description:
			"A Node.js CLI application designed for developers to create a professional README.md based on a few prompts.",
		// deployedUrl: "https://github.com/ianaack/pro-readme-generator",
		githubUrl: "https://github.com/ianaack/pro-readme-generator",
		technologies: ["Node.js", "File System", "Inquirer", "JavaScript"],
	},
];

function Project() {
	const projectCards = [];

	for (let i = 0; i < projects.length; i++) {
		const { name, image, description, deployedUrl, githubUrl } = projects[i];

		const card = (
			<div className="col-lg-3 col-md-6 col-sm-12 my-2" key={name}>
				<div className="card" id="project">
					<img className="card-img-top" src={image} alt={name} />
					<div className="card-body">
						<h5 className="card-title fw-bold text-center">{name}</h5>
						<p className="card-text text-center">{description}</p>
					</div>
					<div className="card-body">
						<div className="text-center">
							<div className="d-flex justify-content-center">
								{deployedUrl ? (
									<a href={deployedUrl} className="btn btn-primary mx-2">
										View Deployment
									</a>
								) : null}
								<a href={githubUrl} className="btn btn-secondary">
									View Code
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
