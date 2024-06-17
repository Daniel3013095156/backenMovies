const Actor = require("./Actor")
const Director = require ("./Director")
const Movie = require ("./Movie")
const Genre = require ("./Genre")

Movie.belongsToMany(Actor,{through:'moviesActor'})
Actor.belongsToMany(Movie,{through:'moviesActor'})

Movie.belongsToMany(Director,{through:'moviesDirectors'})
Director.belongsToMany(Movie,{through:'moviesDirectors'})

Movie.belongsToMany(Genre, {through:"moviesGenres"})
Genre.belongsToMany(Movie, {through:"moviesGenres"})

