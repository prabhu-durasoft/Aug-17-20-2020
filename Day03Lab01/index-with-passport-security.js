const express = require("express");
const app = express();
const moviesController = require("./app/movies_controller.js");
const process = require("process");
const port = process.env["PORT"] || 3000;
const jwt = require("jsonwebtoken");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
app.use(passport.initialize());

const secretKey = "beer in chennai";

const authorize = (req, res, next) => {
    //CHECK FOR CREDENTIALS => BEARER [token] and verify
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1]; //BEARER token
        jwt.verify(token, secretKey, (err, data) => {
            console.log(data);
            if (err) {
                res.sendStatus(401);
            }
            else {
                req.username = data.username;
                next();
            }
        })
    }
    else {
        res.sendStatus(401);
    }
}

passport.use("locallogin", new localStrategy({
    usernameField: "username",
    passwordField: "password"
}, (username, password, done) => {
    if (username === 'admin' && password === 'admin') {
        return done(null, {username}, {message: 'Logged in Successfully'});
    }
    else {
        return done(null, false, {message: 'Invalid credentials'});
    }
}));


app.use(/\/((?!login).)*/, authorize);

//express.urlencoded() this is used for form-url-encoded
//express.json() this is used for json in request body

app.post("/login", [express.json(), passport.authenticate('locallogin', {session: false})], (req, res) => {
    const  {username} = req.body;
    const payload = { username };
    const token = jwt.sign(payload, secretKey, { expiresIn: '2m'});
    res.json({token});
});

app.post("/api/movies/export/:file", (req, res) => {
    //save the movies collection to a file
    moviesController.saveMoviesInFile(req.params.file, (err) => {
        if (!err) {
            res.sendStatus(200);
        } else {
            res.status(500).send(err.message);
        }
    });
});

app.get("/api/movies", (req, res) => {
    const movies = moviesController.getAllMovies();
    res.json(movies);
});

app.post("/api/movies/:name/:year", (req, res) => {
    try {
        const {name, year} = req.params;
        moviesController.createMovie(name, year);
        res.status(202).send("Movie created");
    } catch (e) {
        res.status(400).send(e.message);
    }
});

app.delete("/api/movies/:id", (req, res) => {
    try {
        const {id} = req.params;
        moviesController.deleteMovie(id)
        res.status(202).send("Movie deleted");
    } catch (e) {
        res.status(404).send(e.message); //or 204
    }
});

app.patch("/api/movies/:id/:year", (req, res) => {
    try {
        const {id, year} = req.params;
        moviesController.updateYear(id, year)
        res.status(202).send("Movie year of release updated");
    } catch (e) {
        res.status(404).send(e.message); //or 204
    }
});


app.listen(port, () => {
    console.log("Server started in port", port);
});