const express = require('express');

const router = express.Router();

const {getAllMovies,
    getMoviesId,
    getMoviesTitle,
    getMoviesGenre,
    getMoviesYear,
    postMovies,
    putMovies,
    deleteMovies
} = require("../controllers/movie.controllers");

router.get("/", getAllMovies);

router.get("/id/:id", getMoviesId);

router.get("/title/:title", getMoviesTitle);

router.get("/genre/:genre", getMoviesGenre);

router.get("/year/:year", getMoviesYear);

router.post("/", postMovies);

router.put("/:id", putMovies);

router.delete("/:id", deleteMovies);


module.exports = router;