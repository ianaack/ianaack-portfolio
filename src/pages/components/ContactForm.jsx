import React, { useState } from "react";
import FormRedirect from "./sub-components/FormRedirect";

const ContactForm = () => {
	// state variables
	const [firstName, setfirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");

	// updates state variables based on the targetted event
	const handleInputChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case "firstName":
				setfirstName(value);
				break;
			case "lastName":
				setLastName(value);
				break;
			case "email":
				setEmail(value);
				break;
			case "phoneNumber":
				setPhoneNumber(value);
				break;
			case "message":
				setMessage(value);
				break;
			default:
				break;
		}
	};

	// submits the contact form if all elements are present, otherwise throws an alert.
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (firstName && lastName && email && phoneNumber && message) {
			setfirstName("");
			setLastName("");
			setEmail("");
			setPhoneNumber("");
			setMessage("");

			const form = document.getElementById("contactForm");
			form.submit();
		} else {
			// TODO: Convert this from an alert to some other form of error handling
			alert("Please fill out all form fields and submit again.");
		}
	};

	return (
		<>
			<div className="container" id="contact">
				<div className="text-center">
					<h2 className="section-heading text-uppercase">Contact Us</h2>
				</div>
			</div>
			<form
				id="contactForm"
				// action="https://submit-form.com/4rAYtMaX"
				method="POST"
			>
				<div className="row justify-content-center mb-5">
					<div className="col-lg-3 col-md-6 col-sm-9">
						{/* First Name Input */}
						<div className="form-group">
							<input
								value={firstName}
								name="firstName"
								onChange={handleInputChange}
								className="form-control"
								type="text"
								id="firstName"
								placeholder="First Name *"
								required
							/>
						</div>
						{/* Last Name Input */}
						<div className="form-group">
							<input
								value={lastName}
								name="lastName"
								onChange={handleInputChange}
								className="form-control"
								type="text"
								id="lastName"
								placeholder="Last Name *"
								required
							/>
						</div>
						{/* Email Address Input */}
						<div className="form-group">
							<input
								value={email}
								name="email"
								onChange={handleInputChange}
								className="form-control"
								type="email"
								id="emailInput"
								placeholder="Email *"
								required
							/>
						</div>
						{/* Phone Number Input */}
						<div className="form-group">
							<input
								value={phoneNumber}
								name="phoneNumber"
								onChange={handleInputChange}
								className="form-control"
								type="tel"
								id="phoneNumber"
								placeholder="Phone Number *"
							/>
						</div>
					</div>
					{/* Message Input */}
					<div className="col-lg-3 col-md-6 col-sm-9">
						<div className="form-group form-group-textarea mb-md-0">
							<textarea
								value={message}
								name="message"
								onChange={handleInputChange}
								className="form-control"
								type="textarea"
								id="message"
								placeholder="Message *"
								required
							/>
						</div>
					</div>
				</div>
				<FormRedirect firstName={firstName} lastName={lastName} />
				{/* Submit Button */}
				<div className="text-center">
					<button
						className="btn btn-primary btn-xl text-uppercase"
						id="submitButton"
						type="submit"
						onClick={handleFormSubmit}
					>
						Send Message{" "}
						<span>
							<i className="bi bi-send-fill"></i>
						</span>
					</button>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
