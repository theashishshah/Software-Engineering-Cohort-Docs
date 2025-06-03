import React, { useEffect, useState } from "react";
import axios from "axios";
import ListCard from "./ListCard";

function Jokes() {
	const [jokes, setJokes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [content, setContent] = useState("");
	let data = [];
	useEffect(() => {
		const freeapiURL =
			"https://api.freeapi.app/api/v1/public/randomjokes?limit=50&query=science&inc=categories%252Cid%252Ccontent&page=1";

		const options = {
			headers: {
				Accept: "application/json",
			},
		};
		const fetchApi = async () => {
			try {
				const freeapiResponse = await axios.get(freeapiURL, options);
				// console.log("Free api response: ", freeapiResponse);
				const data =
					freeapiResponse?.data?.data?.data &&
					freeapiResponse.data.data.data.length > 0
						? freeapiResponse.data.data.data
						: [{ content: "Jokes are not available", id: 324 }];

				console.log(data)
				setJokes(data);
				setTimeout(() => {
					setLoading(false);
				}, 0.5 * 1000);
			} catch (error) {
				console.error("Error fetching jokes:", error);
			}
		};

		fetchApi();
	}, []);

	const handleOnClickList = (content) => {
		setContent(content);
	};
	return (
		<div className="flex flex-col items-center justify-center m-4">
			<h1 className="text-4xl font-bold mb-4">
				Random Jokes from{" "}
				<a
					href="http://freeapi.app"
					target="_blank"
					className="text-blue-500 underline"
				>
					freeapi.app
				</a>
			</h1>
			<ul>
				{loading
					? "Loading..."
					: jokes.map((jokeObj) => (
							<ListCard
								content={jokeObj.content}
								key={jokeObj.id}
								onClick={() => {
									handleOnClickList(jokeObj.content);
								}}
							/>
						))}
			</ul>

			<div className="flex items-center">
				<label htmlFor="joke" className="mr-2 text-xl text-orange-500">
					Clicked joke:
				</label>
				<div className="text-xl text-green-400 hover:bg-white/10 px-4 py-2 hover:border-1 rounded-md">
					{content.length > 30 ? (
						<>
							{content.slice(0, 35)} ...{" "}
							<a
								href="#"
								className="text-blue-600 underline ml-1"
							>
								more
							</a>{" "}
						</>
					) : (
						content
					)}
				</div>
			</div>
		</div>
	);
}

export default Jokes;
