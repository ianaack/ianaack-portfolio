import React from "react";

// import components
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
	return (
		<>
			<nav>
				<Header />
				<Navigation />
			</nav>
			<main>
				<About />
				<Contact />
				<Portfolio />
				<Resume />
				<Project />
			</main>
			<Footer />
		</>
	);
}

export default App;
