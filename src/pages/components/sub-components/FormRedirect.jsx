import React from "react";

const FormRedirect = ({ firstName, lastName }) => {
	return (
		<>
			<input type={"hidden"} name="_feedback.whitelabel" value="true" />
			<input
				type={"hidden"}
				name="_feedback.success.title"
				value="I have received your information."
			/>
			<input
				type={"hidden"}
				name="_feedback.success.message"
				value={
					"Thank you for contacting me. I will get back to you as soon as possible."
				}
			/>
			<input
				type={"hidden"}
				name="_feedback.error.title"
				value="There was an issue with the form."
			/>
			<input
				type={"hidden"}
				name="_feedback.error.message"
				value={"Please call me at 1(416)709-9206"}
			/>
			<input type={"hidden"} name="_email.from" value="Ian Ackerman Portfolio" />
			<input type="hidden" name="_email.template.footer" value="false" />
			<input
				type="hidden"
				name="_email.template.title"
				value={firstName + " " + lastName + "'s form information."}
			/>
			<input
				type="hidden"
				name="_email.subject"
				value={firstName + " " + lastName + " has submitted a form."}
			/>
		</>
	);
};

export default FormRedirect;
