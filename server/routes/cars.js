const express = require('express');
const { getMovies } = require('../controllers/cars');

const router = express.Router();

router.get('/movies', getMovies);
// router.patch('/cars/:id', changeStatusCar);
// router.delete('/cars/:id', deleteCar);
// router.post('/cars', addCar);

module.exports = router;
