let http = require("http");
const process = (req, res) => {
    console.log(req.method, req.url);
    if (req.url === "/hello" && req.method === "GET") {
        res.end("Hello Node Server");
    } 
    else if(req.url === "/login" && req.method === "POST") {
        res.end("Invalid credentials");
    }
    else {
        res.writeHead(404);
        res.end();
    }
};

let server = http.createServer(process);
server.listen(6001, "localhost", () => {
    console.log("server started in 6001");
});