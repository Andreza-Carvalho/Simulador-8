const { Router } = require ("express");
const MoviesController = require("../controllers/MoviesController");

const moviesRoutes = Router();
const moviesController = new MoviesController();

moviesRoutes.get("/", moviesController.index);
moviesRoutes.post("/", moviesController.create);

moviesRoutes.put("/:id", moviesController.update);
moviesRoutes.delete("/:id", moviesController.delete);

module.exports = moviesRoutes;
