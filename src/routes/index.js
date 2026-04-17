const{ Router } = require("express");

const moviesRoutes = require("./movies.routes");

const routes = Router();
routes.use("/movies", moviesRoutes);

module.exports = routes;
