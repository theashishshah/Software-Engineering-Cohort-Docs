import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Profile from "./components/Profile.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Profile />
	</StrictMode>
);
