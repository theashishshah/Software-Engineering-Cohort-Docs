import React, { useState } from "react";
import useSubmitForm from "../hooks/useSubmitForm";

function ContactForm() {
	const { loading, successMessage, error, submitHandle } = useSubmitForm();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	// const handleChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setFormData((prev) => ({
	// 		...prev,
	// 		[name]: value,
	// 	}));
    // };
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

	const submitHandler = async (e) => {
		e.preventDefault();
		await submitHandle(formData);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-pink-500 to-red-500 p-6">
			<div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20">
				<h2 className="text-3xl text-white font-bold mb-6 text-center">
					Contact Us
				</h2>
				<form onSubmit={submitHandler} className="space-y-4">
					<div>
						<label
							htmlFor="name"
							className="block text-white text-sm font-medium mb-1"
						>
							Enter Name:
						</label>
						<input
							autoComplete="on"
							type="text"
							name="name"
							id="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Enter full name..."
							className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition-all font-wide"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-white text-sm font-medium mb-1"
						>
							Enter Email:
						</label>
						<input
							autoComplete="on"
							type="email"
							name="email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Enter your email..."
							className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition-all font-wide"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-white text-sm font-medium mb-1"
						>
							Enter Password:
						</label>
						<input
							autoComplete="current-password hello@gmail.com"
							type="password"
							name="password"
							id="password"
							placeholder="***"
							value={formData.password}
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition-all font-wide"
							required
						/>
					</div>

					<button
						type="submit"
						disabled={loading}
						className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md  transition-all disabled:opacity-50"
					>
						{loading ? "Submitting..." : "Submit"}
					</button>

					{successMessage && (
						<p className="text-green-600 text-center mt-2">
							{successMessage}
						</p>
					)}
					{error && (
						<p className="text-red-300 text-center mt-2">{error}</p>
					)}
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
