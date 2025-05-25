import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dropdown from './components/Dropdown.jsx'

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Dropdown />
	</StrictMode>
);
