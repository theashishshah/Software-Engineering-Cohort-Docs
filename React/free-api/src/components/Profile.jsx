import { useEffect, useState } from "react";

function Profile() {
	const url =
		"https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=50";
	const options = { method: "GET", headers: { accept: "application/json" } };

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const generateRandomNumber = () => {
		return Math.floor(Math.random() * 50);
	};

	const fetchApi = async () => {
		setLoading(true);
		setError("");
		try {
			const response = await fetch(url, options);
			const json = await response.json();

			const number = generateRandomNumber();
			const userData = json?.data?.data?.[number];
			if (!userData) {
				throw new Error("User data not found in API response.");
			}

			setUser({
				name: `${userData.name.first} ${userData.name.last}`,
				gender: userData.gender,
				email: userData.email,
				phone: userData.phone,
				dob: userData.dob.date,
				age: userData.dob.age,
				imageUrl: userData.picture.large,
				location: `${userData.location.city}, ${userData.location.country}`,
			});
		} catch (err) {
			console.error(err);
			setError("Failed to fetch user data.");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchApi()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
			<div className="bg-white rounded-lg shadow-lg w-full max-w-sm overflow-hidden">
				<div className="bg-blue-700 h-24 relative">
					{user && (
						<img
							src={user.imageUrl}
							alt="Profile"
							className="w-24 h-24 rounded-full border-4 border-white absolute left-1/2 -bottom-12 transform -translate-x-1/2"
						/>
					)}
				</div>

				<div className="pt-16 pb-6 px-6 text-center">
					<h2 className="text-xl font-bold text-gray-800">
						{user ? user.name : "Random User"}
					</h2>
					{user && (
						<>
							<p className="text-sm text-gray-500">
								{user.location}
							</p>
							<p className="mt-2 text-gray-600">
								📧 {user.email}
							</p>
							<p className="text-gray-600">📱 {user.phone}</p>
							<p className="text-gray-600">
								🎂 {new Date(user.dob).toLocaleDateString()} (
								{user.age} years)
							</p>
							<p className="text-gray-600">🚻 {user.gender}</p>
						</>
					)}

					{loading && (
						<p className="text-blue-500 mt-2">Loading...</p>
					)}
					{error && <p className="text-red-500 mt-2">{error}</p>}

					<button
						onClick={fetchApi}
						className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-full shadow"
					>
						Generate Random User
					</button>
				</div>
			</div>
		</div>
	);
}

export default Profile;
