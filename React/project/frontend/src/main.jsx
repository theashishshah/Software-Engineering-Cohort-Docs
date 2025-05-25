import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import BeautifulForm from "./components/Form.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BeautifulForm />
	</StrictMode>
);
