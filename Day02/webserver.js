let http = require("http");
let fs = require("fs");

//Closures
let server = http.createServer((req, res) => {
    fs.readFile(__dirname + '/index.html', (err, data) => {
        if(!err) {
            res.end(data.toString());
        }
    });
});
server.listen(3000, "localhost", () => {
    console.log("server started in 3000");
});