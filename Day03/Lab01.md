* Create a new Node JS project called __Lab01__
* Install the dependencies express and nodemon
* Have the following structure created

```
[lab01]
	- [app]
		- movies_db.js
		- movies_controller.js
	- [public]
	- package.json
	- index.js
	
```

* movies_db.js has the following array which will act as a db

``` javascript
	movies: [ 
		{ id: "m101", name: "Sultan", year: 2015 },
		{ id: "m102", name: "Lagaan", year: 2002 },
		{ id: "m103", name: "Kaala", year: 2019 }
	]	
```

* Build the following API to perform CRUD operations on the movies collection

*  __POST /api/movies/name/:name/year/:year__  to add movie
* __GET /api/movie__ to list all the movies
* __DELETE /api/movie/:id__ to delete the movie
* __PATCH api/movie/id/:id/year/:year__ to modify the movie's year of release 


* Duplication of movies are not allowed
* Your routes should be in __index.js__
* The core logic to manipulate the movies_db.js should be in movies_controller.js


