const asyncHandler = require('express-async-handler');
const model = require('../model/cars');

const getMovies = asyncHandler(async (req, res) => res.status(200).json(await model.getMovies()));
// const deleteCar = asyncHandler(async (req, res) =>
//   res.status(200).json(await model.deleteCar(req.params.id)),
// );
// const changeStatusCar = asyncHandler(async (req, res) =>
//   res.status(200).json(await model.changeStatusCar(req.params.id, req.body)),
// );
// const addCar = asyncHandler(async (req, res) => res.status(200).json(await model.addCar(req.body)));

module.exports = {
  getMovies,
  // deleteCar,
  // changeStatusCar,
  // addCar,
};
