let ws = require("ws");
let http = require("http");

let server = http.createServer((req, res) => {
    res.end("Hello Web Sockets");
});
const socket = new ws.Server({server});
socket.on("connection", (ws) => {
    setInterval(() => {
        let sensex = (Math.random() * 400000);
        ws.send("Sensex: " + sensex);
    }, 2000);
    
});

server.listen(3000);
console.log("Server started in 3000");