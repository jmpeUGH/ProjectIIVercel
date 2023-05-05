const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        director: { type: String, required: true },
        year: { type: Number, required: false },
        genre: { type: String, required: false }
    },
    {
        //collection: "movieTest",
        timestamps: true
    }
);

const Movie = mongoose.model('movie', movieSchema);//Relación con cinema.models

module.exports = Movie;