import React from "react";
import logo from "../../logo.svg";
import NavItem from "./sub-components/NavItem";

const Navigation = () => {
	return (
		<div className="container">
			<div className="mx-3">
				<nav className="navbar navbar-expand-lg">
					<a className="navbar-brand" href="/">
						<img src={logo} alt="Ian Ackerman" style={{ height: "50px" }} />
					</a>
					<button
						className="navbar-toggler btn btn-secondary"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle Navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<NavItem />
				</nav>
			</div>
		</div>
	);
};

export default Navigation;
