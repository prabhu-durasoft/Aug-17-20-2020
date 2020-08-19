const app = require("express")();
const moviesController = require("./app/movies_controller.js");
const process = require("process");
const port = process.env["PORT"] || 3000;

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