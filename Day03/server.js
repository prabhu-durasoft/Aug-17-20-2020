const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//middleware
const authorization = (req, res, next) => {
    console.log('*******auth');
    next();
}

const logging = (req, res, next) => {
    console.log("----- " + "[" + req.method + "]   "  + req.url);
    next();
};
const logging2 = (req, res, next) => {
    console.log("==== " + new Date().toLocaleTimeString());
    next();
};

//APPLY IT TO ALL THE ROUTES
//app.use(logging, logging2, authorization);
//app.use(["/now", "/bye"], authorization);
app.use(authorization)

app.get('/now', logging, (req, res) => {
    const response = { date: new Date().toLocaleTimeString() };
    res.json(response);
});

app.get('/bye', [logging, logging2], (req, res) => {
    const queryStringParams = req.query;
    res.end("Bye Bye " + queryStringParams.name);
});

app.get('/hello/:name', logging, (req, res) => {
    const params = req.params;
    res.end("Hello " + params.name);
});

app.post('/greet', logging,  (req, res) => {
    res.end("Hello there");
});



app.listen(3000, () => {
    console.log("Server started in 3000");
});
