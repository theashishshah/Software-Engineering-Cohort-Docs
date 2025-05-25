import { useEffect, useState } from "react";

function Dropdown() {
	const [selection, setSelection] = useState("");

    useEffect(() => {
        console.log(selection)
    }, [selection])
	const handleChange = (event) => {
		setSelection(event.target.value);
	};
	return (
		<div className="bg-amber-100 h-full border-amber-200">
			<h1 className="text-blue-600">this is Ashish Shah</h1>
			<label htmlFor="options">Choose an option: </label>
			<select value={selection} onChange={handleChange}>
				<option value="">Select</option>
				<option value="java">java</option>
				<option value="javascript">javascript</option>
				<option value="c++">c++</option>
			</select>
		</div>
	);
}

export default Dropdown;
