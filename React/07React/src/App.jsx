import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(4);
	return (
		<>
			<h1>Vite + React</h1>
			<div className="card">
				<p>{count}</p>
				<p>{count}</p>
				<p>{count}</p>
				<button onClick={() => setCount(prev => prev + 3)}>Count</button>
			</div>
		</>
	);
}

export default App;
