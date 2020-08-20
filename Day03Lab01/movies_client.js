//axios, http, node-fetch
//sudo npm i --save node-fetch
let fetch = require("node-fetch");
let url = "http://localhost:3000/api/movies";

fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log("Error: " + err.message));