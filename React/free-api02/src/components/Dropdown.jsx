import { useState } from "react";

export default function Dropdown() {
	const [selected, setSelected] = useState("");
	const [open, setOpen] = useState(false);
	const options = ["Option 1", "Option 2", "Option 3"];

	return (
		<div className="border-1 rounded-md h-fit w-fit ml-8 mt-8 border-gray-50/25 text-center px-4 py-2">
			<button>Select language</button>{" "}
			<svg
				className="w-4 h-4 ml-2 mt-1"
				viewBox="0 0 20 20"
				fill="white"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M7 5l5 5-5 5V5z" />
			</svg>
		</div>
	);
}
