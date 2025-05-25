import express from "express";
import cors from "cors"

const app = express();
const PORT = 3000;

// Root route
app.use(cors())
app.get("/api", (req, res) => {
	res.status(200).json({
		success: true,
		message:"Ashish Shah"
	});
});

// Route 1: /about
app.get("/about", (req, res) => {
	res.send("This is the About page.");
});

// Route 2: /contact
app.get("/contact", (req, res) => {
	res.send("This is the Contact page.");
});

// Route 3: /api/data (example JSON response)
app.get("/api/data", (req, res) => {
	res.json({
		message: "Here is some JSON data",
		success: true,
		data: [1, 2, 3, 4],
	});
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
