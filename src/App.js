import React, { useState } from "react";
import "./App.css";

// import components
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
	const [sections] = useState([
		{
			name: "About Me",
		},
		{
			name: "Portfolio",
		},
		{
			name: "Contact",
		},
		{
			name: "Resume",
		},
	]);

	const [currentSection, setCurrentSection] = useState(sections[0].name);

	return (
		<div className="mainContainer">
			<Header
				sections={sections}
				currentSection={currentSection}
				setCurrentSection={setCurrentSection}
			></Header>
			<main className="contentWrapper">
				{(() => {
					if (currentSection === "About Me") {
						return (
							<div>
								<About></About>
							</div>
						);
					} else if (currentSection === "Portfolio") {
						return (
							<div>
								<Portfolio></Portfolio>
							</div>
						);
					} else if (currentSection === "Contact") {
						return (
							<div>
								<Contact></Contact>
							</div>
						);
					} else if (currentSection === "Resume") {
						return (
							<div>
								<Resume></Resume>
							</div>
						);
					}
				})()}
			</main>
					<Footer></Footer>
		</div>
	);
}

export default App;
