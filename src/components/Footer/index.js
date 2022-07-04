import React from "react";

function Footer() {
	return (
		<div className="footer container">
			Made with ❤️ by Ian Ackerman
			<div className="mb-2 social-media-list">
				<li className="mx-3">
					<a href="https://github.com/ianaack" className="social-icon">
						<span className="bi bi-github"></span>
					</a>
				</li>
				<li className="mx-3">
					<a href="https://linkedin.com/in/ianaack" className="social-icon">
						<span className="bi bi-linkedin"></span>
					</a>
				</li>
				<li className="mx-3">
					<a href="https://twitter.com/ianaack" className="social-icon">
						<span className="bi bi-twitter"></span>
					</a>
				</li>
			</div>
		</div>
	);
}

export default Footer;
