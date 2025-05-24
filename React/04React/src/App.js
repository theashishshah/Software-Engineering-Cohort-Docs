import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const App = () => {
	return React.createElement(
		"div",
		{},
		React.createElement(
			"h1",
			{ style: { background: "blue", color: "black" } },
			"Basic react class using React create element method",
		),
	);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
console.log(container);
