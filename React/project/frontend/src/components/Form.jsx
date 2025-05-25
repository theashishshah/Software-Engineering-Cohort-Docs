import { useState, useEffect } from "react";

const BeautifulForm = () => {
	const [formData, setFormData] = useState("Loadign...");

	useEffect(() => {
		fetch("/api")
			.then((res) => res.json())
            .then((data) => setFormData(data.message))
            .catch(() => setFormData("Failed to load."))
	}, []);

	return (
		<div>
			<h1>Hello from react series</h1>
			<p>This is your instructor Ashish shah</p>
			<p>Data will show: {formData}</p>
		</div>
	);
};

export default BeautifulForm;
