let movies = require('./movies_db.js');

class MoviesController {
    constructor(theMovies) {    
        this.movies = theMovies;
    }
    createMovie(name, year) {
        if(this.movies.find(it => it.name === name && it.year === year)) {
            throw new Error(`Movie ${name} released on ${year} already exists`);
        }
        else {
            this.movies.push({
                id: new Date().getTime(),
                name,
                year
            });
        }
    }
    deleteMovie(id) {
        if(!this.movies.find(it => it.id === id)) {
            throw new Error("Movie is not found");
        }
        else {
            this.movies = this.movies.filter(it => it.id !== id);
        }
    }

    getAllMovies() {
        return this.movies;
    }

    updateYear(id, year) {
        let movie = this.movies.find(it => it.id === id);
        if(!movie) {
            throw new Error(`Movie is not found`);
        }
        else {
            movie.year = year;
        }
    }
}

module.exports = new MoviesController(movies);