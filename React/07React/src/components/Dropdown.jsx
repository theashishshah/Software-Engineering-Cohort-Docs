import React, { useState } from "react";

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState("Select an option");

	const handleSelect = (option) => {
		setSelected(option);
		setIsOpen(false);
	};

	const options = ["Option 1", "Option 2", "Option 3"];

	return (
		<div className="relative inline-block w-64 ">
			<div className="mb-2 font-medium ">Dropdown Label</div>
			<div
				className="border border-gray-300 rounded px-4 py-2 bg-gray-800 text-white cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				{selected}
			</div>

			{isOpen && (
				<ul className="absolute w-full mt-1  border border-gray-300 rounded shadow z-10 bg-gray-800 text-white">
					{options.map((option, index) => (
						<li
							key={index}
							onClick={() => handleSelect(option)}
							className="px-4 py-2  cursor-pointer hover:bg-gray-900 text-white"
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
