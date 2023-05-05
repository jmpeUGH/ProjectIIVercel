const mongoose = require("mongoose");

const dotenv = require("dotenv");


const Movie = require("../api/models/movie.models");

dotenv.config();


const arrMovies = [
    {
        "title": "The Matrix",
        "director": "Hermanas Wachowski",
        "year": 1999,
        "genre": "Acción"
      },
      {
        "title": "The Matrix Reloaded",
        "director": "Hermanas Wachowski",
        "year": 2003,
        "genre": "Acción"
      },
      {
        "title": "Buscando a Nemo",
        "director": "Andrew Stanton",
        "year": 2003,
        "genre": "Animación"
      },
      {
        "title": "Buscando a Dory",
        "director": "Andrew Stanton",
        "year": 2016,
        "genre": "Animación"
      },
      {
        "title": "Interestelar",
        "director": "Christopher Nolan",
        "year": 2014,
        "genre": "Ciencia ficción"
      },
      {
        "title": "50 primeras citas",
        "director": "Peter Segal",
        "year": 2004,
        "genre": "Comedia romántica"
      }
];


const user = process.env.USER;
const psw = process.env.PSW;
const dbName = process.env.DB_NAME;
const uri = `mongodb+srv://${user}:${psw}@cluster0.3nhnowi.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri)
.then(async()=> {
    const allMovies = await Movie.find();
    if(allMovies.length>0){
        await Movie.collection.drop();
        console.log("Borradas todas las películas")
    }
})
.catch((error)=> console.log("Error borrando las películas: " + error))
.then(async()=> {
  
  const movieMap = arrMovies.map((movie) => new Movie(movie));
  
  await Movie.insertMany(movieMap);
  console.log("Películas insertadas");

})
.catch((error)=> console.log("Error insertando películas: " + error))
.finally(()=> mongoose.disconnect())