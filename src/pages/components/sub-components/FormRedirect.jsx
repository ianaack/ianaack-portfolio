import React from "react";

const FormRedirect = ({ firstName, lastName }) => {
	return (
		<>
			<input type={"hidden"} name="_feedback.whitelabel" value="true" />
			<input
				type={"hidden"}
				name="_feedback.success.title"
				value="We have received your information."
			/>
			<input
				type={"hidden"}
				name="_feedback.success.message"
				value={
					"Thank you for contacting us. We will get back to you as soon as possible."
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
				value={"Please call us at 1(705)328-2625"}
			/>
			<input type={"hidden"} name="_email.from" value="T & B Auto Form" />
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
