import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const { name, email, message } = formState;

	const [errorMessage, setErrorMessage] = useState("");

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			// isValid conditional statement
			if (!isValid) {
				setErrorMessage(`${e.target.name} is invalid.`);
			} else {
				setErrorMessage("");
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<section className="container">
			<h2 className="formHeader text-center">Contact Me</h2>
			<form className="mb-3" onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="name">Name:</label>
					<input
						className="form-control form-control-lg"
						type="text"
						defaultValue={name}
						onBlur={handleChange}
						name="name"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email">Email Address:</label>
					<input
						className="form-control form-control-lg"
						type="text"
						defaultValue={email}
						onBlur={handleChange}
						name="email"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="message">Message:</label>
					<textarea
						className="form-control form-control-lg"
						name="message"
						defaultValue={message}
						onBlur={handleChange}
						rows="5"
					/>
				</div>

				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}

				<button className="submitBtn btn mb-3 mx-auto d-block" type="submit">
					Submit
				</button>
			</form>
		</section>
	);
}

export default Contact;
