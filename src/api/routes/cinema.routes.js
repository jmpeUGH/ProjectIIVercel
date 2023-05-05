const express = require('express');

const {getCinemas, postCinemas, putCinemas, deleteCinemas,getCinemaPorNombre} = require('../controllers/cinema.controllers');

const router = express.Router();


router.get("/", getCinemas);

router.post("/", postCinemas);

router.put("/:id", putCinemas);

router.delete("/:id", deleteCinemas);

router.get("/nombreCine/:name", getCinemaPorNombre);

module.exports = router;