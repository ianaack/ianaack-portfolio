// import packages
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

// import pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

// import components
import Footer from "./pages/components/Footer";
import Navigation from "./pages/components/Navigation";

// import styling
import "./App.css";
import Homepage from "./pages/HomePage";

function App() {
	return (
		<main style={{ overflow: "hidden" }}>
			<Router>
				<Analytics />
				<Navigation />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about-me" element={<About />} />
					<Route path="/contact-me" element={<Contact />} />
					<Route path="/projects" element={<Portfolio />} />
					<Route path="/resume" element={<Resume />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}

export default App;
