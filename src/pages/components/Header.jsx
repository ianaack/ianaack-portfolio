import React from "react";

const Header = () => {
	return (
		<header className="masthead">
			<div className="container">
				<div className="masthead-heading text-uppercase">Ian Ackerman</div>
				<div className="masthead-subheading">Full Stack Web Developer</div>
				<a
					href="/contact-me"
					className="btn btn-xl btn-primary text-uppercase"
				>
					Contact Me
				</a>
			</div>
		</header>
	);
};

export default Header;
