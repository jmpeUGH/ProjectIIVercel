const Movie = require("..//models/movie.models");

const getAllMovies = async (req, res) => {
	try {
		const movies = await Movie.find();
		return res.status(200).json(movies)
	} catch (err) {
		return res.status(500).json(err);
	}
};

const getMoviesId = async (req, res) => {
	const id = req.params.id;
	try {
		const movie = await Movie.findById(id);
		if (movie) {
			return res.status(200).json(movie);
		} else {
			return res.status(404).json('No movie found by this id');
		}
	} catch (err) {
		return res.status(500).json(err);
	}
};

const getMoviesTitle = async (req, res) => {
	const {title} = req.params;
	try {
		const movieByTitle = await Movie.find({ title });
		return res.status(200).json(movieByTitle);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const getMoviesGenre = async (req, res) => {
	const {genre} = req.params;
	try {
		const moviesByGenre = await Movie.find({ genre });
		return res.status(200).json(moviesByGenre);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const getMoviesYear = async (req, res) => {
	const {year} = req.params;
	try {
		const moviesByYear = await Movie.find({ year: {$gt:year} });
		return res.status(200).json(moviesByYear);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const postMovies = async (req, res) => {

	try {
       
        const newMovie = new Movie(req.body);
		//res.send(newMovie);
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);

    } catch (error) {
        return res.status(500).json(error);
    }
    
};

const putMovies = async (req, res) => {
    try {
        
        const {id} = req.params;
       
        const putMovie = new Movie(req.body);
        
        putMovie._id = id;
        
        const updatedMovie = await Movie.findByIdAndUpdate(id,putMovie,{new:true});
       
        if(!updatedMovie){
            return res.status(404).json({message: "película no encontrada"});
        }
        return res.status(200).json(updatedMovie);

    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteMovies = async (req, res) => {
    
    try {
 
        const {id} = req.params;
 
        const deletedMovie = await Movie.findByIdAndDelete(id);
 
        if(!deletedMovie){
            return res.status(404).json({message: "película no encontrada"});
        }
        return res.status(200).json(deletedMovie);

    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getAllMovies,
    getMoviesId,
    getMoviesTitle,
    getMoviesGenre,
    getMoviesYear,
	postMovies,
    putMovies,
    deleteMovies
};