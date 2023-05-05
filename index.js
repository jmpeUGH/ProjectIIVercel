const express = require('express');

const app = express();

const cors = require('cors');

const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;

const {connect} = require("./src/utils/db.js");

connect();

app.use(cors());

app.use(express.json());

const routerMovie = require("./src/api/routes/movie.routes.js");
const routerCinema = require("./src/api/routes/cinema.routes.js");


app.use("/movies",routerMovie);
app.use("/cinemas",routerCinema);


app.use("/",(req,res)=>{
    res.send("Servidor en funcionamiento")
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});