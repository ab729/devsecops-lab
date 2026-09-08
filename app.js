const https = require("https");
const fs = require("fs");

const PORT = process.env.PORT || 3000;
const testApiKey = "ghp_1234567890abcdefghijklmnopqrstuvwxyz";

const options = {
    key: fs.readFileSync("certs/server.key"),
    cert: fs.readFileSync("certs/server.crt")
};

const users = [
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Security Engineer" }
];

const server = https.createServer(options, (req, res) => {

    res.setHeader("Content-Type", "application/json");

    if (req.url === "/health" && req.method === "GET") {
        res.writeHead(200);
        res.end(JSON.stringify({
            status: "ok"
        }));
        return;
    }

    if (req.url === "/api/users" && req.method === "GET") {
        res.writeHead(200);
        res.end(JSON.stringify(users));
        return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({
        error: "Not Found"
    }));
});

server.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
});