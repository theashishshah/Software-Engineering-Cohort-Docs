const http = require('http');


const handlerFunction = (req, res) => {
    console.log(req.method)
    console.log(req.url)
    if (req.method === 'POST' && req.url === '/data') {
        let body = '';

        // Listen for data chunks
        req.on('data', chunk => {
            // console.log(chunk)
            body += chunk.toString(); // Convert Buffer to string
        });

        // End of data
        req.on('end', () => {
            try {
                const parsedData = JSON.parse(body); // Parse JSON
                console.log("Received JSON Data:", parsedData);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: "Data received successfully", data: parsedData }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: "Invalid JSON format" }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Route Not Found");
    }
}

const server = http.createServer(handlerFunction);

server.listen(9999, () => {
    console.log("Server running at http://localhost:9999");
});
