import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Jokes from './components/Jokes'
import HookTest from './components/HookTest';
import Dropdown from './components/Dropdown';
import ContactForm from './components/ContactForm';

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ContactForm />
	</StrictMode>
);
