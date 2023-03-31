import React from "react";
import Project from "./components/Project";
import Header from "./components/Header";

function Portfolio() {
	return (
		<div>
			<Header />
			<h2 className="formHeader text-center">My Projects</h2>
			<div>
				<Project />
			</div>
		</div>
	);
}

export default Portfolio;
