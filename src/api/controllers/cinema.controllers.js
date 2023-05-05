const Cinema = require("../models/cinema.models");

const getCinemas = async (req, res) => {
    try {
        //const allCinemas = await Cinema.find();
        const allCinemas = await Cinema.find().populate({
            path: "movies",
            select:"_id title genre"
            });
        return res.status(200).json(allCinemas);
    } catch (error) {
        res.send("No encuentro el servidor")
        return res.status(500).json(error);
    }
};

const getCinemaPorNombre = async (req, res) => {
	const {name} = req.params;
	try {
		const cinemaByNombre = await Cinema.find({ name })
        // const cinemaByNombre = await Cinema.find({ name }).populate({path: "movies", select:"_id title genre"});
		return res.status(200).json(cinemaByNombre);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const postCinemas = async (req, res) => {
    try {
        const newCinema = new Cinema(req.body);

        const createdCinema = await newCinema.save();
        return res.status(201).json(createdCinema);

        //Para poder recibir datos de tipo JSON, en index debo indicar que mi app va a usar express.json().

    } catch (error) {
        return res.status(500).json(error);
    }
};

const putCinemas = async (req, res) => {
    try {
        const {id} = req.params;
        const putCinema = new Cinema(req.body);
        putCinema._id = id;
        const updatedCinema = await Cinema.findByIdAndUpdate(id,putCinema,{new:true});
        if(!updatedCinema){
            return res.status(404).json({message: "Cine no encontrado"});
        }
        return res.status(200).json(updatedCinema);

    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCinemas = async (req, res) => {
    try {
        const {id} = req.params;
        
        const deletedCinema = await Cinema.findByIdAndDelete(id);
        //Puedo añadir un if de control por si no se encuentra el registro
        if(!deletedCinema){
            return res.status(404).json({message: "Cine no encontrado"});
        }
        return res.status(200).json(deletedCinema);

    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = {
    getCinemas,
    postCinemas,
    putCinemas,
    deleteCinemas,
    getCinemaPorNombre
};

//3. Cuando los tengo exportados, me voy a routes y los sustituyo en los métodos.