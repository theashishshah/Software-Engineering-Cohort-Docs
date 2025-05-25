import { useState } from "react";
import "./style.css";

function App() {
	const [count, setCount] = useState(1);

	const increase = () => {
		setCount((pre) => pre + 1);
	};
	const decrease = () => {
		setCount((pre) => pre - 1);
	};
	return (
		<div id="container">
			<h1>Counter</h1>
			<p>Count value: {count}</p>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
		</div>
	);
}

export default App;
