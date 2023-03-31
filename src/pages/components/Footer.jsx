import React from "react";

function Footer() {
	return (
			<div className="social-media-list">
				<li className="mx-3">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/ianaack"
						className="social-icon"
					>
						<span className="bi bi-github"></span>
					</a>
				</li>
				<li className="mx-3">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://linkedin.com/in/ianaack"
						className="social-icon"
					>
						<span className="bi bi-linkedin"></span>
					</a>
				</li>
				<li className="mx-3">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://twitter.com/ianaack"
						className="social-icon"
					>
						<span className="bi bi-twitter"></span>
					</a>
				</li>
			</div>
	);
}

export default Footer;
