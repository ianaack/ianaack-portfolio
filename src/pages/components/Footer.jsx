import React from "react";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="footer py-4">
			<div className="container">
				<div className="row align-items-center">
					<h5 className="col-lg-6">
						Copyright &copy; Ian Ackerman {year}
					</h5>
					<div className="col-lg-4 my-3 my-lg-0">
						<a
							className="btn btn-dark btn-social mx-2"
							target="_blank"
							rel="noreferrer"
							href="https://twitter.com/ianaack"
							aria-label="Twitter"
						>
							<i className="bi bi-twitter"></i>
						</a>
						<a
							className="btn btn-dark btn-social mx-2"
							target="_blank"
							rel="noreferrer"
							href="https://github.com/ianaack"
							aria-label="Github"
						>
							<i className="bi bi-github"></i>
						</a>
						<a
							className="btn btn-dark btn-social mx-2"
							target="_blank"
							rel="noreferrer"
							href="https://linkedin.com/in/ianaack"
							aria-label="LinkedIn"
						>
							<i className="bi bi-linkedin"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
