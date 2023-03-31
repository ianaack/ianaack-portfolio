import React from "react";

const pages = [
	{ name: "About Me", link: "/about-me" },
	{ name: "Contact Me", link: "/contact-me" },
	{ name: "Projects", link: "/projects" },
	{ name: "Resume", link: "/resume" },
];

const NavItem = () => {
	const currentPage = [];

	for (let i = 0; i < pages.length; i++) {
		const { name, link } = pages[i];

		const navItem = (
			<li className="nav-item mx-1" key={name}>
				<a href={link} className="h4 m-2">| {name}</a>
			</li>
		);

		currentPage.push(navItem);
	}

	return (
		<div
			className="navbar-collapse justify-content-end collapse"
			id="navbarNav"
		>
			<ul className="navbar-nav">{currentPage}</ul>
		</div>
	);
};

export default NavItem;
