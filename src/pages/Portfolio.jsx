import React from "react";
import Project from "./components/sub-components/Project";

function Portfolio() {
	return (
		<div className="page-section" id="portfolio">
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading fw-bolder text-uppercase">
						My Projects
					</h2>
				</div>
				<Project />
			</div>
		</div>
	);
}

export default Portfolio;
